"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[30rem] flex items-center justify-center w-full mb-20 md:mb-10">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-primary/10 text-emerald-700 dark:bg-primary/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Abdullah Rashed Albishi",
    designation: "Operations Senior Manager",
    content: (
      <p>
        Yousif Aldossary has been <Highlight>dedicated, fast learner, committed and proactive.</Highlight> {" "}
        He has shown passion towards BI field.
      </p>
    ),
  },
  {
    id: 1,
    name: "Munim Deen",
    designation: "Director, Disease Registries, EHC",
    content: (
      <p>
        “Yousif is <Highlight>a productive and reliable team member</Highlight> in an office full of experienced professionals. Also, <Highlight>his poise and communication skills set him apart</Highlight> 🙏” 
      </p>
    ),
  },
  {
    id: 2,
    name: "Ammar Mohammad Ajlan",
    designation: "Founder of Astro",
    content: (
      <p>
        "Yousif Aldossary. came up with
        <Highlight>3 iterations of various projects</Highlight> that could help the company grow in this order
        <Highlight>(Branding and Website services, Data analysis and analytics, and lastly F&B Developments)"</Highlight>
      </p>
    ),
  },
  {
    id: 3,
    name: "Amer Alomayri",
    designation: "Founder of Amer Alomari Logitics",
    content: (
      <p>
        “Yousif's technical expertise is impressive, but it's <Highlight>his communication and leadership skills that truly shine.</Highlight> 
        His knack for <Highlight>mentoring less experienced staff and working effectively</Highlight> in a team setting boosts overall productivity.”
      </p>
    ),
  },
];
