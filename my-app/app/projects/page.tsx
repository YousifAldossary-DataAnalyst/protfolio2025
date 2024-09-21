"use client";
import React, { useState } from "react";
import { animate, delay, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "./_components/work-slide-btns";

const DevProjects = [
  {
    num: "01",
    category: "Full-stack",
    title: "Degrees Production",
    description:
      "A Multivendor B2B2B SaaS platform with unlimited funnel hosting, a website builder, and role-based access. Integrate with Stripe for subscriptions, add-on products, and custom checkouts while managing agencies and sub-accounts efficiently. Custom dashboards and real-time metrics.",
    link: "https://degreesproduction.vercel.app/",
    github: "https://github.com/YousifAldossary-DataAnalyst/degrees-production",
    stack: [{ name: "Next.js" }],
    image: "/assets/work/thumbnail01.png",
    status: "90%",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "Degrees AI",
    description:
      "An AI sales rep chatbot that automates bookings and payments, usable on any website with simple code. Offers real-time chat, smart question linking, and integrates with Stripe. Features include a customizable interface, white-labeling, simple email marketing, a calendar widget, and a financial dashboard.",
    link: "https://degreesai.vercel.app/",
    github: "https://github.com/YousifAldossary-DataAnalyst/degrees-ai",
    stack: [{ name: "Next.js" }],
    image: "/assets/work/thumbnail02.png",
    status: "75%",
  },
  {
    num: "03",
    category: "Full-stack",
    title: "Degrees CG",
    description:
      "A versatile content generation platform featuring a whiteboard for visual brainstorming, a podcast generator, and an image generator with canvas for editing. Create engaging articles, blogs, and visuals with an all-in-one content generator to streamline your content strategy.",
    link: "https://degrees-cg.vercel.app/",
    github: "https://github.com/YousifAldossary-DataAnalyst/degrees_cg",
    stack: [{ name: "Next.js" }],
    image: "/assets/work/thumbnail03.png",
    status: "Under Development",
  },
  {
    num: "04",
    category: "Full-stack",
    title: "PennyBox",
    description:
      "Finance SaaS Platform with ability to track your income and expenses, categorize transactions and assign them to specific accounts, as well as how to import transactions using a CSV file, and connect to your bank account using Plaid.",
    link: "https://pennybox.vercel.app/",
    github: "https://github.com/YousifAldossary-DataAnalyst/Finance_Web",
    stack: [{ name: "Next.js" }],
    image: "/assets/work/thumbnail04.png",
    status: "Completed",
  },
];

const DbProjects = [
  {
    num: "01",
    category: "Business Cases",
    title: "Real-World Data Analytics Application",
    description:
      "Understand the key aspects and challenges of machine learning interpretability, learn how to overcome them with interpretation methods, and leverage them to build fairer, safer, and more reliable models.",
    link: "https://colab.research.google.com/drive/1EKvhh3CvbKwTDUmrcCsY6VuWu3sAscld?usp=sharing",
    stack: [{ name: "Python" }],
    image: "/assets/work/thmb01.png",
  },
  {
    num: "02",
    category: "Thesis study",
    title: "Does stress affect students exam results.",
    description:
      "This study examines how stress affects academic performance. Stress indicators such as heart rate, electrodermal activity and skin temperature using wearable devices. These metrics enabled a machine learning model to predict exam outcomes with 91.89% recall and accuracy, and 92.52% precision",
    link: "https://github.com/YousifAldossary-DataAnalyst/studentExamStress",
    stack: [{ name: "Python" }],
    image: "/assets/work/thmb02.png",
  },
  {
    num: "03",
    category: "BMC Public Health",
    title:
      "The perception of genetic diseases and premarital screening in the central region of Saudi Arabia.",
    description:
      "Consanguineous marriages (CMs) are prevalent in the Middle East, particularly in Saudi Arabia, leading to an increase in autosomal recessive genetic diseases. This study surveyed 2,057 participants to assess awareness of genetic diseases, perceptions of PMSTs, and attitudes toward genetic counseling in reducing CM risks.",
    link: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-19029-0",
    stack: [
      { name: "SQL" },
      { name: "R" },
      { name: "Excel" },
      { name: "PowerBI" },
    ],
    image: "/assets/work/thmb03.png",
  },
  {
    num: "04",
    category: "Website Analysis",
    title: "Amazon Web-Scrapping",
    description:
      'Testing a new data analytics method on live data from Amazon. One file tracks T-shirt price drops, notifying users when items hit their desired discount. The other analyzes webpage reviews and availability, using text analytics to identify keywords in reviews, categorizing them from 1-star (e.g., "bad") to 5-star (e.g., "high quality").',
    link: "https://github.com/YousifAldossary-DataAnalyst/Amazon-Web-Scrapping",
    stack: [{ name: "Python" }],
    image: "/assets/work/thmb04.png",
  },
  {
    num: "05",
    category: "SQL",
    title: "Covid19 global cases",
    description:
      "Covid-19 has dominated the year 2020 and 2021. It was very difficult times where people got quarantined, sick, death and the discovery of the new vaccines. This project will cover vaccination and deaths caused by covid-19 mainly using basic SQL queries on SQL-Server and Tableau for visualisations.",
    link: "https://public.tableau.com/app/profile/yousif.aldossary/viz/Covid-19worldwideimpacct/Covid-19GlobalImpact",
    stack: [{ name: "SQL" }, { name: "Tablaeu" }],
    image: "/assets/work/thmb05.png",
  },
];

const Projects = () => {
  const [project, setProject] = useState(DevProjects[0]);
  const [dbProject, setDbProject] = useState(DbProjects[0]);

  const handleSlideChangeDev = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(DevProjects[currentIndex]);
  };

  const handleSlideChangeDB = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setDbProject(DbProjects[currentIndex]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
         <h3 className="text-4xl font-bold flex justify-center items-center pb-12 text-center xl:text-left">Web Development Top-4 Projects</h3>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold hover:text-primary">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 capitalize">
                  {project.title} project
                </h2>
                <p className="text-secondary-foreground/70">
                  {project.description}
                </p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li className="text-xl text-primary/50" key={index}>
                        {item.name} {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-secondary-foreground/70 text-lg md:text-xl">Status: {project.status}</p>
                <div className="border border-secondary-foreground/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-foreground/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-secondary-foreground text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-foreground/5 flex justify-center items-center group">
                          <BsGithub className="text-secondary-foreground text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
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
                onSlideChange={handleSlideChangeDev}
              >
                {DevProjects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-accent">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt="preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSlideBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnsStyles="bg-primary/90 hover:bg-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <h3 className="text-4xl font-bold flex justify-center items-center pb-12 text-center xl:text-left">Data Analytics Top-5 Projects</h3>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold hover:text-primary">
                  {dbProject.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 capitalize">
                  {dbProject.category}
                </h2>
                <p className="text-secondary-foreground/70">
                  {dbProject.description}
                </p>
                <ul className="flex gap-4">
                  {dbProject.stack.map((item, index) => {
                    return (
                      <li className="text-xl text-primary/50" key={index}>
                        {item.name} {index !== dbProject.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-secondary-foreground/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={dbProject.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-foreground/5 flex justify-center items-center group">
                          <BsGithub className="text-secondary-foreground text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
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
                onSlideChange={handleSlideChangeDB}
              >
                {DbProjects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-accent">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt="preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSlideBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnsStyles="bg-primary/90 hover:bg-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
