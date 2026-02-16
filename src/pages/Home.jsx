import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    GraduationCap, Users, Award, BookOpen, Building2, Landmark,
    ChevronRight, Zap, Globe, Rocket, Star, Heart, ArrowRight,
    Calendar, MapPin, Trophy, Target, Lightbulb, Shield, Eye,
    Cpu, Wrench, CircuitBoard, Palette, Briefcase, Code,
    Quote, ExternalLink, Clock
} from 'lucide-react';

/* ───── animation helpers ───── */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};
const Section = ({ children, className = '', bg = '' }) => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className={`py-20 md:py-28 px-4 md:px-8 ${bg} ${className}`}
    >
        <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
);

/* ───── animated counter ───── */
function Counter({ target, suffix = '', prefix = '' }) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });
    const [val, setVal] = React.useState(0);
    React.useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const id = setInterval(() => {
            start += step;
            if (start >= target) { setVal(target); clearInterval(id); }
            else setVal(start);
        }, 20);
        return () => clearInterval(id);
    }, [inView, target]);
    return <span ref={ref}>{prefix}{val.toLocaleString('en-IN')}{suffix}</span>;
}

/* ───── data ───── */
const stats = [
    { label: 'Years of Excellence', value: 85, suffix: '+', icon: Calendar },
    { label: 'Alumni Worldwide', value: 50000, suffix: '+', icon: Globe },
    { label: 'NIRF Ranking', value: 71, prefix: '#', icon: Award },
    { label: 'Students', value: 4500, suffix: '+', icon: Users },
    { label: 'Faculty Members', value: 311, suffix: '', icon: BookOpen },
    { label: 'Acres Campus', value: 125, suffix: '', icon: MapPin },
];

const departments = [
    { name: 'Civil Engineering', icon: Building2, year: '1939', color: 'from-amber-500 to-orange-600' },
    { name: 'Mechanical Engineering', icon: Wrench, year: '1939', color: 'from-blue-500 to-cyan-600' },
    { name: 'Electrical Engineering', icon: Zap, year: '1939', color: 'from-yellow-500 to-amber-600' },
    { name: 'Electronics & Communication', icon: CircuitBoard, year: '1965', color: 'from-green-500 to-emerald-600' },
    { name: 'Computer Science', icon: Code, year: '1983', color: 'from-purple-500 to-violet-600' },
    { name: 'Architecture', icon: Palette, year: '1969', color: 'from-pink-500 to-rose-600' },
    { name: 'MCA', icon: Cpu, year: '1988', color: 'from-indigo-500 to-blue-600' },
    { name: 'MBA', icon: Briefcase, year: '2001', color: 'from-teal-500 to-green-600' },
];

const visionMission = [
    { icon: Lightbulb, text: 'To facilitate quality transformative education in Engineering and Management.' },
    { icon: Rocket, text: 'To foster innovations in Technology and its application for meeting global challenges.' },
    { icon: BookOpen, text: 'To pursue and disseminate Quality Research.' },
    { icon: Heart, text: 'To equip, enrich and transform students to be Responsible Professionals for better service to humanity.' },
];

