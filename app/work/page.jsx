// app/work/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/workData";

const WorkPage = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>

                {/* GRID de proyectos */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="group bg-[#232329] rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-all"
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <span className="text-accent text-sm">{project.num}</span>
                                <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                                    {project.title}
                                </h2>
                                {/* renderizar los stacks */}
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs  bg-amber-200/90 px-2 py-1 rounded-full text-black"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default WorkPage;
