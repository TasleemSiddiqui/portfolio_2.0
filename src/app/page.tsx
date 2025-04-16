import dynamic from 'next/dynamic';
import Image from "next/image";
import { navItems } from "@/data/data";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const FloatingNav = dynamic(() => import("./components/ui/Floating-navbar"), { ssr: false });
const Grid = dynamic(() => import("./components/Grid"), { ssr: false });
const RecentProject = dynamic(() => import("./components/RecentProject"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonials"), { ssr: false });
const Experience = dynamic(() => import("./components/Experience"), { ssr: false });
const Methodology = dynamic(() => import("./components/Methodology"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden justify-center items-center mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Testimonials />
        <Experience />
        <Methodology />
        <Footer />
      </div>
    </main>
  );
}
