import Socials from "./_components/socials";

const Footer = () => {
  return (
    <section className="">
      <div className="w-screen stick-bottom flex-col px-6 pt-14 pb-2 lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <a
              href="https://YousifAldossary.com"
              className="inline-block max-w-full"
            >
              Yousif Aldossary
            </a>
            <div className="mb-8 mt-6 flex flex-row">
              <Socials />
            </div>
          </div>
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">INTRODUCTION</div>
              <a
                href="/services"
                target="_blank"
                className="font-inter font-light "
              >
                What do I provide?
              </a>
              <a
                href="/projects"
                target="_blank"
                className="font-inter font-light "
              >
                My work
              </a>
              <a
                href="/resume"
                target="_blank"
                className="font-inter font-light "
              >
                Career
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full border-t-2 border-gray-800">
          <div>
            <p className="font-inter lg:text-center text-sm pt-2">
              © Copyright 2024.{" "}
              <a
                href="/terms"
                target="_blank"
                className="text-white/70 dark:text-muted"
              >
                Yousif Aldossary
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
