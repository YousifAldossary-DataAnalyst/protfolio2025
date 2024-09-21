"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/global/mode-toggle";

import { redirect, useParams, usePathname, useRouter } from "next/navigation";
import NavButton from "./nav-button";

import { useMedia, useSearchParam } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Home,
  Menu,
  Contact2Icon,
  ProjectorIcon,
  File,
  HeartHandshakeIcon,
} from "lucide-react";

const routes = [
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/services",
    icon: HeartHandshakeIcon,
    label: "Services",
  },
  {
    href: "/resume",
    icon: File,
    label: "Resume",
  },
  {
    href: "/projects",
    icon: ProjectorIcon,
    label: "Projects",
  },
  {
    href: "/contact",
    icon: Contact2Icon,
    label: "Contact",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const isMobile = useMedia("(max-width: 1130px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <div className="p-4 flex items-center justify-between relative border ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button
                variant="outline"
                className="font-normal m-6 bg-primary/20 hover:bg-primary/60 hover:text-white border-none 
          focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-primary/90 
          focus:bg-primary/90 transition"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-2">
              <nav className="flex flex-col gap-y-2 pt-6">
                {routes.map((route) => (
                  <Button
                    key={route.href}
                    variant={route.href === pathName ? "secondary" : "ghost"}
                    onClick={() => onClick(route.href)}
                    className="w-full justify-start text-primary/60 hover:text-primary focus:text-primary"
                  >
                    <route.icon className="mr-4 lg:hidden" />
                    {route.label}
                  </Button>
                ))}
                <div className="flex items-center justify-center pt-2 xl:flex-none xl:pt-0">
                  <Link href="/contact">
                    <Button onClick={() => onClick("/contact")}>Hire Me</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
            <aside className="flex flex-row gap-6 items-center">
              <ModeToggle />
            </aside>
          </Sheet>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="p-4 flex items-center justify-between relative border ">
        <aside className="flex items-center ">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Yousif<span className="text-primary">.</span>
            </h1>
          </Link>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top[50%] transform translate-x-[-50%] ">
          <ul className="flex items-center justify-center gap-4 list-none">
            <li className="flex gap-2">
              {routes.map((route) => (
                <NavButton
                  key={route.href}
                  href={route.href}
                  label={route.label}
                  isActive={pathName === route.href}
                />
              ))}
            </li>
          </ul>
        </nav>
        <aside className="flex gap-6 items-center">
          <ModeToggle />
          <div className="flex items-center justify-center pt-2 xl:flex-none xl:pt-0">
            <Link href="/contact">
              <Button onClick={() => onClick("/contact")}>Hire Me</Button>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navigation;