const alumniByDept = {
    Electrical: [
        { name: 'Dr. G. Madhavan Nair', role: 'Former Chairman, ISRO', detail: 'Padmabhushan awardee' },
        { name: 'Sri. V. Sasi', role: 'Ex. Hon. Deputy Speaker, Kerala Legislative Assembly', detail: 'Political leadership' },
        { name: 'Dr. K P P Pillai', role: 'Former Principal CET, Former Secretary ISTE', detail: 'Academic pioneer' },
        { name: 'Sri. K.S. Sabarinathan', role: 'Ex. MLA, Kerala Legislative Assembly', detail: 'Public service' },
        { name: 'Dr. Raman Unnikrishnan', role: 'Professor of Electrical Engineering, California State University, Fullerton', detail: 'International academia' },
        { name: 'Sri. Krishnanunni H, IAS', role: 'Deputy Secretary of Finance, Govt. of Tamil Nadu', detail: 'Civil service' },
        { name: 'Dr. V.R. Lalithambika', role: 'Head, Human Space Mission of ISRO', detail: 'Gaganyaan mission lead' },
        { name: 'Dr. B S Warrier', role: 'Educationist, Career Guru', detail: 'Education & guidance' },
        { name: 'Sri. Prakash Chandran', role: 'President, Siemens Indonesia', detail: 'Industry leadership' },
        { name: 'Sri. Antony Satyadas', role: 'CEO & Co-founder, Innovation Incubator, USA', detail: 'Entrepreneur' },
        { name: 'Sri. Tony Thomas', role: 'Chief Digital & Information Officer, Signify', detail: 'Global tech leader' },
        { name: 'Sri. A C K Nair', role: 'Director, Cochin International Airport', detail: 'Aviation' },
        { name: 'Sri. A.J. Kumar', role: 'Developer at General Electric, USA', detail: 'Holds 300+ US patents' },
        { name: 'Smt. Lakshmi Vedanarayanan', role: 'CEO, Quolam Business Solutions', detail: 'Entrepreneur' },
        { name: 'Dr. Bipin Prabhakar', role: 'Chair, Information Systems Graduate Programs, Kelley School of Business, Indiana University', detail: 'Business academia' },
        { name: 'Dr. Chakravarthini Mini Saaj', role: 'Professor & Global Chair in Robotic Engineering, University of Lincoln, UK', detail: 'Robotics' },
        { name: 'Smt. Mini George', role: 'Director (Planning & Safety), KSEB Ltd.', detail: 'Power sector' },
        { name: 'Sri. Jison K John', role: 'CEO & MD, Allianz Services India', detail: 'Finance sector' },
        { name: 'Smt. Sarada Jayakrishnan', role: 'DGM, Terumo Penpol & Chair, IEEE Kerala Section', detail: 'IEEE leader' },
        { name: 'Sri. Prem Kishore Padmanabhan', role: 'VP & Managing Director – Sales, UST Global', detail: 'Tech services' },
    ],
    Civil: [
        { name: 'Dr. D. Babu Paul, IAS', role: 'Former member of IAS, Retired as Chief Secretary rank', detail: 'KIIFB member' },
        { name: 'Dr. Babu Jacob, IAS', role: 'Former Chief Secretary, Govt of Kerala', detail: 'Administrative leadership' },
        { name: 'Dr. Babu J. Alappat', role: 'Professor, IIT Delhi', detail: 'Environmental Engineering' },
        { name: 'Dr. S. Vasudev', role: 'Former Chairman, S&T and Environmental Dept, Govt of Kerala', detail: 'Former Director of Technical Education' },
        { name: 'Dr. T.S. Ramanatha Iyer', role: 'Professor Emeritus (Retd.), CET; Former Visiting Professor, IIT Madras', detail: 'Former Director of Technical Education' },
        { name: 'Dr. Dhanya C.T.', role: 'Associate Professor, IIT Delhi', detail: 'Research excellence' },
        { name: 'Irshad C.M., IAS', role: 'Assistant Commissioner of Income Tax, Ministry of Finance, Govt of India', detail: 'Civil service' },
        { name: 'Jeeva Maria Joy, IAS', role: 'Indian Foreign Service, Ministry of External Affairs', detail: 'Diplomacy' },
        { name: 'Dr. Kuncheria P. Isaac', role: 'Founder Vice-Chancellor, APJ Abdul Kalam Technological University', detail: 'Higher education' },
        { name: 'Dr. Lelitha Devi Vanajakshi', role: 'Professor, Civil Engineering, IIT Madras', detail: 'Transportation engineering' },
        { name: 'Dr. J. Letha', role: 'Former VC, CUSAT & KTU', detail: 'First Woman VC of CUSAT' },
        { name: 'Mohammed Hanish, IAS', role: 'Secretary, Industries Department (PSU)', detail: 'Public service' },
        { name: 'Parvathy Vimal Prakash', role: 'Regional Officer, Central Board of Film Certification', detail: 'Film & media' },
        { name: 'P. Sachidanandan (Anand)', role: 'Indian Writer (Malayalam)', detail: 'Malayalam literature' },
        { name: 'Sidharth K. Varma, IAS', role: 'Assistant Personnel Officer, Ministry of Railways, Govt of India', detail: 'Civil service' },
        { name: 'Dr. Tom V. Mathew', role: 'Professor, Civil Engineering, IIT Bombay', detail: 'Transportation engineering' },
        { name: 'Dr. Beena Sukumaran', role: 'VP for Research, Rowan University, USA', detail: 'International academia' },
        { name: 'Dr. J S Vinod', role: 'Associate Professor, University of Wollongong, Australia', detail: 'Geotechnical engineering' },
        { name: 'Dr. Albert Thomas', role: 'Assistant Professor, Construction Technology & Management, IIT Bombay', detail: 'Construction management' },
        { name: 'Dr. Raj Kurup', role: 'Director, Environmental Engineers International, Perth, Australia', detail: 'Environmental engineering' },
        { name: 'Mr. Harikrishnan D, IRS', role: 'Assistant Commissioner, Customs', detail: 'Revenue service' },
        { name: 'DivyaChandran, IAS', role: 'AIR 397, Civil Engineering 2012–16 batch', detail: 'Civil service' },
    ],
    Mechanical: [
        { name: 'S. Krishna Kumar, IAS', role: 'Former Union Minister — Family Welfare, Petroleum & Defence', detail: '1960 batch' },
        { name: 'Param Nair', role: 'Former CEO, Travancore Titanium Ltd', detail: '1958–62 batch' },
        { name: 'Venugopal N C', role: 'Managing Director & CEO, CEAT Dhaka', detail: '1970–74 batch' },
        { name: 'Hari Panicker', role: 'CEO – Business Integration, GMR Airports Ltd', detail: '1976–81 batch' },
        { name: 'Manmadhan P K', role: 'CEO, Lotus Eye Hospital and Institute', detail: '1977–82 batch' },
        { name: 'Padmakumar B', role: 'CEO, Neotys India', detail: '1980–85 batch' },
        { name: 'K Sunil Kumar', role: 'Director & CEO, Alpa International Pvt Ltd', detail: '1981–86 batch' },
        { name: 'Krishna Kumar C', role: 'COO, Commercial Bank of Dubai', detail: '1982–87 batch' },
        { name: 'Sunil Cherian', role: 'CEO, Spirae Inc.', detail: '1982–87 batch' },
        { name: 'Gopi Krishnan', role: 'Managing Director, Fortius Infra, Embassy Group', detail: '1983–88 batch' },
        { name: 'Subath Kamalasan', role: 'CEO, Somnoware Healthcare Systems', detail: '1984–88 batch' },
        { name: 'Manoj N K', role: 'Former CEO, Kerala Agro Machinery Corporation', detail: '1986–90 batch' },
        { name: 'Sharan Shetty', role: 'CEO, Reliance Jio', detail: '1986–90 batch' },
        { name: 'James Joseph', role: 'Founder & CEO, God\'s Own Food Solutions Pvt Ltd', detail: '1988–92 batch' },
        { name: 'Tom Scaria Chackalackal', role: 'Executive Director, Ford China', detail: '1988–92 batch' },
        { name: 'Jayasankar Prasad', role: 'MD, Kerala State IT Infrastructure Ltd', detail: '1989–93 batch' },
        { name: 'Sunil Kanchi', role: 'CIO & SVP, UST Global', detail: '1991–95 batch' },
        { name: 'Sreedeep Sankaran Nair', role: 'Managing Director, Rolls-Royce India', detail: 'Global operations' },
        { name: 'M. Ayyappan', role: 'Former Chairman & MD, HLL Lifecare Ltd', detail: 'Healthcare sector' },
    ],
};

