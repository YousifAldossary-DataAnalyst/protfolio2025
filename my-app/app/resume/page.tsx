"use client";
import { getYear } from "date-fns";
import { University } from "lucide-react";
import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPowerbi,
  SiPostcss,
  SiTableau,
  SiR3,
  SiApachehadoop,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/bg-gradient";

const about = {
  title: "About Me",
  description:
    "Motivated Analyst with a track record in data analytics and process mapping. Skilled in identifying business needs and developing solutions to enhance accuracy and efficiency.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yousif Aldossary",
    },
    {
      fieldName: "Age",
      fieldValue: getYear(new Date()) - 1992,
    },
    {
      fieldName: "Phone",
      fieldValue: "(+966) 556 171 075",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "ym-d@hotmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Saudi Arabian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available on demand",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English, A-Level German.",
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available on demand",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Results-driven professional specializing in data optimization, analysis, and process improvement. Experienced in dashboard development, data quality, and ETL management. Proficient in data governance, BI solutions, and data warehouse management, with a focus on streamlining operations and enhancing decision-making.",
  items: [
    {
      company: "Amer Salman Al-Omaiyri Co",
      position: "Database Analyst",
      duration: "11/2023 - Present",
    },
    {
      company: "Astro SA Startup",
      position: "Freelance Business Development",
      duration: "01/2023 - 10/2023",
    },
    {
      company: "Eastern Health Cluster",
      position: "Data Analyst in Population Health Management",
      duration: "01/2023 - 08/2023",
    },
    {
      company: "Yuvo/Zain Telecom",
      position: "Billings and Data Management",
      duration: "04/2022 - 10/2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Applied Data & ad-hoc Analytics, Big Data Application, Data Analytics & Management, and Business Intelligence. Developed techniques to observe, process, and interpret data.",
  items: [
    {
      institution: "MSc in Data Analytics",
      degree: "Data Analytics",
      duration: "09/2022 - 10/2024",
    },
    {
      institution: "Victoria University of Wellington.",
      degree: "B.Sc. in Geophysics",
      duration: "",
    },
  ],
};

const certifcation = {
  icon: "/assets/resume/cap.svg",
  title: "My certifications",
  description:
    "I have completed online courses to gain practical skills in data science, cloud computing, AI and analytics.",
  items: [
    {
      placement: "Coursera",
      title: "Google analytics",
    },
    {
      placement: "Coursera",
      title: "Practical Data Science on the AWS Cloud",
    },
    {
      placement: "FutureX",
      title: "Amazon Academy Program",
    },
    {
      placement: "Udemy",
      title: "Web Development, Data processing and AI Courses",
    },
  ],
};

const skillsDev = {
  title: "My Development Skills",
  description:
    "Experienced in web development and design, creating responsive websites. Skilled in building dynamic, efficient interfaces with a strong grasp of front-end and back-end principles.",
  SkillsetDev: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    { icon: <SiSass />, name: "Sass" },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaFigma />,
      name: "Figma UI/UX",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <SiPostcss />,
      name: "Postcss",
    },
    {
      icon: <SiReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

const skillsDB = {
  title: "My Data Analytical skills",
  description:
    "I have strong data analytics skills, including collecting, interpreting, and analyzing complex datasets to drive process improvements and support decision-making.",
  SkillsetDev: [
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaDatabase />,
      name: "Big Data",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiPowerbi />,
      name: "PowerBI",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "Microsoft sql server",
    },
    {
      icon: <SiTableau />,
      name: "Tableau",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaFileExcel />,
      name: "Excel",
    },
    {
      icon: <SiR3 />,
      name: "R",
    },
    {
      icon: <SiApachehadoop />,
      name: "Hadoop",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        tranisition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto flex flex-col xl:flex-none">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-fit bg-transparent">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifcation">Certifications</TabsTrigger>
            <TabsTrigger value="devSkills">Dev Skills</TabsTrigger>
            <TabsTrigger value="dbSkills">DB Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="mix-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-secondary-foreground/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <CardContainer className="inter-var" >
                          <CardBody
                            key={index}
                            className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <CardItem
                              as="span"
                              translateZ="50"
                              className="text-primary"
                            >
                              {item.duration}
                            </CardItem>
                            <CardItem
                              as="h3"
                              translateZ="50"
                              className="text-xl max-w-[360px] min-h-[80px] text-center xl:text-left"
                            >
                              {item.position}
                            </CardItem>
                            <CardItem
                              as="div"
                              translateZ="50"
                              className="flex items-center gap-3"
                            >
                              <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                              <p className="text-accent-foreground/70">
                                {item.company}
                              </p>
                            </CardItem>
                          </CardBody>
                        </CardContainer>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-secondary-foreground/70 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <CardContainer className="inter-var">
                          <CardBody
                            key={index}
                            className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <CardItem
                              as="span"
                              translateZ="50"
                              className="text-primary"
                            >
                              {item.duration}
                            </CardItem>
                            <CardItem
                              as="h3"
                              translateZ="50"
                              className="text-xl max-w-[360px] min-h-[80px] text-center xl:text-left"
                            >
                              {item.degree}
                            </CardItem>
                            <CardItem
                              as="div"
                              translateZ="50"
                              className="flex items-center gap-3"
                            >
                              <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                              <p className="text-accent-foreground/70">
                                {item.institution}
                              </p>
                            </CardItem>
                          </CardBody>
                        </CardContainer>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="certifcation" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certifcation.title}</h3>
                <p className="max-w-[600px] text-secondary-foreground/70 mx-auto xl:mx-0">
                  {certifcation.description}
                </p>
                <ScrollArea className="h-[400px] p-4">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifcation.items.map((item, index) => {
                      return (
                        <CardContainer className="inter-var">
                          <CardBody
                            key={index}
                            className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <CardItem
                              as="h3"
                              translateZ="50"
                              className="text-xl max-w-[360px] min-h-[80px] text-center xl:text-left"
                            >
                              {item.placement}
                            </CardItem>
                            <CardItem
                              as="div"
                              translateZ="50"
                              className="flex items-center gap-3"
                            >
                              <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                              <p className="text-accent-foreground/70">
                                {item.title}
                              </p>
                            </CardItem>
                          </CardBody>
                        </CardContainer>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="devSkills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skillsDev.title}</h3>
                  <p className="max-w-[600px] text-secondary-foreground/70 mx-auto xl:mx-0">
                    {skillsDev.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skillsDev.SkillsetDev.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-primary transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="dbSkills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skillsDB.title}</h3>
                  <p className="max-w-[600px] text-secondary-foreground/70 mx-auto xl:mx-0">
                    {skillsDB.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skillsDB.SkillsetDev.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-primary transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-secondary-foreground/70 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-6 max-w-[620px] mx-auto xl:mx-0 py-4">
                  {about.info.map((item, index) => {
                    return (
                      <BackgroundGradient className="rounded-[22px] h-full w-full py-4 px-2 xl:py-0 xl:px-0 xl:p-4 bg-white dark:bg-zinc-900">
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-secondary-foreground/70">{item.fieldName}:</span>
                          <span className="text-md">{item.fieldValue}</span>
                        </li>
                      </BackgroundGradient>
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
