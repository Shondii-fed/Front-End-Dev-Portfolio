import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="flex flex-col py-20 dark:bg-gray-900 bg-gray-200">

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold dark:text-white text-gray-800 mb-6"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-lg text-gray-600 dark:text-gray-300 text-left leading-relaxed"
                >
                    <p>
                        Hi, I’m <strong>Sean Diggs</strong>, a passionate <strong>Frontend Developer</strong> dedicated to building interactive and responsive applications with <strong><em>React, TypeScript, JavaScript, and Tailwind CSS</em></strong>.
                    </p>

                    <br></br>
                    
                    <p>
                        I’ve completed 25+ projects, including dynamic apps deployed on <strong><em>Github</em></strong> and <strong><em>Netlify</em></strong>, showcasing my skills in <strong><em>responsive design, API integration, and modern frontend development</em></strong>. I’m always curious—constantly asking, <em>“Why does this work this way, and how can I improve it?”</em>—which drives me to continuously learn and refine my craft.
                    </p>
                    
                    <br></br>
                    
                    <p>
                        Beyond technical skills, I bring strong <strong><em>collaboration and problem-solving experience</em></strong> from years of working on large-scale, team-driven projects. My goal is to contribute to impactful software that improves user experiences while growing alongside talented developers.
                    </p>
                    
                    <br></br>
                    
                    <p>
                        📄 Curious to see more? Check out my <strong>Resume/CV</strong> below to dive deeper into my journey.
                    </p>

                </motion.p>

                <div className="flex justify-center gap-4 mt-6">
                    {/* View Online */}
                    <a
                        href="https://docs.google.com/document/d/1Z6O2-F73IE6FwFGRpoNlrdHTWWXcXdvOAkisGVu3GPo/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-indigo-300 border border-indigo-300 rounded-lg shadow hover:border-indigo-700 hover:text-indigo-700 hover:bg-indigo-50 transition"
                    >
                        View Online
                    </a>

                    {/* Download PDF */}
                    <a
                        href="https://docs.google.com/document/d/1Z6O2-F73IE6FwFGRpoNlrdHTWWXcXdvOAkisGVu3GPo/export?format=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        Download PDF
                    </a>
                </div>


            </div>
        </section>
    );
}