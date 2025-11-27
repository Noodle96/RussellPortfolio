// app/work/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/workData";
import ProjectCard from "@/components/ProjectCard";

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
                        <ProjectCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default WorkPage;
