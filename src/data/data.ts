export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working On Generative AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Poshak-e-chaman",
    des: "**Poshak-e-Chaman** celebrates elegance and tradition with a modern twist. Our clothing line features exquisite designs and premium fabrics, blending timeless style with contemporary flair. Discover sophisticated attire that reflects the beauty of cultural heritage and enhances your wardrobe with Poshak-e-Chaman.",
    img: "/PC.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/redux-logo-svgrepo-com.svg",
    ],
    link: "https://e-commerce-mocha-eta-86.vercel.app/",
  },
  {
    id: 2,
    title: "Panaverse-Dao-Clone",
    des: "Panaverse-DAO Clone is a cutting-edge decentralized platform inspired by the original Panaverse DAO. It leverages blockchain technology to offer transparent, community-driven governance and decision-making. Designed for enthusiasts and developers alike, our clone provides an open, scalable ecosystem where users can collaborate, innovate, and shape the future of decentralized applications with ease. Join us to be part of a thriving, digital frontier!",
    img: "/panaverse.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://panaverse-dao-clone-beta.vercel.app/",
  },
  {
    id: 3,
    title: "Shoe Care jordan",
    des: "Shoe Care Jordan offers premium care products designed to keep your Nike shoes looking and feeling their best. From cleaning solutions to protective sprays, our range ensures your favorite kicks stay fresh, stylish, and ready for any adventure. Trust us to extend the life of your Nike footwear with expert care and attention.",
    img: "/jordan.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.svg"],
    link: "https://shoecarejordan.vercel.app/",
  },
  {
    id: 4,
    title: "Zyck Technology",
    des: "ZYCK Technology designs and develops professional webs and logos to enhance the appearance and brand identity. Behind this are experts encompassed by a group creating beautiful, visually stimulating designs and easy-to-navigate websites. They would aid your brand in having increased presence and engagement while managing to grow the business into the highly competitive world of digital marketing.",
    img: "/zyck-technology.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.svg"],
    link: "https://www.zycktechnology.com/",
  },
  {
    id: 5,
    title: "One Click digital",
    des: "ZYCK Technology designs and develops professional webs and logos to enhance the appearance and brand identity. Behind this are experts encompassed by a group creating beautiful, visually stimulating designs and easy-to-navigate websites. They would aid your brand in having increased presence and engagement while managing to grow the business into the highly competitive world of digital marketing.",
    img: "/oneClickDigital.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.svg"],
    link: "https://oneclickdigitals.com/",
  },
];

interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Lee",
    title: "CTO at Innovate Solutions",
    quote:
      "Working with this Next.js expert transformed our web platform. The performance improvements were immediate and impressive!",
  },
  {
    name: "James Parker",
    title: "Lead Developer at TechVentures",
    quote:
      "Their Next.js skills are top-notch. The project was delivered ahead of schedule with exceptional attention to detail.",
  },
  {
    name: "Emma Johnson",
    title: "Product Manager at BrightWeb",
    quote:
      "The Next.js development they provided was exactly what we needed. The user experience on our site has never been better!",
  },
  {
    name: "Michael Chen",
    title: "CEO of FutureTech",
    quote:
      "I'm amazed by the results. The Next.js implementation was smooth and efficient, exceeding all our expectations.",
  },
  {
    name: "Olivia Martinez",
    title: "UX Designer at Creatify",
    quote:
      "Their expertise in Next.js was evident throughout the project. Our website's performance and scalability have significantly improved.",
  },
];


export const workExperience = [
  {
    id: 0,
    title: "Next.JS Developer - insoftIt",
    desc: "As a Next.js Developer at InsoftIT, I contributed to building fast, scalable, and SEO-optimized web applications. My role involved working with modern tools like Tailwind CSS, ShadCN UI, and integrating powerful backend solutions to deliver seamless user experiences",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Frontend Developer - Upwork",
    desc: "Developed and optimized frontend solutions for various clients, focusing on responsive design and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - Fiverr",
    desc: "Provided custom frontend development services, including website and web application development, with a focus on client satisfaction and timely delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer - LinkedIn",
    desc: "Worked on various frontend development projects, collaborating with teams and stakeholders to build efficient and scalable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Social Media Executive - Envision International",
    desc: "Managed social media campaigns and strategies, enhanced brand presence and engagement across multiple platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/TasleemSiddiqui"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/TasleemSiddiqui"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammad-tasleem-7bb7a6250"
  },
];
