"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-[#232329] rounded-xl overflow-hidden border border-white/10 hover:border-accent/60 transition-all">
            {/* Imagen */}
            <div className="relative w-full h-52">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fill group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge con el num dentro de la imagen */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent  border border-accent/60">
                    <span className="text-xs font-semibold text-black">
                        {project.num}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col gap-2">
                {/* Título + categoría + micro descripción */}
                <div className="flex flex-col justify-center gap-1">
                    <h2 className="text-lg font-semibold group-hover:text-accent transition-colors capitalize">
                        {project.title}
                    </h2>

                    <div className="flex flex-col gap-2 text-xs">
                        <span className="uppercase tracking-wide text-teal-400">
                            {project.category}
                        </span>

                        {/* Separador opcional si hay tagline */}
                        {project.tagline && (
                            <>
                                {/* <span className="text-white/30">•</span> */}
                                <div className='border-b border-white/20 w-full'></div>
                                <p className="text-[0.7rem] text-white/60 ">
                                    {project.tagline}
                                </p>
                            </>
                        )}
                    </div>
                </div>

                {/* Descripción corta del proyecto */}
                {/* {project.description && (
                    <p className="mt-1 text-sm text-white/70 line-clamp-2">
                        {project.description}
                    </p>
                )} */}

                {/* Stacks + botón a la derecha */}
                <div className="flex items-center justify-between gap-2 mt-3">
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