const executiveMembers = [
    { name: 'Dr. Suresh K', post: 'President', batch: '' },
    { name: 'Er. J.P. Raju', post: 'Vice President', batch: '1974 EE' },
    { name: 'Er. Premachandra Bhas E R', post: 'Vice President', batch: '1982 EE' },
    { name: 'Dr. K. Madanan', post: 'Vice President', batch: '1985 EE' },
    { name: 'Dr. Abhilash Suryan R', post: 'General Secretary', batch: '1995 ME' },
    { name: 'Dr. Raji M', post: 'Treasurer', batch: '1993 CE' },
    { name: 'Sri. N. Mohandas', post: 'Joint Secretary', batch: '1976 ME' },
    { name: 'Prof. Deepa Rani R.', post: 'Joint Secretary', batch: '2000 AR' },
    { name: 'Prof. Sreedevi G', post: 'Joint Secretary', batch: '2003 EE' },
    { name: 'Sri. Abhijith R', post: 'Joint Secretary', batch: '2019 MBA' },
    { name: 'Prof. Pranoy S Raj', post: 'Newsletter Editor', batch: '2010 CE' },
    { name: 'Prof. Tomy Michael', post: 'Exe. Committee', batch: '1975 EE' },
    { name: 'Er. Bhadaran V', post: 'Exe. Committee', batch: '1977 ME' },
    { name: 'Dr. Lathika B S', post: 'Exe. Committee', batch: '1979 EE' },
    { name: 'Prof. Sheela S', post: 'Exe. Committee', batch: '1982 EE' },
    { name: 'Er. Prasanna Bhas E R', post: 'Exe. Committee', batch: '1988 CE' },
    { name: 'Er. Sarada Jayakrishnan', post: 'Exe. Committee', batch: '1991 EE' },
    { name: 'Dr. Biju K S', post: 'Exe. Committee', batch: '1993 AE' },
    { name: 'Dr. Jisha VR', post: 'Exe. Committee', batch: '1995 EE' },
    { name: 'Er. Sunish Sugathan', post: 'Exe. Committee', batch: '1996 EC' },
    { name: 'Dr. Sreelatha G', post: 'Exe. Committee', batch: '1996 AE' },
    { name: 'Prof. Praveen A', post: 'Exe. Committee', batch: '2001 ME' },
];

