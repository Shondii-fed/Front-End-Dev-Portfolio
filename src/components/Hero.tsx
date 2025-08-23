import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section
            id="home"
            className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6">
            
            <div className="absolute inset-0 bg-[url('/images/textures/honeycomb-texture.jpg')] bg-repeat opacity-4   pointer-events-none"    
            >
            </div>    
            
            <img 
                src="./images/SEAN DIGGS.jpg" 
                alt="Sean Diggs Logo" 
                className="w-50 h-50 mb-6 rounded-full shadow-lg object-cover object-center border-5 border-indigo-400" />
            
            <motion.h1
                className="text-4xl sm:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                Hi, I'm <span className="text-indigo-400">Sean Diggs</span>
            </motion.h1>

            <motion.h2
                className="text-xl sm:text-2xl text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8}}
                >
                Junior Front-End Developer | React • Typescript • Tailwind
            </motion.h2>

            <motion.p 
                className="max-w-xl text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                >
                Since my change in careers, I have engrossed myself in the world of web development over the last year, focusing on the React library and Typescript. Through the use of tutorials, Scrimba online Front End Careeer Path, and personal projects, I have honed my skills in building dynamic and responsive web applications. My passion for coding drives me to continuously learn and improve, and I am excited to bring my perspective to new challenges in the tech industry.
            </motion.p>

            <motion.a 
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <Link to="/projects">
                    View My Work
                </Link>
            </motion.a>        
        </section>
    );
}

export default Hero;