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
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    Hi, I’m <span className="font-semibold">Sean Diggs</span>, a passionate{" "}
                    <span className="font-semibold">Frontend Developer</span> with a focus
                    on building interactive and responsive applications using{" "}
                    <span className="font-semibold">React, TypeScript, and TailwindCSS</span>.
                    I love solving problems; be it in games, work, or social settings, creating 
                    user-friendly designs, and continuously learning new technologies to sharpen 
                    my skills. My motto is to always internally ask myself, "Why is this the way it 
                    works? and how can I make it better?" I believe in the power of collaboration and
                    am always eager to contribute to projects that make a difference. If you would like 
                    to know more about me, click the button below for me Resume/CV.
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