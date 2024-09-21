"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-lg">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Make it easy to Freelance.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            The goal is to reduce the unemployment rate by helping companies to outsource from within the country rather than elsewhere globally. 
          </p>
        </div>
        <Image
          src="/assets/work/thumbnail02.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-32 lg:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Management, Content, Sales, and Market place.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          These are the essential needs for any freelancer to get started.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-lg">
          <h2 className="max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            In the last 2 years, I've worked alongside Astro to create this approach.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            The goal is to create 4 websites to cover the basic needs. 3/4 websites are 75% done. Only the most important one remain "Micro job market place".
          </p>
        </div>
        <Image
          src="/assets/work/thumbnail01.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-32 lg:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
