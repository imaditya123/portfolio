"use client";
import React from "react";
import AppButton from "../components/button";
const Contact = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const codeString="<>"
  return (
    <>
      <div id="contact" className=" flex flex-col sm:flex-row w-2/3 mx-auto">
        <div className="flex flex-col mx-5   my-auto sm:w-2/3 md:w-3/5">
          <div className="flex flex-row">
            <img
              src="/icons/contact_card.svg"
              alt="contact card"
              className=""
            />
            <h1 className="text-custom-yellow">CONTACT ME</h1>
          </div>
          <h1 className="text-4xl mb-7">Lets have a talk?</h1>
          <img
            src="/icons/propicon.svg"
            alt="contact card"
            className="w-full "
          />
          <input
            type="text"
            id="email"
            className="border-b border-gray-800 p-2.5 w-full bg-transparent  outline-none text-xs font-light my-5"
            placeholder="Your Email"
          />
          <input
            type="text"
            id="message"
            className="border-b border-gray-800 p-2.5 w-full bg-transparent  outline-none text-xs font-light"
            placeholder="Message"
          />
          <div className="w-32 my-5">
            <AppButton onTap={handleClick}>Say Hello</AppButton>
          </div>
        </div>
        <div className=" flex-col items-center ml-auto  h-96 hidden  md:flex ">
          <div className="w-5 h-96 ">
            <div className="mx-auto min-h-[2em] h-48 w-px self-stretch bg-gradient-to-tr from-gray-800 via-gray-800 to-transparent opacity-70"></div>
          </div>
          <h1 className="text-center w-5 mx-auto">{codeString}</h1>
          <div className="w-5 h-96 ">
            <div className="mx-auto min-h-[2em]  h-48 w-px self-stretch bg-gradient-to-tr from-transparent via-gray-800 to-gray-800 opacity-70"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
