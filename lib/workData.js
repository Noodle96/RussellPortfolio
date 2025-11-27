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
        slug: "01",           // 👈 lo usarás en /work/01
        category: "web",
        title: "Portfolio Website",

        // slides = lo que se va a mapear en el Swiper
        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Descripción general del proyecto, objetivo, problema que resuelve...",
                image: "/assets/work/portfolio/overview.png",
            },
            {
                id: 2,
                title: "Features",
                description: "Lista de funcionalidades principales, secciones, interacción...",
                image: "/assets/work/portfolio/features.png",
            },
            {
                id: 3,
                title: "Responsive Design",
                description: "Explicación de cómo se adapta a mobile/desktop, etc.",
                image: "/assets/work/portfolio/responsive.png",
            },
        ],

        live: "https://…",
        github: "https://github.com/…",

        stack: [
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
        ],
    },

    // Otro proyecto…
    {
        num: "02",
        slug: "02",
        category: "Teoria de la Computacion",
        title: "Simulador de Autómatas Finitos",

        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Simulador interactivo para crear y probar autómatas finitos.",
                image: "/assets/work/automata/overview.png",
            },
            {
                id: 2,
                title: "Functionality",
                description: "Permite definir estados, transiciones y evaluar cadenas de entrada.",
                image: "/assets/work/automata/functionality.png",
            },
        ],
        live: "https://…",
        github: "https://github.com/..",
        stack: [
            { name: "JavaScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Canvas API" },
            { name: "Bootstrap" },
            { name: "jQuery" },
            { name: "LocalStorage" },
        ],
    },


    {
        num: "03",
        slug: "03",
        category: "data-visualization",
        title: "Real-Time Crypto Dashboard",

        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
                image: "/assets/work/crypto/overview.png",
            },
            {
                id: 2,
                title: "Charts",
                description: "Advanced charting features with D3.js for visualizing market data.",
                image: "/assets/work/crypto/charts.png",
            },
        ],
        live: "https://…",
        github: "https://github.com/..",
        stack: [
            { name: "React" },
            { name: "D3.js" },
            { name: "WebSocket" },
        ],
    },

    {
        num: "04",
        slug: "04",
        category: "data-visualization",
        title: "C++ game engine",

        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
                image: "/assets/work/crypto/overview.png",
            },
            {
                id: 2,
                title: "Charts",
                description: "Advanced charting features with D3.js for visualizing market data.",
                image: "/assets/work/crypto/charts.png",
            },
        ],
        live: "https://…",
        github: "https://github.com/..",
        stack: [
            { name: "React" },
            { name: "D3.js" },
            { name: "WebSocket" },
        ],
    },

    {
        num: "05",
        slug: "05",
        category: "data-visualization",
        title: "Unity game",

        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
                image: "/assets/work/crypto/overview.png",
            },
            {
                id: 2,
                title: "Charts",
                description: "Advanced charting features with D3.js for visualizing market data.",
                image: "/assets/work/crypto/charts.png",
            },
        ],
        live: "https://…",
        github: "https://github.com/..",
        stack: [
            { name: "React" },
            { name: "D3.js" },
            { name: "WebSocket" },
        ],
    },

    {
        num: "06",
        slug: "06",
        category: "data-visualization",
        title: "Machine Learning projects",

        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
                image: "/assets/work/crypto/overview.png",
            },
            {
                id: 2,
                title: "Charts",
                description: "Advanced charting features with D3.js for visualizing market data.",
                image: "/assets/work/crypto/charts.png",
            },
        ],
        live: "https://…",
        github: "https://github.com/..",
        stack: [
            { name: "React" },
            { name: "D3.js" },
            { name: "WebSocket" },
        ],
    },
    {
        num: "07",
        slug: "07",
        category: "data-visualization",
        title: "VR Application",

        slides: [
            {
                id: 1,
                title: "Overview",
                description: "Interactive dashboard displaying real-time cryptocurrency prices and market trends using public APIs and advanced charting libraries.",
                image: "/assets/work/crypto/overview.png",
            },
            {
                id: 2,
                title: "Charts",
                description: "Advanced charting features with D3.js for visualizing market data.",
                image: "/assets/work/crypto/charts.png",
            },
        ],
        live: "https://…",
        github: "https://github.com/..",
        stack: [
            { name: "React" },
            { name: "D3.js" },
            { name: "WebSocket" },
        ],
    },
];
