"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "UX/UI Design",
    description:
      "Creating intuitive, visually stunning, and user-friendly digital experiences that resonate with your audience. Improve the customer journeys.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Whether you're launching a new brand, expanding your e-commerce store, or need a custom web application, our expert developers are here to bring your vision to life.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Business Development for Food & Beverages",
    description:
      "A Free LazyWait POS app, for one branch valid for 1 year, business analysis, building strategies, sales guidelines, and many more.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Free Data Consultation",
    description:
      "You have data, and want me to look at it to advice you of what is best course of action. Feel free to get some consultation. Contact me over any questions. I'm always happy to help.",
    href: "/contact",
  },
];

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-primary hover:text-secondary-foreground transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded full group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-card-foreground group-hover:text-primary transition-all duration-500">{service.title}</h2>
                <p className="text-secondary-foreground/70">{service.description}</p>
                <div className="border-b border-primary w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
