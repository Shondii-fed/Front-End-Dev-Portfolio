import { Button } from "../components/ui/button";

type Project = {
    title: string;
    image: string;
    altText: string;
    description: string;
    tech: string[];
    link: string;
}

const projects: Project[] = [
    {
        title: 'Tenzies',
        image: './images/Tenzies.png',
        altText: 'Tenzie screenshot',
        description: 'A fun dice game built with React',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-tenzies.netlify.app/",
    },
    {
        title: 'Saasify Landing Page',
        image: './images/Desktop_Screenshot.png',
        altText: 'Saasify Desktop screenshot',
        description: 'SaaS Landing Page Template',
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
        link: "https://saasify-lp.netlify.app/",
    },
    {
        title: 'Weather App',
        image: './images/Weather App.png',
        altText: 'Weather App screenshot',
        description: 'A weather application that fetches data from a weather API',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-weathertracker.netlify.app/",
    },
    {
        title: 'Assembly-Endgame',
        image: './images/Assembly-Endgame.png',
        altText: 'Assembly-Endgame screenshot',
        description: 'A fun hangman game tied into programming',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-assembly-endgame.netlify.app/",
    }
        
]

export default function MainProjects() {
    return (
        <div className="flex flex-col max-w-6xl mx-auto px-4 text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl dark:text-white dark:bg-gray-900 shadow-md p-6 flex flex-col justify-between hover:scale-[1.05]"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            
                            <img className="w-full h-56 object-contain mb-4" src={project.image} alt={project.altText} />
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {project.tech.map((tech, i) => (
                                    
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
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
                            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                        >View Project →
                        </a>
                    
                    </div>
                ))}
            
            </div>

            <div className="mt-12">
                <Button asChild className="font-semibold text-white text-lg p-5 bg-indigo-500 hover:bg-indigo-600">
                    <a href="/projects">View All Projects</a>
                </Button>
            </div>

        </div>
    )
}