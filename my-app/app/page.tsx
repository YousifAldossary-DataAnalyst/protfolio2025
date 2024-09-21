import Socials from "@/components/global/_components/socials";
import { CardStackDemo } from "@/components/global/card-stacks";
import HireMe from "@/components/global/hire-me";
import Photo from "@/components/global/photo";
import States from "@/components/global/states";
import { WobbleCardDemo } from "@/components/global/wobble-card-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section className="h-full pt-4 flex flex-col gap-16">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-2 pb-8 xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start gap-8 mb-9 order-2 xl:order-none">
            <span className="text-xl text-muted-foreground">
              Data Analyst & Full-stack Developer
            </span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-green-500">Yousif Aldossary</span>
            </h1>
            <p className="max-w-[500px] text-muted-foreground">
              I excel at crafting elegant digital exepriences and I'm proficient
              in various programming languages. <br /> As well as data
              collections, analysing, processing, and creating dashboards.
            </p>
            <div className="flex flex-col justify-center items-center gap-8 xl:flex-row xl:gap-2 w-fit">
              <Link href='https://drive.google.com/file/d/1-gfDSK_qxshFm88g2fWdFfSXtTGj-PpN/view?usp=sharing'
              target="_blank"
              download='cv'>
                <Button
                  className="uppercase flex items-center gap-2 rounded-3xl"
                  size="lg"
                >
                  <span>Download CV</span>
                  <FaFileDownload className="text-xl" />
                </Button>
              </Link>
              <Socials />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <States />
      <CardStackDemo />
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between lg:items-start gap-16 pt-2 pb-8 xl:pt-8 xl:pb-24">
          <h1 className="h2 md:text-left">
            Current Project:{" "}
            <span className="text-green-500">
              Freelancing within Saudi Arabia
            </span>
          </h1>
          <WobbleCardDemo />
          <HireMe />
        </div>
      </div>
    </section>
  );
}
