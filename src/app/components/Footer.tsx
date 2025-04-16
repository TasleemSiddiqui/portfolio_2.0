import { socialMedia } from "@/data/data";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black-100 lg:my-10 my-5 mb-10 relative" id="contact">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
      
      <div className="relative flex flex-col mx-auto p-4 pt-6 md:p-6 w-full text-center justify-center items-center gap-y-5">
        <h1 className="text-center lg:text-3xl text-white font-bold w-[50vw]">
          Bring Your Ideas to Life with{" "}
          <span className="text-purple">Blazing-Fast Next.js Websites</span>{" "}
          &#8208; Let&apos;s Build Something Amazing Together!
        </h1>
        <a
          href="mailto:siddiquitasleem5@gmail.com"
          className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_50%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get Started!
          </span>
        </a>
      </div>
      <div className="relative flex lg:flex-row flex-col md:justify-between items-center">
        <p className="text-white-100 md:text-sm text-xs pt-4">
          &copy; All rights are reserved for Muhammad Tasleem Siddiqui &#124;
          2024{" "}
        </p>

        <div className="flex flex-row-reverse justify-center items-center">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="bg-black-200 mx-2 mt-3 rounded-xl p-3 overflow-hidden h-fit w-fit"
            >
              <a href={item.link} target="_blank">
                <Image
                  src={item.img}
                  height={50}
                  width={50}
                  alt="social Icons"
                  className="h-5 gap-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
