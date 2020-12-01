import {language} from "./languages";

export const projects = [
    {
        id: 1,
        name: 'Gracz.pl',
        buttons: [
            {name: 'Backend code', url: 'https://github.com/kraleppa/gracz-pl-back'},
            {name: 'Frontend code', url: 'https://github.com/kraleppa/gracz-pl-web'}
        ],
        image_url: 'https://github.com/kraleppa/gracz-pl-web/raw/master/img-readme/unlogged.gif',
        languages: [language.JAVA, language.JS],
        end_date: new Date(2020, 9, 23),
        description: "Used Java with Spring framework and React.js to create an online game shop. This project taught me a lot about authentication/authorization with JWT in web applications. Also it really improved my understanding of REST API",
        size: 10,
    },
    {
        id: 2,
        name: 'XD Eats',
        buttons: [
                {name: 'Backend code', url: 'https://github.com/Better-Team-XD/xd-eats-back-v2'},
                {name: 'Frontend code', url: 'https://github.com/Better-Team-XD/hacknarok-web'}
            ],
        image_url: 'https://github.com/Better-Team-XD/hacknarok-web/raw/master/screenshots/usecase.gif',
        languages: [language.PYTHON, language.JS],
        end_date: new Date(2020, 7, 30),
        description: "Used Python and React.js to create a web application that helps users to find out recipe for meal that they can prepare. This project won for my team third place during the 4th edition of Hacknarök hackathon.",
        size: 5,
    },
    {
        id: 3,
        name: 'Evolution game',
        buttons: [
            {name: 'Backend code', url: 'https://github.com/kraleppa/evolution-game-v2'},
            {name: 'Frontend code', url: 'https://github.com/kraleppa/evolution-game-web'}
        ],
        image_url: 'https://github.com/kraleppa/evolution-game-web/raw/master/screenShots/preview.gif',
        languages: [language.JAVA, language.JS],
        end_date: new Date(2020, 11, 1),
        description: "User Java and JavaScript to create visualize evolution. It really improved my understanding of object oriented modeling and using websockets on backend and also on frontend",
        size: 8
    },
    {
        id: 5,
        name: 'Become a typing machine',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/become-typing-machine'},
        ],
        image_url: 'https://github.com/kraleppa/become-typing-machine/raw/master/ReadmeImg/bcm1.png',
        languages: [language.PYTHON],
        end_date: new Date(2020, 4, 30),
        description: "Used Python to create a desktop application for fast-typing practice with web features. Project was a part of Python classes. This project gave me fundamental knowledge about creating software in Python ",
        size: 5
    },
    {
        id: 4,
        name: 'Pathfinding visualization',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/pathfinding-visualization'},
        ],
        image_url: 'https://github.com/kraleppa/pathfinding-visualization/raw/master/img/astar.gif',
        languages: [language.JAVA],
        end_date: new Date(2020, 6, 30),
        description: "Used Java to create a desktop application that allows users to test the most popular pathfinding algorithms in different situations. This project improved my understanding of pathfinding algorithms and taught me basics of JavaFX",
        size: 6
    },
    {
        id: 32,
        name: 'eRecruitment',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/e-recruitment'},
        ],
        image_url: 'https://github.com/szarbartosz/eRecruitment/raw/master/diagram.png',
        languages: [language.JAVA],
        end_date: new Date(2020, 4, 26),
        description: "Used Java with Hibernate and Spark to create a backend for eRecruitment web application. Project was a part of database classes. This project improved my knowledge about ORMs and creating REST API in Java.",
        size: 7
    },
    {
        id: 6,
        name: 'Book manager',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/book-manager'},
        ],
        image_url: 'https://github.com/kraleppa/book-manager/raw/master/screen.png',
        languages: [language.ELIXIR, language.JS],
        end_date: new Date(2020, 4, 18),
        description: "Used Elixir to create a GraphQL API for web application written in JavaScript that allows users to store and manage their books collection. Thanks to this project I understood GraphQL.",
        size: 4
    },
    {
        id: 7,
        name: 'Conferences',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/conferences'},
        ],
        image_url: 'https://github.com/kraleppa/conferences/raw/master/schemat%20bazy.PNG',
        languages: [language.SQL],
        end_date: new Date(2020, 0, 20),
        description: "Used MS SQL Server to create a database system for company which organizes conferences. Project was a part of database classes. This project taught me a lot about relational database systems.",
        size: 9
    },

    {
        id: 9,
        name: 'Covid statistics',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/coronavirus-stats'},
        ],
        image_url: 'https://github.com/kraleppa/coronavirus-stats/raw/master/ReadmeImg/coviddata1.png',
        languages: [language.PYTHON],
        end_date: new Date(2020, 4, 11),
        description: "Used Python and Flask to create a simple web application which shows statistics about covid epidemic in Poland. This project taught me more about Flask and web applications in Python.",
        size: 2
    },

    {
        id: 8,
        name: 'IT website',
        buttons: [
            {name: 'Code', url: 'https://github.com/kraleppa/bootstrap-website'},
            {name: 'Preview', url: 'https://kraleppa.github.io/bootstrap-website/'}
        ],
        image_url: 'https://github.com/kraleppa/bootstrap-website/blob/master/IT/presentation.gif?raw=true',
        languages: [language.HTML],
        end_date: new Date(2019, 10, 20),
        description: "Used bootstrap to create a static website for imaginary IT company. Project was a part of web application classes. This project gave me basic knowledge about bootstrap and creating websites.",
        size: 2
    },





]

