"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+966) 556 171 075",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ym-d@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Remote Work",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnwwwg2",
        "template_i8cux8b",
        formRef.current!,
        "TSug4OIOqdVzwrBgc"
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const onSubmitContact = () => {
    if(success) {
      return toast.success(
        "Thank you for reaching out! I'll get back to you soon."
      );
    }
    return toast.error("An error has occured! refresh and try again.");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-secondary/70 rounded-xl"
              onSubmit={sendEmail}
              ref={formRef}
            >
              <h3 className="text-4xl">Let's work together</h3>
              <p className="text-secondary-foreground/70 flex flex-col gap-4">
                Let's elevate your business idea. If you've explored the
                projects section, you'll see that Degrees offers multiple
                initiatives. This is a problem-solving approach designed
                specifically for the freelancing community in Saudi Arabia.
                <br />
                <span className="border border-secondary-foreground/20"></span>
                Want to hear more about the business approach.
                <b className="text-primary text-xl">
                  Please send me a message!
                </b>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="First Name"
                />
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input
                  type="phonenumber"
                  name="phonenumber"
                  placeholder="Phone Number"
                />
                <Input type="title" name="title" placeholder="your goal" />
              </div>
              <Select name="selected">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uxUi">UX/UI</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="businessDev">
                      Business Development
                    </SelectItem>
                    <SelectItem value="dataAnalyst">Data Analysis</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px] border border-secondary text-gray-600 dark:text-white"
                placeholder="Write your message"
                name="message"
              />
              <Button
                size="lg"
                className="max-w-40"
                onClick={() => onSubmitContact()}
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded md flex items-center justify-center bg-accent">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-secondary-foreground/70">
                        {item.title}
                      </p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
