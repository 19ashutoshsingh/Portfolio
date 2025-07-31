// About Section Component
import AboutPic from '../assets/pic_about.jpeg';

const AboutSection = () => (
    <section id="about" className="py-20 lg:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center md:text-left fade-in-up">
                <img src={AboutPic}
                     onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e2e8f0/334155?text=Portrait'; }}
                     alt="About John Doe" className="rounded-lg shadow-xl mx-auto object-cover h-96 w-full" />
            </div>
            <div className="md:w-2/3 fade-in-up" style={{ transitionDelay: '150ms' }}>
                <div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        Hello, I’m a Computer Science undergraduate at IIIT Bhagalpur, passionate about building efficient, scalable web applications that deliver a seamless user experience. I specialize in full-stack development using the MERN stack, React, and Tailwind CSS, and have built platforms ranging from real-time chat systems to feature-rich note-taking tools and interactive movie explorers.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        Each project reflects my focus on modular architecture, clean UI design, and robust backend performance. I enjoy crafting responsive, accessible interfaces and implementing optimized APIs that make products both usable and resilient.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Notably, I was a semi-finalist in Flipkart GRID 7.0, where I tackled real-world challenges and applied engineering principles in high-pressure scenarios—an experience that fueled my drive for innovation and team-driven problem solving.
                    </p>
                </div>
                <h3 className="text-2xl font-bold mb-4">My Skills</h3>
                <div>
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">C++</span>
                        <span className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-orange-900 dark:text-orange-300">HTML</span>
                        <span className="bg-sky-100 text-sky-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-sky-900 dark:text-sky-300">CSS</span>
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
                        <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-teal-900 dark:text-teal-300">Python</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Technologies & Frameworks</h4>
                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-cyan-100 text-cyan-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-cyan-900 dark:text-cyan-300">React.js</span>
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-purple-900 dark:text-purple-300">Redux</span>
                        <span className="bg-slate-100 text-slate-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-slate-700 dark:text-slate-300">Next.js</span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-green-900 dark:text-green-300">Node.js</span>
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300">Express.js</span>
                        <span className="bg-lime-100 text-lime-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-lime-900 dark:text-lime-300">MongoDB</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-indigo-900 dark:text-indigo-300">SQL</span>
                        <span className="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-pink-900 dark:text-pink-300">REST API</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-red-900 dark:text-red-300">Git</span>
                        <span className="bg-stone-100 text-stone-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-stone-700 dark:text-stone-300">Github</span>
                        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-violet-900 dark:text-violet-300">Figma</span>
                        <span className="bg-amber-100 text-amber-800 text-sm font-medium px-4 py-2 rounded-full dark:bg-amber-900 dark:text-amber-300">Postman</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;