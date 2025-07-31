// Education Section Component
const EducationSection = () => (
    <section id="education" className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-start space-x-6 fade-in-up">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-indigo-600/10 dark:bg-indigo-500/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L9 9.61v5.07L4.646 12.5a1 1 0 00-1.292 1l-1 4A1 1 0 003.333 19h13.334a1 1 0 00.979-1.5l-1-4a1 1 0 00-1.292-1L11 14.68V9.61l6.394-2.69a1 1 0 000-1.84l-7-3zM10 8.39L3.606 5.71 10 3.03l6.394 2.68L10 8.39z" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">2022 - 2026</p>
                        <h3 className="text-xl font-bold mt-1">B.Tech in Computer Science Engineering</h3>
                        <p className="mt-1 text-slate-600 dark:text-slate-300">Indian Institute of Informational Technology, Bhagalpur</p>
                        <p className="mt-2 text-slate-500 dark:text-slate-500">CGPA: 8.26 / 10.0</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-start space-x-6 fade-in-up" style={{ transitionDelay: '150ms' }}>
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-indigo-600/10 dark:bg-indigo-500/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 11-2 0V4H6v12a1 1 0 11-2 0V4zm1.293 8.293a1 1 0 011.414 0L10 15.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">2018 - 2021</p>
                        <h3 className="text-xl font-bold mt-1">High School (XII & X)</h3>
                        <p className="mt-1 text-slate-600 dark:text-slate-300">Sacred Hearts Public School, Nainital Rd, Bareilly</p>
                        <p className="mt-2 text-slate-500 dark:text-slate-500">Class XII: 95.6% | Class X: 91.8%</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default EducationSection;