const timeline = [
    { year: '1939', title: 'College Founded', desc: 'First Engineering College in Travancore State. 21 students in Civil, Mechanical & Electrical.' },
    { year: '1960', title: 'New Campus', desc: 'Shifted to present 125-acre campus from the PMG Office.' },
    { year: '1965', title: 'Electronics & Communication', desc: 'ECE department established, expanding technical education.' },
    { year: '1976', title: 'CETAA Initiated', desc: 'College of Engineering Trivandrum Alumni Association officially formed.' },
    { year: '1983', title: 'Computer Science Added', desc: 'CSE department launched, entering the digital era.' },
    { year: '2010', title: 'GEMS Scholarship', desc: 'Growing Engineers Monetary Support launched at CETAA Global Meet, Dubai. Corpus: ₹100 Lakhs.' },
    { year: '2020', title: 'COVID Response', desc: 'Alumni donated 250 laptops and raised ₹75 Lakhs within a month for students.' },
    { year: '2039', title: 'Vision: Top 30', desc: 'Goal to be ranked among India\'s Top 30 engineering institutions by CET\'s centenary.' },
];

const scholarships = [
    {
        name: 'GEMS',
        full: 'Growing Engineers Monetary Support',
        desc: 'Corpus fund scholarships from alumni contributions. Launched at the CETAA Global Meet in Dubai, 2010.',
        stats: ['₹137 Lakh Corpus', '300+ Students Supported', '₹10,000/year per student'],
        color: 'from-yellow-400 to-amber-500',
    },
    {
        name: 'CARE',
        full: 'Continuous Assistance for Rising Engineers',
        desc: 'One-to-one student sponsorship where an alumnus supports a student\'s full academic tenure at CET.',
        stats: ['₹50,000–60,000/year', '4-Year Commitment', 'Covers tuition, hostel & materials'],
        color: 'from-blue-400 to-indigo-500',
    },
    {
        name: 'HOPE Plus',
        full: 'CETA Galaxy Charitable Trust',
        desc: 'UAE chapter initiative supporting school, college and professional students for financial and personal empowerment.',
        stats: ['UAE Chapter Initiative', 'Multi-level Support', 'Financial & personal empowerment'],
        color: 'from-green-400 to-emerald-500',
    },
];

