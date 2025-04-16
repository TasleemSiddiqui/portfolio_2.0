"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const Methodology = () => {
  return (
    <section >
      <div className="py-20 w-full">
        <h1 className="heading">
          Working&nbsp;
          <span className="text-purple">Methodology</span>
        </h1>
      </div>

      <div className="lg:py-20 md:py-10 py-5 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto">
        {/* 1st Item */}
        <Card
          title="Planning and Research"
          description="Begin by defining the goals of the website, such as whether it will 
          serve as a business portal, personal portfolio, blog, or e-commerce platform. Identify the target audience
           to understand their needs and preferences.
           Research competitors to gather ideas and identify opportunities for differentiation. Develop a sitemap 
          to outline the structure and content hierarchy, ensuring a clear organization of the site's pages."
          icon={<AceternityIcon stage={1} />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        {/* 2nd item */}
        <Card
          title="Design and Development"
          description="Proceed with designing wireframes to establish the layout and user 
        experience of each page. Choose the appropriate technology stack, such as HTML/CSS, 
        JavaScript, or a CMS like WordPress, to build the website. Ensure that the design is 
        responsive to accommodate various devices. Integrate content, including text, images,
         and videos, while following SEO best practices to enhance search engine visibility."
          icon={<AceternityIcon stage={2} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        {/* 3rd item */}
        <Card
          title="Testing and Launch"
          description="In the testing and launch phase, conduct comprehensive testing across different 
        browsers and devices to ensure compatibility and a smooth user experience. Address any bugs or issues
         identified during testing, such as broken links or formatting errors. Once the website is fully functional,
          deploy it to a live server. After launch,
         use analytics tools to monitor performance and gather feedback, making ongoing improvements as needed."
          icon={<AceternityIcon stage={3} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border cursor-pointer  border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem] lg:h-[35rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute duration-150 inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-100 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white md:text-3xl text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="md:text-sm text-xs opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ stage }: { stage: number }) => {
  return (
    <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-flex overflow-hidden rounded-lg p-[1px]  ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {"Stage" + stage}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Methodology;
