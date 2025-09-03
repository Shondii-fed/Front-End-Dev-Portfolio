import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (id: string) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                <div
                    className="text-2xl font-bold cursor-pointer text-gray-800"
                    onClick={() => handleNavClick("hero")}
                >
                    Sean Diggs
                </div>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className="text-gray-700 hover:text-indigo-600 hover:font-semibold hover:scale-105 transition"
                        >
                            {link.label}
                        </button>
                    ))}

                    <Link className="text-gray-700 hover:text-indigo-600 hover:font-semibold hover:scale-105 transition" to="/projects">
                        All Projects
                    </Link>
                    
                    <Link className="text-gray-700 hover:text-indigo-600 hover:font-semibold hover:scale-105 transition" to="/certifications">
                        Certifications
                    </Link>
                </div>

                <button
                    className="md:hidden flex flex-col space-y-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col space-y-4"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className="text-gray-700 hover:text-indigo-600 transition text-left"
                            >
                                {link.label}
                            </button>
                        ))}
                        
                        <Link 
                            to="/projects"
                            className="text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            All Projects
                        </Link>
                        <Link 
                            to="/certifications"
                            className="text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Certifications
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}