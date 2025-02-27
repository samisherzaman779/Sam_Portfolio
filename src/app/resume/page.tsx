"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiShadcnui,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiAdobeillustrator,
  SiLangchain,
  SiOpenai,
  SiGit,
  SiGithub,
  SiFastapi,
  SiVercel,
  SiNpm,
} from "react-icons/si";

// about data
const about = {
  title: "About Me",
  Description:
    "Hello, My Name is Sami Sherzaman. And i'm a passionate Web Developer, Crafting efficient code and innovative solutions, I am a software developer dedicated to turning ideas into impactful digital experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sami Sherzaman",
    },
    {
      fieldName: "Phone",
      fieldValue: "+92-30660-39949",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Sami Sherzaman",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email",
      fieldValue: "samisherzaman779@gmail.com",
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Availble",
    },
    {
      fieldName: "Langauges",
      fieldValue: "Urdu,English,Punjabi",
    },
  ],
};

// Experience Data
const experience = {
  Icon: "/assets/Resume.jpg",
  title: "My Experience",
  Description:
    "i'm passionate about coding, exploring new technologies, and collaborating on exciting projects. Let's build something amazing together!.",
  items: [
    {
      company: "Piaic",
      position: "Full Stack Develpor",
      duration: "2024 - Present",
    },
    {
      company: "TechHunt-Solutions-Inc",
      position: "Front-End Develpor Intern",
      duration: "2023 - Present",
    },
    {
      company: "Piaic",
      position: "Artificial Inteligence Startup",
      duration: "2024 - Present",
    },
    {
      company: "TechHunt-Solutions-Inc",
      position: "Full Stack Develpor",
      duration: "2024 - Present",
    },
    {
      company: "Fiverr & Upwork",
      position: "Freelancing",
      duration: "2024 - Present",
    },
  ],
};

// Education Data
const Education = {
  Icon: "/assets/Resume.jpg",
  title: "My Education",
  Description:
    "I completed my basic education at AlHidaya School, where I developed a strong understanding of foundational subjects. After that, I began focusing on web development and software technologies through self-study and online courses. Currently, I am a web developer, continuously enhancing my skills in the field of software development & Artifical Inteligence.",
  items: [
    {
      institution: "Piaic",
      degree: "Full Stack Web Develpor",
      duration: "2023 - Present",
    },
    {
      institution: "Online Course Platform",
      degree: "Front-End Track",
      duration: "2023",
    },
    {
      institution: "Piaic",
      degree: "AI (Artificial Inteligence)",
      duration: "2024 - Present",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2022 - Present",
    },
    {
      institution: "School",
      degree: "Matriculation",
      duration: "2017 - 2019",
    },
  ],
};

// skills data
const skills = {
  title: "MY Skills",
  Description:
    "i'm passionate about coding, exploring new technologies, and collaborating on exciting projects. Let's build something amazing together!",
  skillsList: [
    {
      Icon: <FaHtml5 />,
      name: "Html",
    },
    {
      Icon: <FaCss3 />,
      name: "Css3",
    },
    {
      Icon: <FaJs />,
      name: "JavaScript",
    },
    {
      Icon: <FaReact />,
      name: "React.Js",
    },
    {
      Icon: <FaPython />,
      name: "Python",
    },
    {
      Icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      Icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      Icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      Icon: <SiShadcnui />,
      name: "Shadcnui",
    },
    {
      Icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      Icon: <SiGit />,
      name: "Git",
    },
    {
      Icon: <SiGithub />,
      name: "GitHub",
    },
    {
      Icon: <SiFastapi />,
      name: "Fastapi",
    },
    {
      Icon: <SiVercel />,
      name: "Vercel",
    },
    {
      Icon: <SiNpm />,
      name: "Npm",
    },
    {
      Icon: <SiPostgresql />,
      name: "POstgresSQL",
    },
    {
      Icon: <SiMongodb />,
      name: "MongoDb",
    },
    {
      Icon: <SiAdobeillustrator />,
      name: "Artificial Inteligence",
    },
    {
      Icon: <SiLangchain />,
      name: "LangChain",
    },
    {
      Icon: <SiOpenai />,
      name: "LLM's",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto p-4 ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w[380px] mx-auto xl:mx-0">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left px-3 ">
                <h3 className="text-4xl font-bold text-accent underline">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.Description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((Item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{Item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {Item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 mt-2">{Item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold text-accent underline">
                  {Education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Education.Description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Education.items.map((Item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{Item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {Item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{Item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-accent underline">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.Description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.Icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipTrigger>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent underline">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((Item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-2 sm:gap-4"
                      >
                        <span className="text-white/60 underline cursor-pointer break-words">
                          {Item.fieldName}
                        </span>
                        <span className="text-xl underline cursor-pointer break-words">
                          {Item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
