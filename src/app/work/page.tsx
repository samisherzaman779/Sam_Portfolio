"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "This Amazon clone, built with HTML and CSS, replicates the original site's key sections. It showcases my ability to create clean, responsive designs while closely mirroring Amazon's layout.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    Image: "/amazon1.jpg",
    github: "https://github.com/samikhan1622/Amazon-Clone",
    live: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "A full-stack Todo app built with MongoDB, where users can add tasks that are seamlessly saved in the database. This project demonstrates my ability to integrate front-end and back-end technologies, ensuring data persistence and a smooth user experience.",
    stack: [
      { name: "Next.JS" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
      { name: "Node.JS" },
      { name: "MongoDB" },
    ],
    Image: "/todo1.jpg",
    github: "https://github.com/samikhan1622/ToDo-App",
    live: "https://to-do-app-fa1u.vercel.app/",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "This portfolio showcases my work as a web developer, featuring projects that demonstrate my skills in front-end and back-end development. It highlights my ability to create responsive designs, build full-stack applications, and solve complex problems with clean, efficient code.",
    stack: [
      { name: "Typescript" },
      { name: "Tailwind.css" },
      { name: "Next.JS" },
      { name: "Node.JS" },
    ],
    Image: "/portfolio1.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description:
      "A dynamic e-commerce platform built with PostgreSQL, featuring secure user authentication, seamless product management, and efficient order processing. This project highlights my expertise in database integration, ensuring data integrity and a smooth shopping experience.",
    stack: [
      { name: "Next.JS" },
      { name: "Typescript" },
      { name: "Tailwind.css" },
      { name: "Node.JS" },
      { name: "PostgreSQL" },
    ],
    Image: "/store1.jpg",
    github: "https://github.com/samikhan1622/samstore",
    live: "https://samstore-peach.vercel.app/",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "This portfolio showcases my work as a web developer, featuring projects that demonstrate my skills in front-end and back-end development. It highlights my ability to create responsive designs, build full-stack applications, and solve complex problems with clean, efficient code.",
    stack: [
      { name: "Next.JS" },
      { name: "Typescript" },
      { name: "Tailwind.css" },
      { name: "Node.JS" },
    ],
    Image: "/portfolio2.jpg",
    github: "https://github.com/samisherzaman779/My-Portfolio",
    live: "https://my-portfolio-omega-sepia-94.vercel.app/",
  },
  {
    num: "06",
    category: "fullstack",
    title: "project 6",
    description:
      "A modern blog built with Next.js, TypeScript, Sanity CMS, and AI stacks, delivering fast, scalable, and seamless content. It explores the latest in AI, tech, and innovations, with a clean design and effortless content management for fresh, engaging updates.",
    stack: [
      { name: "Next.JS" },
      { name: "Typescript" },
      { name: "Tailwind.css" },
      { name: "Node.JS" },
      { name: "Sanity" },
      { name: "AI - ChatGPT" },
    ],
    Image: "/my-blog-site.jpg",
    github: "https://github.com/samisherzaman779/my-blog-site",
    live: "https://my-blog-site-lake.vercel.app/",
  },
];

const Work = () => {
  const [projectt, setProjectt] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProjectt(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[100%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projectt.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                {projectt.category} project
              </h2>
              <p className="text-white/60">{projectt.description}</p>
              <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
                {projectt.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== projectt.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={projectt.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projectt.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projectt, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={projectt.Image}
                        fill
                        className="object-contain"
                        alt="project pic"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
