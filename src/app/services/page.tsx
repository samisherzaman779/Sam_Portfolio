"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";
import { delay, motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: "Web Development",
    description: 'I offer comprehensive web development services, from creating visually appealing websites to building robust, full-stack applications. My expertise includes responsive design, efficient coding practices, and seamless integration of front-end and back-end technologies to deliver a user-friendly and impactful web experience.',
    href: ''
  },
  {
    num: '02',
    title: "UI/UX Design",
    description: 'I specialize in crafting intuitive and engaging user interfaces that enhance user experience. My approach combines aesthetic design with user-centered principles to create visually appealing and functional designs that meet your project’s needs.',
    href: ''
  },
  {
    num: '03',
    title: "Logo Design",
    description: 'I create unique and memorable logos that effectively represent your brand’s identity. My designs focus on blending creativity with strategic thinking to deliver a logo that stands out and communicates your brand’s essence..',
    href: ''
  },
  {
    num: '04',
    title: "SEO",
    description: 'I provide tailored SEO strategies to enhance your website’s visibility and search engine ranking. My approach includes keyword research, on-page optimization, and performance tracking to drive organic traffic and improve your online presence.',
    href: ''
  },
  {
    num: '05',
    title: "Web Scraping",
    description: 'I provide efficient and reliable web scraping services to extract and deliver structured data from websites. Whether for market research, e-commerce, or data analysis, my custom solutions ensure accurate and timely results tailored to your needs.',
    href: ''
  },
  {
    num: '06',
    title: "AI Solutions",
    description: 'I provide cutting-edge AI solutions to help businesses automate tasks, analyze data, and improve decision-making. From machine learning models to intelligent chatbots, my services are tailored to meet your specific needs and drive innovation in your workflows.',
    href: ''
  },
  {
    num: '07',
    title: "Chatbots Development",
    description: 'I specialize in creating custom chatbots tailored to your business needs. Whether for customer support, lead generation, or automating tasks, I design intelligent and user-friendly chatbots that seamlessly integrate with your platforms, ensuring 24/7 engagement and efficiency.',
    href: ''
  },
  {
    num: '08',
    title: "Custom ChatGPT's Development",
    description: 'I specialize in creating custom chatbots tailored to your business needs. Whether for customer support, lead generation, or automating tasks, I design intelligent and user-friendly chatbots that seamlessly integrate with your platforms, ensuring 24/7 engagement and efficiency.',
    href: ''
  },
];



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 gap-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{service.num}</div>
                <Link href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
              >{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;