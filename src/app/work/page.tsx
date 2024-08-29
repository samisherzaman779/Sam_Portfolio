"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: "This Amazon clone, built with HTML and CSS, replicates the original site's key sections. It showcases my ability to create clean, responsive designs while closely mirroring Amazon's layout.",
    stack: [{ name: "Html 5" }, { name: "Css 3"}],
    Image: "/amazon1.jpg",
    github: "https://github.com/samikhan1622/Amazon-Clone",
    live: "",
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description: "A full-stack Todo app built with MongoDB, where users can add tasks that are seamlessly saved in the database. This project demonstrates my ability to integrate front-end and back-end technologies, ensuring data persistence and a smooth user experience.",
    stack: [{ name: "Next.JS" }, { name: "Tailwind.css" }, { name: "Typescript"}, { name: "Node.JS" }, ],
    Image: "/todo1.jpg",
    github: "https://github.com/samikhan1622/ToDo-App",
    live: "https://to-do-app-fa1u.vercel.app/"
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'project 3',
    description: 'This portfolio showcases my work as a web developer, featuring projects that demonstrate my skills in front-end and back-end development. It highlights my ability to create responsive designs, build full-stack applications, and solve complex problems with clean, efficient code.',
    stack: [{ name: "Typescript"}, { name: "Tailwind.css" }, { name: "Next.JS" },  { name: "Node.JS" }, ],
    Image: "/portfolio1.jpg",
    live: "",
    github: ""
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'project 4',
    description: 'A dynamic e-commerce platform built with PostgreSQL, featuring secure user authentication, seamless product management, and efficient order processing. This project highlights my expertise in database integration, ensuring data integrity and a smooth shopping experience.',
    stack: [{ name: "Next.JS" }, { name: "Typescript",}, { name: "Tailwind.css" }, { name: "Node.JS" }, ],
    Image: "/store1.jpg",
    github: "https://github.com/samikhan1622/samstore",
    live: "https://samstore-peach.vercel.app/",
  },
];

const Work: React.FC = () => {
  const [projectt, setProjectt] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any; }) => {
    const currentIndex = swiper.activeIndex;
    setProjectt(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" } }}
      className="min-h-[80vh] py-12 xl:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12">
          <div className="flex-1 order-2 xl:order-none flex flex-col justify-between">
            <div className="flex flex-col gap-6 xl:gap-8 h-full">
              <div className="text-5xl xl:text-8xl font-extrabold text-transparent text-outline">
                {projectt.num}
              </div>
              <h2 className="text-2xl xl:text-4xl font-bold text-white capitalize">
                {projectt.category} project
              </h2>
              <p className="text-base xl:text-lg text-white/60">{projectt.description}</p>
              <ul className="flex flex-wrap gap-4">
                {projectt.stack.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {index !== projectt.stack.length - 1 && ","}
                  </li>
                ))}
              </ul> 
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                {projectt.live && (
                  <Link href={projectt.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group">
                          <BsArrowUpRight className="text-white text-xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projectt.github && (
                  <Link href={projectt.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group">
                          <BsGithub className="text-white text-xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 xl:relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[300px] xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projectt, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full flex items-center justify-center bg-primary">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={projectt.Image}
                        fill
                        className="object-cover"
                        alt="project pic"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtn 
                containerStyle="flex gap-2 absolute right-0 bottom-4 xl:bottom-0 z-20 w-full justify-center xl:w-auto xl:justify-start"
                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-between transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;

