import React from "react";
import TimeLine from "../components/timeline";
import Image from "next/image";
import "../globals.css";

const educationDetails = [
  {
    time: "2018-2022",
    title: "ABES ENGINEERING COLLEGE,GHAZIABAD",
    description: "Bachelor of Technology \nComputer science \nCGPA:8",
  },
  {
    time: "2017",
    title: "CRB PUBLIC SCHOOL,MAINPURI",
    description: "Intermediate \nComputer science\nPercentage:78%",
  },
];
const employmentDetails = [
  {
    time: "Aug,2023-Present",
    title: "WELLS FARGO, BENGALURU",
    description: "Program Associate/ System Operation Engineer",
  },
  {
    time: "Jan,2022 - Jul,2022",
    title: "NAGARRO, NOIDA",
    description:
      "SDE-Intern\nAcquired proficiency in .NET technology, specifically in the C# programming language. Gained a solid understanding of the Model-View-Controller (MVC) architectural pattern.",
  },
  {
    time: "Jun,2020 - May,2021",
    title: "SIMPLIFII LABS PVT LTD, DELHI",
    description:
      "SDE-Intern\nIndependently initiated and led various mobile application development projects from the ground up, harnessing the power of Flutter, React, and React Native technologies. Meticulously managed the full project lifecycle, from solitary inception through to triumphant deployment, while seamlessly integrating diverse third-party services to amplify application functionality.",
  },
];
const About = () => {
  return (
    <>
      <div id="about" className="w-2/3 mx-auto my-10 flex flex-col">
        <div className="flex flex-row mt-10 mb-5">
          <div className="relative h-6 w-6 mr-2">
            <Image src="/icons/employee_card.svg" alt="employee card" fill />
          </div>
          <h1 className="text-custom-yellow">Employement Details</h1>
        </div>
        <TimeLine keys={"Employement"} list={employmentDetails}></TimeLine>
        <div className="flex flex-row mt-10 mb-5 ">
          <div className="relative h-6 w-6 mr-2">
            <Image src="/icons/education.svg" alt=" card" fill />
          </div>

          <h1 className="text-custom-yellow">Education Details</h1>
        </div>

        <TimeLine keys={"Education"} list={educationDetails}></TimeLine>
      </div>
    </>
  );
};
export default About;
