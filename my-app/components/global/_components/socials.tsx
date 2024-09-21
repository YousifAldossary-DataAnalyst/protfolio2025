"use client";

import { BsBook, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

import { FaProductHunt, FaWhatsapp } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useParams } from "next/navigation";

export default function () {
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="mx-auto flex flex-row items-center">
      <a
        href="https://github.com/YousifAldossary-DataAnalyst/"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsGithub className="text-lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/yousif-aldossary-604aa619b/"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsLinkedin className="text-lg" />
      </a>
      <a
        href="https://wa.me/+966556171075"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <FaWhatsapp className="text-lg" />
      </a>
      <a
        href="/contact"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <SiBuymeacoffee className="text-lg" />
      </a>
    </div>
  );
}
