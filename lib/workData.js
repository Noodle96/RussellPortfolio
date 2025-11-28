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
        tagline: "Un inmersivo juego de realidad virtual para enseñar operaciones matemáticas básicas a niños.",
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
                description: [
                    {
                        description_i: "Notificaciones mediante audio y texto: Los jugadores recibirán mensajes tanto en formato \
                        de audio como de texto para guiarlos a través del juego y reforzar su experiencia de aprendizaje."}
                ],
                image: "/assets/work/01/notifications.png",
            },
            {
                id: "03-01",
                title: "Tareas primordiales del juego - Tutoriales",
                description: [
                    {
                        description_i: "Proveer instrucciones claras que faciliten la comprensión y resolución \
                             de problemas relacionados con operaciones matemáticas."},
                ],
                image: "/assets/work/01/tutorial01.png",
            },
            {
                id: "03-02",
                title: "Tareas primordiales del juego - Tutoriales",
                description: [
                    {
                        description_i: "Proveer ejemplos detallados que faciliten la comprensión y resolución \
                            de problemas relacionados con operaciones matemáticas."},
                ],
                image: "/assets/work/01/tutorial02.png",
            },
            {
                id: "04-01",
                title: "Tareas primordiales del juego - Práctica suma",
                description: [
                    {
                        description_i: "Ellos necesitan aplicar lo aprendido mediante tareas prácticas que \
                            ofrezcan retroalimentación inmediata una vez hayan pasado por los tutoriales, práctica para la suma."},
                ],
                image: "/assets/work/01/practicaSuma.png",
            },
            {
                id: "04-02",
                title: "Tareas primordiales del juego - Práctica multiplicación",
                description: [
                    {
                        description_i: "Ellos necesitan aplicar lo aprendido mediante tareas prácticas que \
                            ofrezcan retroalimentación inmediata una vez hayan pasado por los tutoriales, \
                            práctica para la multiplicación."},
                ],
                image: "/assets/work/01/practicaMultiplicacion.png",
            },
            {
                id: "05-01",
                title: "Actividad de Suma, Manipulación de Objetos-frutas",
                description: [
                    {
                        description_i: "El jugador debe agarrar y mover frutas para representar decenas. \
                                Esto les permite construir sumas simples de manera visual y \
                                kinestésica, reforzando el concepto de juntar para obtener un total." }
                ],
                image: "/assets/work/01/experienciaSuma.png",
            },
            {
                id: "05-02",
                title: "Actividad de Multiplicación - Armar Grupos",
                description: [
                    {
                        description_i: "El jugador debe agrupar frutas mediante el escalado de bloques para formar conjuntos repetidos \
                                (ejemplo: 4 grupos de 3). Esto ayuda a comprender la multiplicación como suma repetida." },
                ],
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

    {
        num: "02",
        slug: "regex-to-dfa-converter",
        category: "Desktop App",
        title: "Regex to DFA Converter",
        image: "/projects/regex-dfa/cover.png",
        image: "/assets/work/02/main.png",
        tagline: "Convierte expresiones regulares en autómatas AFN y AFD visuales",
        live: "",
        github: "https://github.com/Noodle96/EstructuraDeDatos/tree/master/QT/RegularExpressionToDeterministicAutomaton",
        stack: [
            { name: "C++" },
            { name: "Qt Widgets" },
            { name: "Graphviz" },
            { name: "Automata Theory" }
        ],
        slides: [
            {
                id: "01",
                title: "Overview",
                description: [
                    {
                        description_i: "Aplicación de escritorio desarrollada en C++ y Qt para convertir expresiones regulares en \
                                        autómatas finitos no deterministas (AFN) y luego en autómatas finitos deterministas (AFD). \
                                       "
                    },
                    {
                        description_i: "Pensada para estudiantes de computación, docentes o desarrolladores que necesiten visualizar \
                                        y comprender autómatas."
                    },
                    {
                        description_i: " Mi rol fue el desarrollo completo: diseño, lógica de conversión, \
                                        interfaz y visualización gráfica."
                    },
                ],
                image: "/assets/work/02/overview.png",
            },

            {
                id: "02",
                title: "Problema & Objetivo",
                description: [
                    {
                        description_i: "Muchos estudiantes y programadores u otro profesional tienen dificultad para entender cómo una expresión regular \
                                        se transforma en un AFN y posteriormente en un AFD de manera visual."
                    },
                    {
                        description_i: "El objetivo fue crear una \
                                        herramienta intuitiva que permitiera ingresar una expresión, observar su descomposición, \
                                        ver la construcción paso a paso del AFN y generar automáticamente el AFD correspondiente, \
                                        facilitando así el aprendizaje y la verificación de cadenas."
                    },
                ],
                image: "/assets/work/02/problem.png"
            },

            {
                id: "03-01",
                title: "Características Clave",
                description: [
                    { description_i: "Conversión completa de ER -> AFN usando operaciones de concatenación, unión y estrella." },
                    { description_i: "Cálculo de clausuras epsilon y construcción sistemática del AFN extendido." },
                    { description_i: "Generación del AFD mediante estados compuestos y transición determinista." },
                    { description_i: "Visualización gráfica del AFD utilizando Graphviz en formato PNG." },
                    { description_i: "Cada funcionalidad aporta claridad y soporte visual al proceso formal de teoría de autómatas." },
                ],
                image: "/assets/work/02/caracteristicas01.png"
            },

            {
                id: "03-02",
                title: "Características Clave",
                description: [
                    { description_i: "Módulo de verificación que permite comprobar si una cadena pertenece al AFD final." },
                    { description_i: "Cada funcionalidad aporta claridad y soporte visual al proceso formal de teoría de autómatas." },
                ],
                image: "/assets/work/02/caracteristicas02.png"
            },

            {
                id: "04-01",
                title: "Ejemplo: Expresiones Regulares to AFD",
                description: [
                    { description_i: "La aplicación genera primero un AFN utilizando operaciones básicas (concatenación, unión y estrella)." },
                    { description_i: "calcula clausuras-ε y luego construye el AFD final." },
                    { description_i: "Cada AFD se visualiza automáticamente mediante Graphviz para facilitar el análisis." },
                    { description_i: "Ejemplo: ER = `a(b|c)*`" },
                    { description_i: "Acepta cadenas que inician con 'a' y continúan con cualquier cantidad de 'b' o 'c'." },
                ],
                image: "/assets/work/02/03.01.png"
            },

            {
                id: "04-02",
                title: "Verificación de Cadenas en el AFD",
                description: [
                    {
                        description_i: "El sistema incluye un módulo de verificación que determina si una cadena pertenece al \
                                        lenguaje generado por el AFD final. Esto permite validar fácilmente el comportamiento de la expresión regular."},
                    { description_i: "Ejemplo con resultado True: ER = `a(b|c)*` " },
                    { description_i: "Cadena: `abbbbbbbb` -> Resultado: `True`" },
                ],
                image: "/assets/work/02/03.02.01.png"
            },

            {
                id: "04-03",
                title: "Verificación de Cadenas en el AFD",
                description: [
                    {
                        description_i: "El sistema incluye un módulo de verificación que determina si una cadena pertenece al lenguaje \
                                        generado por el AFD final. Esto permite validar fácilmente el comportamiento de la expresión regular."},
                    { description_i: "Ejemplo con resultado False: ER = `a(b|c)*`" },
                    { description_i: "Cadena: `aaccc` -> Resultado: `False`" },
                ],
                image: "/assets/work/02/03.02.02.png"
            },

            {
                id: "05",
                title: "Stack Técnico & Arquitectura",
                description: [
                    {
                        description_i: "El proyecto utiliza C++ y Qt Widgets para la interfaz gráfica,\
                                    junto con Graphviz para generar visualizaciones de los autómatas."
                    },
                    {
                        description_i: "La arquitectura se basa en módulos \
                                    independientes: parser de expresiones regulares, generador AFN, constructor de AFD, normalizador de cadenas, \
                                    y módulo de visualización.La separación por clases(NFA, DFA, StateCompuesto, Phrase) permite una extensión \
                                    clara del sistema y facilita el mantenimiento."
                    },],
                image: "/assets/work/02/stack.png"
            },

            // {
            //     id: "05",
            //     title: "Retos & Soluciones",
            //     description: "- **Reto: Parsing de expresiones regulares complejas.**\
            //                         ** Solución:** Implementé un descomposable tree de 'phrases' con normalización automática y soporte para paréntesis, estrella y concatenación implícita.\
            //                         ** Impacto:** El sistema soporta expresiones grandes y anidadas sin errores.\
            //                         - ** Reto: Construcción eficiente de estados compuestos para el AFD.**\
            //                         ** Solución:** Implementé un algoritmo con`std::set`, colas y detección de estados repetidos para construir solo los necesarios.\
            //                         ** Impacto:** El AFD se genera correctamente incluso para expresiones enormes.\
            //                         - ** Reto: Visualización clara del AFN y AFD.**\
            //                         ** Solución:** Utilicé Graphviz(`dot`) combinado con QGraphicsView para renderizar las imágenes de forma nítida y escalable.\
            //                         ** Impacto:** El usuario puede ver, analizar y navegar los autómatas de manera intuitiva.",
            //     image: "/projects/regex-dfa/challenges.png"
            // }
        ]
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
