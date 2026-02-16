import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Hammer, CheckCircle, ArrowRight, Share2, Star, Trophy, Gem, Crown, Building2, DoorOpen, Briefcase, Accessibility } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

/* Renovation sub-project data */
const projects = [
    { name: 'Grand CETAA Hall', icon: Building2, pct: 60, budget: '₹20L', status: 'In Progress', color: 'from-gold to-amber-500', statusColor: 'bg-amber-100 text-amber-700' },
    { name: 'Accessible Entrance & Ramp', icon: Accessibility, pct: 75, budget: '₹5L', status: 'Nearing Completion', color: 'from-green-400 to-emerald-600', statusColor: 'bg-green-100 text-green-700' },
    { name: 'Reception & Heritage Wall', icon: DoorOpen, pct: 35, budget: '₹15L', status: 'In Progress', color: 'from-blue-400 to-indigo-600', statusColor: 'bg-blue-100 text-blue-700' },
    { name: 'Office Modernization', icon: Briefcase, pct: 20, budget: '₹10L', status: 'Planning', color: 'from-purple-400 to-violet-600', statusColor: 'bg-purple-100 text-purple-700' },
];

/* Animated bar component */
function ProgressBar({ project, index }) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            className="group"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shadow-md`}>
                        <project.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy text-sm leading-tight">{project.name}</h4>
                        <span className="text-[11px] text-gray-400 font-medium">Budget: {project.budget}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${project.statusColor}`}>{project.status}</span>
                    <span className="text-lg font-black text-navy min-w-[50px] text-right">{project.pct}%</span>
                </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${project.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 + index * 0.15 }}
                    className={`bg-gradient-to-r ${project.color} h-full rounded-full relative`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 animate-pulse" />
                </motion.div>
            </div>
        </motion.div>
    );
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

/* Tiered giving levels */
const tiers = [
    { name: 'Silver', amount: '₹5,000', icon: Star, color: 'from-gray-300 to-gray-400', text: 'text-gray-600', border: 'border-gray-200', bg: 'bg-gray-50' },
    { name: 'Gold', amount: '₹10,000', icon: Trophy, color: 'from-yellow-400 to-amber-500', text: 'text-amber-700', border: 'border-amber-200', bg: 'bg-amber-50' },
    { name: 'Platinum', amount: '₹25,000', icon: Gem, color: 'from-blue-400 to-indigo-500', text: 'text-blue-700', border: 'border-blue-200', bg: 'bg-blue-50', popular: true },
    { name: 'Diamond', amount: '₹1,00,000+', icon: Crown, color: 'from-navy to-blue-900', text: 'text-navy', border: 'border-navy/30', bg: 'bg-navy/5' },
];

