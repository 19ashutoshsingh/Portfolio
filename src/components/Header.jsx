// Header Component

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="text-2xl font-bold text-indigo-600 dark:text-indigo-500">AS</a>
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#home" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">Home</a>
                        <a href="#about" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">About</a>
                        <a href="#projects" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">Projects</a>
                        <a href="https://github.com/19ashutoshsingh" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">GitHub</a>
                        <a href="#contact" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">Contact</a>
                    </nav>
                    <div className="flex items-center">
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            {theme === 'light' ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;