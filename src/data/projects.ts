export type projects = {
    id: number;
    title: string;
    image: string;
    altText: string;
    description: string;
    tech: string[];
    link: string;
}

export const projects: projects[] = [
    {
        id: 1, 
        title: 'Tenzies',
        image: './images/Tenzies.png',
        altText: 'Tenzie screenshot',
        description: 'A fun dice game built with React',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-tenzies.netlify.app/",
    },
    {
        id: 2,
        title: 'Todo App',
        image: './images/Todo App DarkMode.png',
        altText: 'Todo App screenshot',
        description: 'A simple todo application to manage tasks',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-todo.netlify.app/",
    },
    {
        id: 3,
        title: 'Weather App',
        image: './images/Weather App.png',
        altText: 'Weather App screenshot',
        description: 'A weather application that fetches data from a weather API',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-weathertracker.netlify.app/",
    },
    {
        id: 4,
        title: 'Assembly-Endgame',
        image: './images/Assembly-Endgame.png',
        altText: 'Assembly-Endgame screenshot',
        description: 'A fun hangman game tied into programming',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: "https://shondii-assembly-endgame.netlify.app/",
    },
    {
        id: 5,
        title: 'Hometown Homepage',
        image: './images/Hometown Homepage.png',
        altText: 'Hometown Homepage screenshot',
        description: 'Top 3 best attractions to visit in my hometown.',
        tech: ['HTML5', 'CSS3'],
        link: "https://shondii-hometown-homepage.netlify.app/",
    },
    {
        id: 6,
        title: 'Unit Converter',
        image: './images/Unit Converter.png',
        altText: 'Unit Converter screenshot',
        description: 'Input a value to receive a conversion for Mass, Volume, Length in imperial and metric.',
        tech: ['HTML5', 'JavaScript', 'CSS3'],
        link: "https://shondii-unit-converter.netlify.app/",
    },
    {
        id: 7,
        title: 'Recipe Page',
        image: './images/Recipe Page.png',
        altText: 'Recipe Page screenshot',
        description: 'Recreation of a recipe page challenge from Frontend Mentor.',
        tech: ['HTML5', 'CSS3'],
        link: "https://shondii-recipe-page.netlify.app/",
    }
]