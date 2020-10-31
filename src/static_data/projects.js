import {language} from "./languages";

export const projects = [
    {
        id: 1,
        name: 'Pathfinding visualization',
        github_url: 'https://github.com/kraleppa/pathfinding-visualization',
        image_url: 'https://github.com/kraleppa/pathfinding-visualization/raw/master/img/astar.gif',
        languages: [language.JAVA],
        end_date: new Date(2020, 7, 30),
        description: "Desktop application for pathfinding algorithms visualization.",
        size: 5
    },
    {
        id: 2,
        name: 'Book manager',
        github_url: 'https://github.com/kraleppa/pathfinding-visualization',
        image_url: 'https://github.com/kraleppa/book-manager/raw/master/screen.png',
        languages: [language.JAVA, language.ELIXIR],
        end_date: new Date(2020, 7, 30),
        description: "Desktop application for pathfinding algorithms visualization.",
        size: 5
    },

]

