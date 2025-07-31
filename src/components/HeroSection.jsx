// Hero Section Component
import ProfilePic from '../assets/profile-pic.png';

const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center">
        <div className="w-full text-center">
            <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50 dark:opacity-70 animate-pulse"></div>
                <img src={ProfilePic}
                     onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/6366f1/ffffff?text=JD'; }}
                     alt="John Doe"
                     className="relative w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white dark:border-slate-800 shadow-lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                Hi, I'm Ashutosh Singh.
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
                I'm a passionate Full-Stack Developer creating modern and responsive web applications.
            </p>
            <div className="flex justify-center gap-20">
                <a href="#projects" className="bg-indigo-600 dark:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">
                    View My Work
                </a>
                <a href="https://drive.google.com/file/d/1FRPQLc-_sVbc0a589OLkoznng0G_nlT7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-500 font-bold py-3 px-8 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105">
                    Download Resume
                </a>
            </div>
        </div>
        {/* Animated Scroll Down Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <a href="#about" aria-label="Scroll down">
                <div className="w-7 h-12 border-2 border-slate-700 dark:border-slate-300 rounded-full flex justify-center items-start pt-2">
                    <div className="w-2 h-2 bg-slate-700 dark:bg-slate-300 rounded-full animate-scroll"></div>
                </div>
            </a>
        </div>
    </section>
);

export default HeroSection;