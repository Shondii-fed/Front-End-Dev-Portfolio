import { useState } from 'react';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';

type Project = {
    title: string;
    image: string;
    altText: string;
    description: string;
    tech: string[];
    link: string;
}

const allProjects: Project[] = [
    {
        title: 'Tenzies',
        image: './images/Tenzies.png',
        altText: 'Tenzie screenshot',
        description: 'A fun dice game built with React',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://tenzies-shondii-fed.netlify.app/",
    },
    {
        title: 'Todo App',
        image: './images/Todo App DarkMode.png',
        altText: 'Todo App screenshot',
        description: 'A simple todo application to manage tasks',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://gleeful-yeot-9862a7.netlify.app/",
    },
    {
        title: 'Weather App',
        image: './images/Weather App.png',
        altText: 'Weather App screenshot',
        description: 'A weather application that fetches data from a weather API',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://sdweathertracker.netlify.app/",
    },
    {
        title: 'Assembly-Endgame',
        image: './images/Assembly-Endgame.png',
        altText: 'Assembly-Endgame screenshot',
        description: 'A fun hangman game tied into programming',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://assembly-endgame-shondii-fed.netlify.app/",
    }
]

export default function AllProjects() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6

    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = allProjects.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(allProjects.length / projectsPerPage);

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-10">All Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {currentProjects.map((project, index) => (
                        <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col justify-between
                                        transition-transform transform hover:scale-105 hover:shadow-lg"
                            >
                            <div>
                                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>

                                <img
                                className="w-full h-56 object-contain mb-4 rounded-lg"
                                src={project.image}
                                alt={project.altText}
                                />
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                    key={i}
                                    className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                                    >
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} project`}
                                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                            >
                                View Project →
                            </a>
                            </div>

    ))}
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <Button
                        variant="outline"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        >
                        Previous
                    </Button>
                    <span className="self-center">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        >
                        Next
                    </Button>
                </div>
            </div>
        </>
    )
}