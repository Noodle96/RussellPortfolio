"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-[#232329] rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-all">
            {/* Imagen */}
            <div className="relative w-full h-52">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fill group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col gap-2">
                <span className="text-accent text-sm">{project.num}</span>

                {/* quu esten ubicados a la izqueierda y derecha */}
                <div className="flex justify-center">
                    <h2 className="text-xl font-semibold group-hover:text-accent transition-colors capitalize">
                        {project.title}
                    </h2>
                    <h2 className="ml-auto text-teal-500">
                        {project.category}
                    </h2>
                </div>


                {/* Stacks + botón a la derecha */}
                <div className="flex items-center justify-between gap-2 mt-2">
                    {/* Tags de stack */}
                    <div className="flex flex-wrap gap-2 flex-1">
                        {project.stack.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs bg-amber-200/90 px-2 py-1 rounded-full text-black"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* Botón primario hacia el detalle */}
                    <Link
                        href={`/work/${project.slug}`}
                        className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-full 
                       bg-accent hover:bg-accent-hover text-primary text-xs font-semibold 
                       transition-all hover:scale-105"
                    >
                        Ver más
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