/* ═══════════════ COMPONENT ═══════════════ */
export default function Home() {
    const [activeTab, setActiveTab] = useState('Electrical');

    return (
        <div className="bg-white">
            {/* ── 1. HERO ── */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#002244] to-[#001133]">
                {/* pattern overlay */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-5 py-2 mb-8">
                        <Star className="w-4 h-4 text-gold" />
                        <span className="text-gold text-sm font-semibold tracking-wider uppercase">India's First Govt. Engineering College • Est. 1939</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                        College of Engineering{' '}
                        <span className="text-gradient">Trivandrum</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        The Official Alumni Network connecting over <strong className="text-white">50,000 engineers</strong> across
                        15+ chapters worldwide. Alma mater of <strong className="text-white">three ISRO Chairmen</strong> — a distinction
                        unmatched by any other institution in India.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link to="/renovation" className="bg-gradient-to-r from-primary to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                            Support Renovation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="https://alumni.cet.ac.in/dir.dz" target="_blank" rel="noreferrer"
                            className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            Alumni Directory <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    {/* hero stat counters */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {stats.map((s, i) => (
                            <div key={i} className="glass-dark rounded-xl p-4 text-center">
                                <s.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                                <div className="text-2xl md:text-3xl font-black text-white">
                                    <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                                </div>
                                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* scroll indicator */}
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* ── 2. ABOUT / HERITAGE ── */}
            <Section bg="bg-gray-50">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span variants={fadeInUp} className="text-primary font-bold text-sm tracking-widest uppercase">Our Heritage</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-navy mt-3 mb-6">A Legacy of Innovation Since 1939</motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-4">
                            The College of Engineering, Trivandrum was established in <strong>1939</strong> as the first Engineering College in the then Travancore State.
                            The first classes were started on <strong>3rd July 1939</strong> during the reign of the Travancore King,
                            <strong> Sri Chithira Thirunal Balarama Varma</strong>. Initially the College was housed in the former office
                            and bungalow of the Chief Engineer (present PMG Office). <strong>Maj T.H. Mathewman</strong>, a Britisher, was the first Principal.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-4">
                            Started as a constituent College of Travancore University, the College had an initial intake of <strong>21 students</strong> each
                            for Degree and Diploma courses in Civil, Mechanical and Electrical branches. The College was shifted to the present
                            sprawling <strong>125 acres</strong> in 1960.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-6">
                            Today with <strong>eight full-fledged departments</strong> offering 8 undergraduate, <strong>27 postgraduate</strong> and doctoral
                            programmes under the APJ Abdul Kalam Technological University, the College has around <strong>4,500 students</strong>,
                            <strong> 311 teaching staff</strong> and 290 non-teaching staff. According to NIRF ranking, CET is placed at <strong>#71</strong> in India.
                        </motion.p>
                        <motion.a variants={fadeInUp} href="https://alumni.cet.ac.in/page/About-us.dz" target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Read our full history <ChevronRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                    <motion.div variants={fadeInUp} className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/20">
                            <img src="/images/cet/cet-main-building.jpeg" alt="CET Campus" className="w-full h-[400px] object-cover" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-navy text-gold font-black text-lg px-6 py-3 rounded-xl shadow-lg">
                            Since 1939
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* ── CAMPUS GALLERY ── */}
            <Section bg="bg-white">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Our Campus</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">A Walk Through CET</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Explore the stunning 125-acre campus of India's first government engineering college.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { src: '/images/cet/cet-main-building.jpeg', label: 'Main Building' },
                        { src: '/images/cet/cet-main-gate.jpeg', label: 'College Gate' },
                        { src: '/images/cet/cet-library.jpeg', label: 'Technical Library' },
                        { src: '/images/cet/cet-entrance.jpeg', label: 'Campus Entrance' },
                        { src: '/images/cet/cet-campus-stairs.jpeg', label: 'Campus Stairs' },
                        { src: '/images/cet/cet-college-building.jpeg', label: 'College Building' },
                    ].map((img, i) => (
                        <motion.div key={i} variants={fadeInUp}
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                            <img src={img.src} alt={img.label} className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute bottom-3 left-4 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── 3. VISION & MISSION ── */}
            <Section bg="bg-gradient-to-br from-navy via-[#002244] to-[#001a33]">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-gold font-bold text-sm tracking-widest uppercase">Vision & Mission</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
                        National Level Excellence
                    </h2>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
                        National Level Excellence and International Visibility in Every Facet of Engineering Research and Education.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visionMission.map((item, i) => (
                        <motion.div key={i} variants={fadeInUp}
                            className="glass-dark rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                            <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                                <item.icon className="w-7 h-7 text-gold" />
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── 4. DEPARTMENTS ── */}
            <Section bg="bg-white">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Academics</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">Eight Departments of Excellence</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Offering 8 undergraduate, 27 postgraduate and doctoral programmes under APJ Abdul Kalam Technological University.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {departments.map((dept, i) => (
                        <motion.div key={i} variants={fadeInUp}
                            className="group relative bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-navy/20">
                            <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <dept.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-navy text-lg mb-1">{dept.name}</h3>
                            <span className="text-xs text-gray-400">Est. {dept.year}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── 5. DISTINGUISHED ALUMNI (Tabbed) ── */}
            <Section bg="bg-gradient-to-br from-navy via-[#002244] to-[#001133]">
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <span className="text-gold font-bold text-sm tracking-widest uppercase">Pride of CET</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Distinguished Alumni</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        From ISRO Chairmen to Union Ministers, IIT professors to global CEOs — CETians lead across every sphere.
                    </p>
                </motion.div>

                {/* tabs */}
                <motion.div variants={fadeInUp} className="flex justify-center gap-2 mb-10 flex-wrap">
                    {Object.keys(alumniByDept).map(dept => (
                        <button key={dept} onClick={() => setActiveTab(dept)}
                            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === dept
                                ? 'bg-gold text-navy shadow-lg shadow-gold/30'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}>
                            {dept} Engineering
                        </button>
                    ))}
                </motion.div>

                {/* alumni grid */}
                <motion.div key={activeTab}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {alumniByDept[activeTab].map((a, i) => (
                        <div key={i} className="glass-dark rounded-xl p-5 hover:bg-white/10 transition-all group">
                            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Trophy className="w-5 h-5 text-gold" />
                            </div>
                            <h3 className="font-bold text-white text-sm mb-1 leading-tight">{a.name}</h3>
                            <p className="text-gray-400 text-xs leading-snug mb-2">{a.role}</p>
                            <span className="text-[10px] text-gold/70 font-medium">{a.detail}</span>
                        </div>
                    ))}
                </motion.div>
            </Section>

            {/* ── 6. SCHOLARSHIPS ── */}
            <Section bg="bg-gray-50">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Giving Back</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">Scholarship Programs</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        CETAA supports students through multiple scholarship programs, having helped <strong>300+ students</strong> and
                        donated <strong>250 laptops</strong> during COVID-19, raising <strong>₹75 Lakhs</strong> within a month.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {scholarships.map((s, i) => (
                        <motion.div key={i} variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className={`w-full h-2 bg-gradient-to-r ${s.color} rounded-full mb-6`} />
                            <h3 className="text-2xl font-black text-navy mb-1">{s.name}</h3>
                            <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-4">{s.full}</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                            <div className="space-y-2">
                                {s.stats.map((stat, j) => (
                                    <div key={j} className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${s.color}`} />
                                        <span className="text-sm font-medium text-gray-700">{stat}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── 7. LEADERSHIP MESSAGES ── */}
            <Section bg="bg-white">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Leadership</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">Messages from CETAA</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* President */}
                    <motion.div variants={fadeInUp} className="bg-gradient-to-br from-navy to-[#002244] rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />
                        <div className="relative z-10">
                            <span className="text-gold text-xs font-bold tracking-widest uppercase">President's Message</span>
                            <p className="text-gray-300 mt-4 leading-relaxed text-sm italic">
                                "The greatest treasure that an institution cherishes and relies upon is its alumni.
                                Our alumni are the real ambassadors of CET — it is through the proud achievements of thousands of
                                CETians that we could establish the globally reputed CET brand. Let us put our hands together to
                                enhance our excellence and visibility at the National and International level."
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <h4 className="text-white font-bold text-lg">Dr. Suresh K</h4>
                                <p className="text-gold text-sm">President, CETAA & Principal, CET</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secretary */}
                    <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#0A1628] to-navy rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />
                        <div className="relative z-10">
                            <span className="text-gold text-xs font-bold tracking-widest uppercase">Secretary's Message</span>
                            <p className="text-gray-300 mt-4 leading-relaxed text-sm italic">
                                "If we can have 300 of our alumni step forward and make this commitment of ₹50,000 to ₹60,000 per year
                                for 4 years, we will have a substantially improved mechanism and will be able to significantly improve the
                                lives of our future generation of alumni. The CET faculty, alumni and students will work together
                                to improve our ranking — we have a goal of being in the <strong className="text-white">Top 30 by 2039</strong> or sooner."
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <h4 className="text-white font-bold text-lg">Dr. Abhilash Suryan R</h4>
                                <p className="text-gold text-sm">General Secretary, CETAA • 1995 ME Batch</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* ── 8. EXECUTIVE COMMITTEE ── */}
            <Section bg="bg-gray-50">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Governance</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">Executive Committee 2024–26</h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {executiveMembers.map((m, i) => (
                        <motion.div key={i} variants={fadeInUp}
                            className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all text-center group">
                            <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-navy group-hover:text-white transition-all">
                                <Users className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                            </div>
                            <h4 className="font-bold text-navy text-sm">{m.name}</h4>
                            <p className="text-primary text-xs font-semibold mt-1">{m.post}</p>
                            {m.batch && <p className="text-gray-400 text-xs mt-1">{m.batch}</p>}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── 9. CET CHRONICLE / TIMELINE ── */}
            <Section bg="bg-gradient-to-br from-navy via-[#002244] to-[#001133]">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-gold font-bold text-sm tracking-widest uppercase">Our Journey</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3">CET Chronicle</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Key milestones in the journey from India's first government engineering college to a globally recognized institution.
                    </p>
                </motion.div>
                <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 md:-translate-x-px" />
                    <div className="space-y-8">
                        {timeline.map((item, i) => (
                            <motion.div key={i} variants={fadeInUp}
                                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                {/* dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 ring-4 ring-navy z-10" />
                                {/* card */}
                                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="glass-dark rounded-xl p-5 hover:bg-white/10 transition-all inline-block">
                                        <span className="text-gold font-black text-lg">{item.year}</span>
                                        <h4 className="text-white font-bold mt-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── 10. CTA / CONNECT ── */}
            <Section bg="bg-white">
                <motion.div variants={fadeInUp} className="text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">Join the CET Family</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
                        Whether you graduated in 1960 or 2024 — you are part of a legacy 85 years strong.
                        Connect, contribute, and celebrate the CET spirit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://alumni.cet.ac.in" target="_blank" rel="noreferrer"
                            className="bg-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-navy/30 transition-all flex items-center justify-center gap-2">
                            <GraduationCap className="w-5 h-5" /> Visit Alumni Portal
                        </a>
                        <Link to="/renovation"
                            className="bg-gradient-to-r from-primary to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                            <Heart className="w-5 h-5" /> Support Renovation
                        </Link>
                        <a href="https://alumni.cet.ac.in/dir.dz" target="_blank" rel="noreferrer"
                            className="border-2 border-navy/20 text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy/5 transition-all flex items-center justify-center gap-2">
                            <Users className="w-5 h-5" /> Alumni Directory
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
