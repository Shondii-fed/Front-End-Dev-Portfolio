import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import { Certification } from '../data/certs'

// type Certification = {
//     title: string
//     image: string
//     altText: string
// }

// const certifications: Certification[] = [
//     {
//         title: 'Scrimba Frontend Developer Career Path',
//         image: './images/FDCP Cert..png',
//         altText: 'Scrimba Frontend Career Path Certificate'
//     }
// ]

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedCert(null)
            }
        }

        if (selectedCert) {
            window.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedCert])

    return (
        <>
            <Navbar />

            <div className="flex flex-col max-w-6xl mx-auto px-4 p-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h2>

                {/* Grid of Certs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Certification.map((cert, index) => (
                        <div
                        key={index}
                        className="bg-white dark:bg-gray-900 shadow-md rounded-xl overflow-hidden cursor-point hover:scale-[1.05] transition"
                        onClick={() => setSelectedCert(cert)}
                        >
                            <img
                                src={cert.image}
                                alt={cert.altText}
                                className="w-full h-48 object-contain p-4"
                                />
                            <h3 className="font-semibold text-white text-lg p-2">{cert.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Modal overlay */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div 
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        >
                            <motion.div 
                                className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl w-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                onClick={(e) => e.stopPropagation()}
                                >
                                {/* Close button */}
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    aria-label='Close'
                                    className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-red-500"
                                    >
                                    <X size={28} />
                                </button>

                                {/* Full-size image */}
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.altText}
                                    className="w-full max-h-[80vh] object-contain rounded-lg"
                                    />

                                <h3 className="mt-4 text-xl text-gray-200 font-bold">{selectedCert.title}</h3>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}