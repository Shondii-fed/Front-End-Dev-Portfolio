import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'
import MainProjects from '../components/MainProjects.js'
import About from '../components/About.js'
import Contact from '../components/Contact.js'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {

    const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])

    return (
        <main className="flex flex=col w-full">
            
            <Navbar />

            <section id="hero" className="w-full min-h-screen flex items-center justify-center">
                <Hero />
            </section>

            <section id="projects" className="w-full py-20">
                <MainProjects />
            </section>

            <section id="about" className="w-full py-20 bg-gray-50 dark:bg-gray-900">
                <About />
            </section>

            <section id="contact" className="w-full py-20">
                <Contact />
            </section>
            
        </main>
    )
}