const Renovation = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* ===== HERO ===== */}
            <section className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest mb-8 uppercase animate-pulse">
                            <Heart className="w-3.5 h-3.5 fill-primary" /> Urgent Appeal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.95]">
                            Rebuilding Our{' '}
                            <span className="text-gradient">Legacy</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            The CETAA Hall and Reception are more than buildings — they are the heart of our memories.
                            Help us restore them to the standard that befits <strong className="text-white">85 years of engineering excellence</strong>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- PROGRESS CARD --- */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
                    className="glass-card p-8 md:p-12 -mt-20 mb-24 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-primary to-navy"></div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="flex-1 w-full">
                            <h2 className="text-3xl font-black text-navy mb-2">Goal: ₹50 Lakhs</h2>
                            <p className="text-gray-500 mb-6">
                                Help us reach our target to complete all renovations by March 2026.
                            </p>
                            <div className="w-full bg-gray-100 rounded-full h-7 overflow-hidden mb-3 relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '45%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
                                    className="bg-gradient-to-r from-gold to-primary h-full rounded-full relative"
                                >
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs font-bold">
                                        45%
                                    </span>
                                </motion.div>
                            </div>
                            <div className="flex justify-between text-sm font-bold">
                                <span className="text-primary">₹22.5L Raised</span>
                                <span className="text-gray-400">₹50L Target</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <button className="bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-3">
                                <Heart className="fill-current" size={22} /> Donate Now
                            </button>
                            <p className="text-xs text-gray-400">Secure payment via CETAA Official</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- PROJECT PROGRESS CHART --- */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="glass-card p-8 md:p-10 mb-24 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-green-500 to-indigo-500"></div>
                    <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
                        <div>
                            <span className="text-gold font-bold text-xs uppercase tracking-widest">Project Tracker</span>
                            <h3 className="text-2xl font-black text-navy mt-1">Renovation Progress</h3>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-navy">Live Status</span>
                        </div>
                    </motion.div>
                    <div className="space-y-6">
                        {projects.map((project, i) => (
                            <ProgressBar key={i} project={project} index={i} />
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-600"></div>
                                <span className="text-xs text-gray-500 font-medium">Near Complete</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold to-amber-500"></div>
                                <span className="text-xs text-gray-500 font-medium">In Progress</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-violet-600"></div>
                                <span className="text-xs text-gray-500 font-medium">Planning</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400">Last updated: Feb 2026</span>
                    </div>
                </motion.div>

                {/* --- SECTION HEADER --- */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeInUp} className="text-gold font-bold text-sm uppercase tracking-widest">The Transformation</motion.span>
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-navy mt-3">Drag the Sliders to See the Plan</motion.h2>
                </motion.div>

                {/* --- PROJECT 1: HALL --- */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="mb-24"
                >
                    <BeforeAfterSlider
                        beforeImage="/images/renovation/hall_current.png"
                        afterImage="/images/renovation/hall_proposed.png"
                        caption="The Grand CETAA Hall"
                    />
                    <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6 mt-8">
                        <motion.div variants={fadeInUp} className="glass-card p-8">
                            <h4 className="font-bold text-navy mb-4 flex items-center text-lg">
                                <Hammer className="w-5 h-5 mr-2 text-primary" /> Structural Upgrades
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Centralized Climate Control System</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Acoustic Soundproofing Panels</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="glass-card p-8">
                            <h4 className="font-bold text-navy mb-4 flex items-center text-lg">
                                <Heart className="w-5 h-5 mr-2 text-primary" /> Aesthetic Upgrades
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Premium Ergonomic Seating</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Modern Stage Lighting System</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* --- PROJECT 2: RECEPTION --- */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="mb-24"
                >
                    <BeforeAfterSlider
                        beforeImage="/images/renovation/reception_current.png"
                        afterImage="/images/renovation/reception_proposed.png"
                        caption="The New Face of CETAA"
                    />
                    <motion.div variants={fadeInUp} className="glass-card p-8 mt-8">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The reception is the first point of contact for distinguished alumni. The new design
                            features a <strong className="text-navy">Heritage Wall</strong> showcasing CET&apos;s history, a digital kiosk for
                            alumni directory access, and a comfortable lounge for networking.
                        </p>
                    </motion.div>
                </motion.section>

                {/* --- PROJECTS 3 & 4: OFFICE & RAMP --- */}
                <motion.section
                    variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                    {[
                        { img: '/images/renovation/office_current.png', title: 'Modern Office Space', desc: 'Enhancing administrative efficiency for alumni engagement.', changes: ['Digital Workstations', 'Conference Room Addition'] },
                        { img: '/images/renovation/ramp_current.png', title: 'Accessible Entrance', desc: 'Ensuring welcome for every alumnus, regardless of ability.', changes: ['ISO Standard Gradient', 'Anti-skid Flooring & Rails'] },
                    ].map((project, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="glass-card overflow-hidden group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-lg">Current State</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-navy mb-2">{project.title}</h3>
                                <p className="text-gray-500 text-sm mb-6">{project.desc}</p>
                                <div className="space-y-3">
                                    {project.changes.map((change, i) => (
                                        <div key={i} className="flex items-center text-gray-700 font-medium">
                                            <ArrowRight className="w-4 h-4 mr-3 text-gold" /> {change}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* ===== TIERED GIVING SECTION ===== */}
                <section className="mb-24">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="text-center mb-12"
                    >
                        <motion.span variants={fadeInUp} className="text-gold font-bold text-sm uppercase tracking-widest">Ways to Contribute</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-navy mt-3">Choose Your Impact Level</motion.h2>
                    </motion.div>

                    <motion.div
                        variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {tiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className={`relative ${tier.bg} border-2 ${tier.border} rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer ${tier.popular ? 'ring-2 ring-primary/20 scale-[1.02]' : ''}`}
                            >
                                {tier.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                )}
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-lg`}>
                                    <tier.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className={`text-lg font-bold ${tier.text} mb-1`}>{tier.name}</h3>
                                <p className="text-2xl font-black text-navy mb-4">{tier.amount}</p>
                                <button className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all ${tier.popular
                                    ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg hover:shadow-primary/30'
                                    : 'bg-white border-2 border-gray-200 text-navy hover:border-navy hover:bg-navy/5'
                                    }`}>
                                    Contribute
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ===== SHARE THIS VISION ===== */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="mb-24 bg-gradient-to-r from-navy to-secondary rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                        <motion.div variants={fadeInUp} className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <Share2 className="w-8 h-8 text-gold" />
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">Share This Vision</motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-400 max-w-xl mx-auto mb-8">
                            Can&apos;t donate right now? You can still help by spreading the word. Every share brings us closer to our goal.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                            {[
                                { label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700', url: 'https://www.facebook.com/College-of-Engineering-Trivandrum-Alumni-Association-595120010597674' },
                                { label: 'Twitter / X', color: 'bg-gray-800 hover:bg-gray-900', url: 'https://twitter.com/@CetaaSecretary' },
                                { label: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800', url: 'https://www.linkedin.com/school/college-of-engineering-trivandrum' },
                                { label: 'WhatsApp', color: 'bg-green-600 hover:bg-green-700', url: 'https://wa.me/?text=Support+the+CETAA+Renovation+Project!' },
                            ].map((platform, idx) => (
                                <a
                                    key={idx}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${platform.color} text-white px-6 py-3 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg`}
                                >
                                    {platform.label}
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default Renovation;
