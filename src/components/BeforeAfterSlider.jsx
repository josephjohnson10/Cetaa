import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, caption }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        } else {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-secondary mb-4">{caption}</h3>
            <div
                ref={containerRef}
                className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none border-4 border-white"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* After Image (Background) */}
                <img
                    src={afterImage}
                    alt="Proposed"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded text-sm font-bold z-10">Proposed</div>

                {/* Before Image (Foreground - Clipped) */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <img
                        src={beforeImage}
                        alt="Current"
                        className="absolute inset-0 w-full h-full object-cover max-w-none"
                        style={{ width: containerRef.current?.offsetWidth || '100%' }} // Keep aspect ratio
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-bold z-10">Current</div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-primary">
                        <ArrowLeftRight size={20} />
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2 font-medium italic">Drag slider to compare</p>
        </div>
    );
};

export default BeforeAfterSlider;
