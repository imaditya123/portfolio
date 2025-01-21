import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Rathore",
  initials: "AR",
  url: "https://www.imaditya.info/",
  avatarUrl:"",
  //   email: "imadityarathore@gmail.com",
  description:"Software Engineer with a passion for building innovative solutions and helping others. I love creating, learning, and sharing ideas.",
  designation: "Software Engineer",
  blog_url: "https://medium.com/@imadityarathore",
  summary:
    "I’m a software engineer passionate about Flutter and machine learning. With a diverse toolkit—Python, JavaScript, Flutter, AWS, and more—I love building things, learning new technologies, and sharing ideas.",
  contact: {
    email: "imadityarathore@gmail.com",
    tel: "+91-9667841848",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imaditya123",
        icon: Icons.github,

        navbar: true,
      },
      HuggingFace: {
        name: "HuggingFace",
        url: "https://huggingface.co/imaditya123",
        icon: Icons.HuggingFaceIcon,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imadityarathore",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/imaditya123",
        icon: Icons.x,

        navbar: true,
      },
      //   Youtube: {
      //     name: "Youtube",
      //     url: "https://dub.sh/dillion-youtube",
      //     icon: Icons.youtube,
      //     navbar: true,
      //   },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  work: [
    {
      company: "Wellsfargo",
      href: "https://www.wellsfargo.com/",
      badges: [],
      location: "Bangalore",
      title: "System Operation Engineer",
      logoUrl: "/images/wellsfargo.svg",
      start: "Aug 2023",
      end: "Present",
      description: "",
    },
    {
      company: "Nagarro",
      badges: [],
      href: "https://www.nagarro.com/",
      location: "Noida",
      title: "SDE Intern",
      logoUrl: "/images/nagarro.png",
      start: "January 2022",
      end: "July 2022",
      description:
        "Acquired proficiency in Python programming, with a focus on developing scalable and efficient applications. Gained a solid understanding of the Python frameworks like Django and Flask.",
    },
    {
      company: "Simplifii Labs",
      href: "https://simplifii.com/",
      badges: [],
      location: "Delhi",
      title: "SDE Intern",
      logoUrl: "/images/simplifii.jpeg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Spearheaded mobile app development projects using Flutter, React, and React Native, managing the entire lifecycle from concept to deployment and integrating third-party services to enhance functionality",
    },
  ],
  education: [
    {
      school: "ABES Engineering College",
      href: "https://abes.ac.in/",
      degree: "Bachelors in Computer Science",
      logoUrl: "/images/abes.jpg",
      start: "2018",
      end: "2022",
    },
    {
      school: "CRB Public School",
      href: "http://www.crbmainpuri.com/",
      degree: "Intermediate",
      logoUrl: "/images/crb.jpg",
      start: "",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
}as const;
