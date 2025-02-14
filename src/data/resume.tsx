import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Rathore",
  initials: "AR",
  url: "https://www.imaditya.info/",
  avatarUrl: "",
  //   email: "imadityarathore@gmail.com",
  description:
    "Software Engineer with a passion for building innovative solutions and helping others. I love creating, learning, and sharing ideas.",
  designation: "Software Engineer",
  blog_url: "https://medium.com/@imadityarathore",
  summary:
    "I’m a software engineer passionate about Flutter and machine learning. With a diverse toolkit—Python, JavaScript, Flutter,and more—I love building things, learning new technologies, and sharing ideas.",
  skills: [
    "Python",
    "SQL",
    "Java",
    "Dart",
    "C++",
    "C#",
    "Javascript",
    "Typescript",
    "Git",
    "Flutter",
    "Pytorch",
    "Numpy",
    "Pandas",
    "tensorflow",
    "Node.js",
    "React",
    "Next.js",
    "Docker",
  ],
  contact: {
    email: "imadityarathore@gmail.com",
    tel: "+91-9667841848",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imaditya123",
        icon: Icons.github,
        new_tab: true,
        navbar: true,
      },
      HuggingFace: {
        name: "HuggingFace",
        url: "https://huggingface.co/imaditya123",
        icon: Icons.HuggingFaceIcon,
        new_tab: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imadityarathore",
        icon: Icons.linkedin,
        new_tab: true,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/imaditya123",
        icon: Icons.x,
        new_tab: true,
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
        url: "mailto:imadityarathore@gmail.com?subject=Hi%20There&message=Hi%20There",
        icon: Icons.email,
        new_tab: true,
        navbar: true,
      },
    },
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@imadityarathore",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  work: [
    {
      company: "Wellsfargo",
      href: "https://www.wellsfargo.com/",
      badges: [],
      location: "Bangalore",
      title: "System Operation Engineer",
      logoUrl: "/images/wellsfargo.svg",
      start: "Aug 2022",
      end: "Present",
      description:
        "Automated server configuration with Ansible reducing deployment time by 40%, enhanced monitoring efficiency by 35% using Python, optimized Unix server uptime by resolving performance bottlenecks, and earned recognition for presenting automation improvements.",
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
      start: "June 2020",
      end: "May 2021",
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
      title: "Vision Transformer",
      href: "https://github.com/imaditya123/Vision-transformer",
      dates: "Feb 2025",
      active: true,
      favorite: true,
      category: ["Machine Learning", "All Projects", "Python Projects"],
      description:
        "Vision Transformer is a Python-based deep learning project that implements transformer architectures for image recognition. It leverages attention mechanisms to process image patches, offering state-of-the-art performance on various image classification benchmarks.",
      technologies: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Deep Learning",
        "Transformers",
      ],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/Vision-transformer",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/images/vision-t.webp",
      video: "",
    },
    {
      title: "T-Translate",
      href: "https://github.com/imaditya123/T-translate",
      dates: "Jan 2025",
      active: true,
      favorite: true,
      category: ["Machine Learning", "All Projects", "Python Projects"],
      description:
        "T-Translate is a Transformer-based text generation model built from scratch using PyTorch. It follows the original Attention Is All You Need paper, implementing a custom Transformer architecture for text-to-text tasks such as machine translation or text completion.",
      technologies: ["Python", "NLP", "Deep Learning", "Transformers"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/T-translate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/t-translate.webp",
      video: "",
    },
    {
      title: "Tensor Grad",
      href: "https://github.com/imaditya123/tensor_grad",
      dates: "Jan 2025",
      active: true,
      favorite: true,
      category: ["ML Projects", "All Projects", "Python Projects"],
      description:
        "Tensor Grad is a lightweight Python library for automatic differentiation. Inspired by frameworks like PyTorch and TensorFlow, it allows users to compute gradients for machine learning models efficiently and intuitively.",
      technologies: ["Python", "Machine Learning"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/tensor_grad",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/tensor_grad.png",
      video: "",
    },
    {
      title: "Version Information Tracker (VIT)",
      href: "https://github.com/imaditya123/VIT",
      dates: "Dec 2024",
      active: true,
      favorite: true,
      category: ["All Projects", "Python Projects"],
      description:
        "VIT (Version Information Tracker) is a simple command-line version control system inspired by Git. It allows users to initialize repositories, add files to staging, commit changes, manage branches, and view diffs, all through a terminal interface.",
      technologies: ["Python"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/VIT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/vit.webp",
      video: "",
    },
    {
      title: "Generative Adversarial Network (GAN)",
      href: "https://github.com/imaditya123/GAN",
      dates: "July 2024",
      active: true,
      favorite: false,
      category: ["ML Projects", "All Projects", "Python Projects"],
      description:
        "A Generative Adversarial Network (GAN) implemented in Python using TensorFlow/PyTorch. This project focuses on training a generator and a discriminator to create realistic synthetic data, such as images or text.",
      technologies: ["Python", "PyTorch", "Deep Learning"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/GAN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/GAN.png",
      video: "",
    },
    {
      title: "Palingram Finder",
      href: "https://github.com/imaditya123/palingram-finder",
      dates: "Sep 2024",
      active: true,
      favorite: false,
      category: ["Python Projects", "All Projects", "Algorithm Projects"],
      description:
        "Palingram Finder is a Python-based program that identifies two-word palingrams. It efficiently analyzes words to find combinations that form palindromes, showcasing algorithms and string manipulation techniques.",
      technologies: ["Python"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/palingram-finder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/palingram.png",
      video: "",
    },
    {
      title: "Silly Name Generator",
      href: "https://github.com/imaditya123/Silly-Name-Ganerator",
      dates: "Aug 2024",
      active: true,
      favorite: false,
      category: ["Python Projects", "Fun Projects", "All Projects"],
      description:
        "Silly Name Generator is a Python-based CLI application that creates random, humorous names. It combines wordplay and randomness to generate entertaining results, perfect for creative use or just for fun.",
      technologies: ["Python"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/Silly-Name-Ganerator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/silly_name.png",
      video: "",
    },
    {
      title: "To-Do App",
      href: "https://github.com/imaditya123/todoApp",
      dates: "July 2023",
      active: true,
      favorite: false,
      category: [
        "Mobile Apps",
        "All Projects",
        "Flutter Projects",
        "App Development",
      ],
      description:
        "To-Do App is a Flutter-based task management application that enables users to create, organize, and track tasks seamlessly. Built with a clean UI, it supports features like task prioritization, reminders, and cross-platform functionality for both Android and iOS.",
      technologies: ["Flutter", "Dart"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/todoApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/todoapp.webp",
      video: "",
    },
    {
      title: "URL Shortener",
      href: "https://github.com/imaditya123/urlshortner",
      dates: "May 2023",
      active: true,
      favorite: false,
      category: ["Web Projects", "All Projects", "Java Projects"],
      description:
        "URL Shortener is a Java-based web application that converts long URLs into short, shareable links. It features efficient hashing, database storage, and analytics to track link usage, making it ideal for personal and enterprise use.",
      technologies: ["Java", "Spring Boot", "REST API", "Database"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/urlshortner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/url_shortner.webp",
      video: "",
    },
    {
      title: "SafeChannel",
      href: "https://github.com/imaditya123/safechannel",
      dates: "Mar 2023",
      active: true,
      favorite: false,
      category: ["Security Projects", "All Projects", "Java Projects"],
      description:
        "SafeChannel is a secure communication framework built in Java. It ensures end-to-end encryption, protecting sensitive information during transmission. Designed for scalability and robustness, it is ideal for applications requiring secure data transfer, such as messaging platforms and financial systems.",
      technologies: ["Java", "Encryption", "Security"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/safechannel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/safechannel.webp",
      video: "",
    },
    {
      title: "Unique ID Generator",
      href: "https://github.com/imaditya123/Unique-Id-Generate",
      dates: "Jan 2023",
      active: true,
      favorite: false,
      category: ["Utility Projects", "All Projects", "Java Projects"],
      description:
        "Unique ID Generator is a Java-based utility tool designed to generate unique identifiers for a variety of use cases. Built with scalability and performance in mind, it ensures collision-free IDs, making it ideal for distributed systems, database keys, session tokens, and more.",
      technologies: ["Java"],
      links: [
        {
          type: "Git Repo",
          href: "https://github.com/imaditya123/Unique-Id-Generate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/unique_id_generator.png",
      video: "",
    },
  ],

  project_category: [
    "All Projects",
    "ML Projects",
    "App Development",
    "Python Projects",
  ],
} as const;
