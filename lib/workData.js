// export const projects = [
//     {
//         num: "01",
//         category: "frontend",
//         title: "Project 1",
//         description: "This is a description of project 1. It showcases frontend development skills.",
//         stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "Javascript" }],
//         image: "/assets/work/thumb1.png",
//         live: "",
//         github: "",
//     },
//     {
//         num: "02",
//         category: "fullstack",
//         title: "E-Commerce Platform",
//         description:
//             "A fully responsive e-commerce application with product listings, cart functionality, and payment integration. Built with modern frameworks and REST APIs.",
//         stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }, { name: "MongoDB" }],
//         image: "/assets/work/thumb2.png",
//         live: "",
//         github: "",
//     },
//     {
//         num: "03",
//         category: "data-visualization",
//         title: "Real-Time Crypto Dashboard",
//         description:
//             "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
//         stack: [{ name: "React" }, { name: "D3.js" }, { name: "WebSocket" }],
//         image: "/assets/work/thumb3.png",
//         live: "",
//         github: "",
//     },
// ];



// lib/workData.js
export const projects = [
    {
        num: "01",
        slug: "01",
        category: "VR Application",
        title: "Math4Fun: VR Educational Game for Kids",
        image: "/assets/work/01/main.png",

        // slides = lo que se va a mapear en el Swiper
        slides: [
            {
                id: "01",
                title: "Overview",
                description: "Math4Fun es un juego educativo diseñado para niños de 8 años con el objetivo de enseñar \
                             las operaciones matemáticas básicas de una manera divertida e interactiva. Este proyecto \
                             combina aprendizaje y entretenimiento, permitiendo que los niños refuercen sus habilidades \
                             matemáticas mientras juegan.",
                image: "/assets/work/01/main.png",
            },
            {
                id: "02",
                title: "Notificaciones",
                description: "Notificaciones mediante audio y texto: Los jugadores recibirán mensajes tanto en formato \
                        de audio como de texto para guiarlos a través del juego y reforzar su experiencia de aprendizaje.",
                image: "/assets/work/01/notifications.png",
            },
            {
                id: "03-01",
                title: "Tareas primordiales del juego - Tutoriales",
                description: "Proveer instrucciones claras que faciliten la comprensión y resolución \
                             de problemas relacionados con operaciones matemáticas.",
                image: "/assets/work/01/tutorial01.png",
            },
            {
                id: "03-02",
                title: "Tareas primordiales del juego - Tutoriales",
                description: "Proveer ejemplos detallados que faciliten la comprensión y resolución \
                            de problemas relacionados con operaciones matemáticas.",
                image: "/assets/work/01/tutorial02.png",
            },
            {
                id: "04-01",
                title: "Tareas primordiales del juego - Práctica suma",
                description: "Ellos necesitan aplicar lo aprendido mediante tareas prácticas que \
                            ofrezcan retroalimentación inmediata una vez hayan pasado por los tutoriales, práctica para la suma.",
                image: "/assets/work/01/practicaSuma.png",
            },
            {
                id: "04-02",
                title: "Tareas primordiales del juego - Práctica multiplicación",
                description: "Ellos necesitan aplicar lo aprendido mediante tareas prácticas que \
                            ofrezcan retroalimentación inmediata una vez hayan pasado por los tutoriales, \
                            práctica para la multiplicación.",
                image: "/assets/work/01/practicaMultiplicacion.png",
            },
            {
                id: "05-01",
                title: "Actividad de Suma, Manipulación de Objetos-frutas",
                description: "El jugador debe agarrar y mover frutas para representar decenas. \
                                Esto les permite construir sumas simples de manera visual y \
                                kinestésica, reforzando el concepto de juntar para obtener un total.",
                image: "/assets/work/01/experienciaSuma.png",
            },
            {
                id: "05-02",
                title: "Actividad de Multiplicación - Armar Grupos",
                description: "El jugador debe agrupar frutas mediante el escalado de bloques para formar conjuntos repetidos \
                                (ejemplo: 4 grupos de 3). Esto ayuda a comprender la multiplicación como suma repetida.",
                image: "/assets/work/01/experienciaMultiplicacion.png",
            },
        ],

        live: "https://drive.google.com/file/d/1Or-1b6ixPoPiFpzhqIrz-V5DxFIY_ATa/view?usp=sharing",
        github: "https://github.com/Noodle96/Math4Fun",

        stack: [
            { name: "HCI" },
            { name: "C#" },
            { name: "Unity" },
            { name: "VR development" },
            { name: "Meta Quest 2" },
            // { name: "Oculus SDK" },
            // { name: "3D Modeling" },
            { name: "3D Interaction" },
            { name: "Game Design" },
        ],
    },

    // Otro proyecto…
    // {
    //     num: "02",
    //     slug: "02",
    //     category: "Teoria de la Computacion",
    //     title: "Simulador de Autómatas Finitos",

    //     slides: [
    //         {
    //             id: 1,
    //             title: "Overview",
    //             description: "Simulador interactivo para crear y probar autómatas finitos.",
    //             image: "/assets/work/automata/overview.png",
    //         },
    //         {
    //             id: 2,
    //             title: "Functionality",
    //             description: "Permite definir estados, transiciones y evaluar cadenas de entrada.",
    //             image: "/assets/work/automata/functionality.png",
    //         },
    //     ],
    //     live: "https://…",
    //     github: "https://github.com/..",
    //     stack: [
    //         { name: "JavaScript" },
    //         { name: "HTML5" },
    //         { name: "CSS3" },
    //         { name: "Canvas API" },
    //         { name: "Bootstrap" },
    //         { name: "jQuery" },
    //         { name: "LocalStorage" },
    //     ],
    // },


    // {
    //     num: "03",
    //     slug: "03",
    //     category: "data-visualization",
    //     title: "Real-Time Crypto Dashboard",

    //     slides: [
    //         {
    //             id: 1,
    //             title: "Overview",
    //             description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
    //             image: "/assets/work/crypto/overview.png",
    //         },
    //         {
    //             id: 2,
    //             title: "Charts",
    //             description: "Advanced charting features with D3.js for visualizing market data.",
    //             image: "/assets/work/crypto/charts.png",
    //         },
    //     ],
    //     live: "https://…",
    //     github: "https://github.com/..",
    //     stack: [
    //         { name: "React" },
    //         { name: "D3.js" },
    //         { name: "WebSocket" },
    //     ],
    // },

    // {
    //     num: "04",
    //     slug: "04",
    //     category: "data-visualization",
    //     title: "C++ game engine",

    //     slides: [
    //         {
    //             id: 1,
    //             title: "Overview",
    //             description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
    //             image: "/assets/work/crypto/overview.png",
    //         },
    //         {
    //             id: 2,
    //             title: "Charts",
    //             description: "Advanced charting features with D3.js for visualizing market data.",
    //             image: "/assets/work/crypto/charts.png",
    //         },
    //     ],
    //     live: "https://…",
    //     github: "https://github.com/..",
    //     stack: [
    //         { name: "React" },
    //         { name: "D3.js" },
    //         { name: "WebSocket" },
    //     ],
    // },

    // {
    //     num: "05",
    //     slug: "05",
    //     category: "data-visualization",
    //     title: "Unity game",

    //     slides: [
    //         {
    //             id: 1,
    //             title: "Overview",
    //             description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
    //             image: "/assets/work/crypto/overview.png",
    //         },
    //         {
    //             id: 2,
    //             title: "Charts",
    //             description: "Advanced charting features with D3.js for visualizing market data.",
    //             image: "/assets/work/crypto/charts.png",
    //         },
    //     ],
    //     live: "https://…",
    //     github: "https://github.com/..",
    //     stack: [
    //         { name: "React" },
    //         { name: "D3.js" },
    //         { name: "WebSocket" },
    //     ],
    // },

    // {
    //     num: "06",
    //     slug: "06",
    //     category: "data-visualization",
    //     title: "Machine Learning projects",

    //     slides: [
    //         {
    //             id: 1,
    //             title: "Overview",
    //             description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
    //             image: "/assets/work/crypto/overview.png",
    //         },
    //         {
    //             id: 2,
    //             title: "Charts",
    //             description: "Advanced charting features with D3.js for visualizing market data.",
    //             image: "/assets/work/crypto/charts.png",
    //         },
    //     ],
    //     live: "https://…",
    //     github: "https://github.com/..",
    //     stack: [
    //         { name: "React" },
    //         { name: "D3.js" },
    //         { name: "WebSocket" },
    //     ],
    // },
    // {
    //     num: "07",
    //     slug: "07",
    //     category: "data-visualization",
    //     title: "VR Application",

    //     slides: [
    //         {
    //             id: 1,
    //             title: "Overview",
    //             description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
    //             image: "/assets/work/crypto/overview.png",
    //         },
    //         {
    //             id: 2,
    //             title: "Charts",
    //             description: "Advanced charting features with D3.js for visualizing market data.",
    //             image: "/assets/work/crypto/charts.png",
    //         },
    //     ],
    //     live: "https://…",
    //     github: "https://github.com/..",
    //     stack: [
    //         { name: "React" },
    //         { name: "D3.js" },
    //         { name: "WebSocket" },
    //     ],
    // },
];
