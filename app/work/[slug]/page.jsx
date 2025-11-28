// app/work/[slug]/page.jsx
"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaArrowLeft } from "react-icons/fa";


import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/lib/workData";

const ProjectPage = ({ }) => {
    const params = useParams();
    const slug = params?.slug;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="min-h-[80vh] flex items-center justify-center">
                <p className="text-white/60">Proyecto no encontrado.</p>
            </section>
        );
    }

    // ahora el estado representa el SLIDE actual del proyecto
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const currentSlide = project.slides[currentSlideIndex];

    const handleSlideChange = (swiper) => {
        const idx = swiper?.realIndex ?? 0;
        setCurrentSlideIndex(idx);
    };

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
                {/* Botón back */}
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl 
                                bg-accent hover:bg-accent-hover 
                                text-primary transition-all"
                >
                    <FaArrowLeft />
                    Back
                </Link>
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    {/* TEXTO (lado izquierdo) */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[10px]">
                            {/* número y categoría */}
                            <div className="group flex flex-col gap-[15px]">
                                <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                                    {currentSlide.id}
                                </div>

                                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.title}
                                </h2>

                                <div className='border-b border-white/20 w-full'></div>

                                {/* título del slide + descripción del slide */}
                                <h3 className="text-2xl font-semibold text-accent">
                                    {currentSlide.title}
                                </h3>

                                {/* <p className="text-white/60">{currentSlide.description}</p> */}
                                {Array.isArray(currentSlide.description) ? (
                                    <ul className="mt-2 space-y-2 text-white/60">
                                        {currentSlide.description.map((item, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                                                <span>{item.description_i}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-white/60">{currentSlide.description}</p>
                                )}
                            </div>

                            {/* stack */}
                            {/* <ul className="flex flex-wrap gap-2">
                                {project.stack.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm px-3 py-1 rounded-full border border-accent/40 text-accent"
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul> */}

                            {/* separador */}
                            <div className="border-b border-white/20" />

                            {/* botones */}
                            <div className="flex items-center gap-4">
                                {/* live */}
                                {project.live && (
                                    <Link href={project.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize bg-white/80 text-primary p-2 rounded-xl">
                                                        Live project
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}

                                {/* github */}
                                {project.github && (
                                    <Link href={project.github} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize bg-white/80 text-primary p-2 rounded-xl">
                                                        Github repository
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SLIDER (lado derecho) */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                            loop={true}
                        >
                            {project.slides.map((slide, index) => (
                                <SwiperSlide key={slide.id ?? index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={slide.image}
                                                fill
                                                className="object-fill group-hover:scale-105 transition-all duration-500"
                                                alt={slide.title}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* botones del slider, igual que antes */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none px-4 py-2"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full hover:scale-110"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectPage;
