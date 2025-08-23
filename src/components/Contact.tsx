import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col py-20 bg-white dark:bg-gray-800">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                >
                    Whether you're looking to collaborate on a project, have questions, or 
                    just want to say hello, feel free to reach out!
                </motion.p>

                <form className="space-y-4 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
                    >
                        Send Message
                    </motion.button>
                </form>

                <div className="mt-8 flex justify-center gap-6 text-gray-600 dark:text-gray-300">
                    <a href="mailto:s20diggs@gmail.com" className="hover:text-indigo-500">
                        Email
                    </a>
                    <a href="https://github.com/Shondii-fed" target="_blank" className="hover:text-indigo-500">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/seanmdiggs/" target="_blank" className="hover:text-indigo-500">
                        LinkedIn
                    </a> 
                </div>
            </div>
        </section>
    );
}