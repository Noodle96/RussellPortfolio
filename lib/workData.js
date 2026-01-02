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

    {
        num: "03",
        slug: "eeg-event-analytics-aws",
        category: "Cloud & Fog & Data Engineering",
        title: "EEG Event Analytics Pipeline on AWS",
        image: "/assets/work/03_eeg-aws/arquitectura.png",
        tagline: "Pipeline fog-cloud orientado a eventos para la ingesta, persstencia, análisis y notificación de eventos EEG utilizando servicios de AWS.",
        live: "",
        github: "https://github.com/Noodle96/eeg-seizure-fog-cloud-analytics-pipeline",

        stack: [
            { name: "Fog Computing" },
            { name: "Cloud Computing" },
            { name: "AWS Kinesis" },
            { name: "AWS Lambda" },
            { name: "AWS S3" },
            { name: "AWS DynamoDB" },
            { name: "AWS Glue" },
            { name: "Amazon Athena" },
            { name: "Amazon SNS" },
            { name: "IAM" },
            { name: "IaC" },
            { name: "Event-Driven Architecture" },
            { name: "Data Lake" },
            { name: "EEG Signal Processing" },
        ],

        slides: [
            {
                id: "01",
                title: "Overview",
                description: [
                    {
                        description_i:
                            "Este proyecto implementa un pipeline de analítica de eventos EEG basado en Fog y AWS, diseñado para procesar, almacenar y analizar información derivada de señales EEG de manera escalable y desacoplada."
                    },
                    {
                        description_i:
                            "El enfoque se centra en analítica de eventos (timestamps, conteos de ventanas sospechosas), evitando el procesamiento directo de la señal cruda y permitiendo análisis eficientes mediante fog computing servicios cloud."
                    },
                ],
                image: "/assets/work/03_eeg-aws/arquitectura.png",
            },

            {
                id: "02",
                title: "Problema & Motivación",
                description: [
                    {
                        description_i:
                            "Las señales EEG tradicionalmente se procesan en entornos hospitalarios, lo que limita su análisis continuo, escalable y remoto."
                    },
                    {
                        description_i:
                            "El proyecto busca demostrar que es posible construir una arquitectura cloud capaz de manejar datos EEG no clínicos, enfocándose en eventos relevantes y habilitando analítica histórica y comparativa."
                    },
                    {
                        description_i:
                            "La motivación principal es desacoplar la adquisición de datos, el almacenamiento y la analítica, permitiendo flexibilidad, escalabilidad y seguridad."
                    },
                ],
                image: "/assets/work/03_eeg-aws/eeg.png",
            },


            {
                id: "03",
                title: "Arquitectura",
                description: [
                    {
                        description_i:
                            "La arquitectura está dividida en tres grandes capas."
                    },
                    {
                        description_i:
                            "A) Obtencion de señales cerebrales: Colocación de electrodos en la cabeza de pacientes en observación."
                    },
                    {
                        description_i:
                            "B) Fog Computing: procesamiento cercano a la fuente(hospital)."
                    },
                    {
                        description_i:
                            "C) Cloud Computing(AWS): ingestión, persistencia, analítica y alertas."
                    },
                ],
                image: "/assets/work/03_eeg-aws/arquitectura.png",
            },

            {
                id: "04",
                title: "Capa Fog Computing",
                description: [
                    {
                        description_i:
                            "La capa Fog permite realizar procesamiento cercano a los pacientes, reduciendo, Latencia, Tráfico innecesario hacia la nube Costos de almacenamiento y cómputo"
                    },
                    {
                        description_i:
                            "El Fog actúa como un primer filtro inteligente, enviando a la nube solo información relevante y eventos procesados, lo cual es fundamental en escenarios clínicos reales"
                    },
                    {
                        description_i:
                            "Alguna de las funciones principales son: Segmentación/procesamiento en ventanas temporales de 4 seg, inferencia con un modelo ligero llamado ligera EEGNet, conteo de ventanas sospechosas, decisión condicional de subida de EDF completos a la nube."
                    },

                ],
                image: "/assets/work/03_eeg-aws/roomB_1.png",
            },

            {
                id: "05",
                title: "Capa Cloud Computing (AWS) -  Kinesis Data Stream",
                description: [
                    {
                        description_i:
                            "Ingestar eventos EEG en tiempo real."
                    },
                    {
                        description_i:
                            "Permite múltiples productores(nodos Fog), desacopla la ingesta del procesamiento y soporta flujos continuos de datos."
                    },
                ],
                image: "/assets/work/03_eeg-aws/kinesis.png",
            },

            {
                id: "06",
                title: "Capa Cloud Computing (AWS) -  AWS Lambda to Procesamiento de eventos",
                description: [
                    {
                        description_i:
                            "Procesar eventos EEG."
                    },
                    {
                        description_i:
                            "Decodificar eventos provenientes de Kinesis."
                    },
                    {
                        description_i:
                            "Persistir eventos en S3."
                    },
                    {
                        description_i:
                            "Actualizar el estado de sesión en DynamoDB."
                    },
                ],
                image: "/assets/work/03_eeg-aws/lambda1.png",

            },

            {
                id: "07",
                title: "Capa Cloud Computing (AWS) -  Amazon S3 to Data Lake de eventos",
                description: [
                    {
                        description_i:
                            "Almacenar eventos EEG históricos."
                    },
                    {
                        description_i:
                            "S3 actúa como un data lake de bajo costo, altamente escalable y base para la analítica offline."
                    },
                ],
                image: "/assets/work/03_eeg-aws/s3_2.png",

            },

            {
                id: "08",
                title: "Capa Cloud Computing (AWS) -  Amazon DynamoDB to Estado de sesiones",
                description: [
                    {
                        description_i:
                            "Mantener estado agregado por sesión."
                    },
                    {
                        description_i:
                            "DynamoDB ofrece baja latencia y es ideal para contadores y estados incrementales."
                    },
                    {
                        description_i:
                            "Información almacenada: total de ventanas procesadas, total de ventanas sospechosas, identificadores de paciente y sesión."
                    },
                ],
                image: "/assets/work/03_eeg-aws/dynamo.png",

            },

            {
                id: "09",
                title: "Capa Cloud Computing (AWS) -  AWS Glue Data Catalog",
                description: [
                    {
                        description_i:
                            "Catalogar los eventos almacenados en S3."
                    },
                    {
                        description_i:
                            "Permite descubrir el esquema de los datos y habilita consultas SQL sin necesidad de definir tablas manualmente."
                    },

                ],
                image: "/assets/work/03_eeg-aws/glue.png",

            },

            {
                id: "10",
                title: "Capa Cloud Computing (AWS) -  Amazon Athena",
                description: [
                    {
                        description_i:
                            "Consultar eventos EEG mediante SQL."
                    },
                    {
                        description_i:
                            "Una vez definido el catalogo con AWS Glue se puede hacer algunas consultas SQL y almacenadas en el bucket S3."
                    },

                ],
                image: "/assets/work/03_eeg-aws/athena_s3_2.png",

            },

            {
                id: "11",
                title: "Capa Cloud Computing (AWS) -  Amazon Lambda y Amazon SNS para el sistema de notificaciones",
                description: [
                    {
                        description_i:
                            "El segundo lambda Detectar sesiones críticas, tiene como source a DynamoDB Streams."
                    },
                    {
                        description_i:
                            "SNS permite desacoplar la generación de alertas del canal de entrega (email, SMS, push)."
                    },
                    {
                        description_i:
                            "Amazon SNS notifica alertas clínicas."
                    },
                ],
                image: "/assets/work/03_eeg-aws/alerta_sns.jpeg",

            },

            {
                id: "12",
                title: "Infraestructura como Código(IaC) con Pulumi",
                description: [
                    {
                        description_i:
                            "Toda la infraestructura Cloud está definida usando Pulumi en python, permitiendo versionado, replicabilidad y despliegue automatizado."
                    },
                ],
                image: "/assets/work/03_eeg-aws/pulumi.png",

            },

        ],
    },

];
