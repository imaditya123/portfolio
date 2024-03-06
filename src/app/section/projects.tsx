"use client";
import { useEffect, useRef, useState } from "react";

import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import BannerButton from "../components/banner";
import AppButton from "../components/button";

const tabsData = [
  {
    label: "All Projects",
    projects: [
      {
        title: "Convert It",
        type: "Web Applications",
        description:
          "Our web quickly converts  numbers between different systems(binary,octal, decimal)",
        github: "",
        image: "/images/vae.png",
      },
    ],
  },
  {
    label: "ML Projects",

    projects: [],
  },
  {
    label: "App Development",

    projects: [],
  },
];
const colors = ["#543864", "#FAF0D7", "#FFD9C0", "#F4BFBF", "#A3D2CA"];
const Projects = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <>
      <div id="projects" className="mx-auto w-2/3 mb-10">
        <div className="flex flex-row">
          <img src="/icons/project_icon.svg" alt="contact card" className="h-5 w-5 mr-2" />
          <h1 className="text-custom-yellow">PROJECTS</h1>
        </div>
        <p className="text-4xl mb-7 line-clamp-4">Bridging the Gap between imagination and execution</p>
        <div className="relative">
          <div className="flex space-x-3 border-b">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="pt-2 pb-3"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span
            className="absolute bottom-0 block h-1 bg-custom-yellow transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </div>
        <div className="py-4">
          <div>
            {tabsData[activeTabIndex].projects.map((tab, idx) => {
              return (
                <div
                  key={tabsData[activeTabIndex].projects[idx].title + "_" + idx}
                  className={
                    "border-2 rounded-md flex flex-col-reverse md:flex-row py-10 pl-10 mb-8" +
                    " bg-[" +
                    colors[idx % 5] +
                    "] border-[#DAD7D8] "
                  }
                >
                  <div className="flex flex-col md:w-2/5">
                    <img
                      src="/icons/orange_prop.svg"
                      alt="orange"
                      className="w-20 mb-4"
                    />

                    <h1 className="text-3xl mb-4">
                      {tabsData[activeTabIndex].projects[idx].title}
                    </h1>
                    <div className="mb-3  flex">
                      <p className="text-xs min-w-min py-1 px-5 shadow-sm border rounded-md  shrink">
                        {tabsData[activeTabIndex].projects[idx].type}
                      </p>
                    </div>
                    <p className="text-sm mb-5">
                      {tabsData[activeTabIndex].projects[idx].description}
                    </p>
                    <div className="w-30">
                      {" "}
                      <AppButton onTap={() => {}}>View Project</AppButton>
                    </div>
                  </div>

                  <div className="flex flex-col md:w-3/5 items-end content-end mr-10 md:mr-0">
                    <h1
                      className={
                        "hidden md:block md:text-9xl font-bold text-custom-yellow opacity-25"
                      }
                    >
                      {String(idx + 1).padStart(2, "0")}.
                    </h1>
                    <div className=""></div>
                    <img
                      src={tabsData[activeTabIndex].projects[idx].image}
                      alt=""
                      className="border shadow-md shadow-custom-yellow/10 rounded-md "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <BannerButton>
          <h1 className="grow text-left my-auto text-sm"> View All</h1>
          <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
        </BannerButton>
      </div>
    </>
  );
};
export default Projects;
