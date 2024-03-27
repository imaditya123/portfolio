"use client";
import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import "../globals.css";

const Header = () => {
    return (
        <Popover
        className={
          "container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
        }
      >
        <h1 className="font-bold">A:Dev</h1>
        <div className="grow">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
            <Link href="">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-grey-400 
        hover:bg-grey-100 hover:text:gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open-Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"></Bars3Icon>
          </Popover.Button>

          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold">A:Dev</h1>
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-grey-400 hover:bg-grey-100 
                  hover:text:gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close-Menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    ></XMarkIcon>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500 px-2"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500 px-2"
                    href="#about"
                  >
                    About
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500 px-2"
                    href="#projects"
                  >
                    Projects
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500 px-2 pb-5"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </Popover.Panel>
        </div>
        <div className="hidden sm:flex">
          <EnvelopeIcon className="h-6 w-6" aria-hidden="true"></EnvelopeIcon>
          <h1 className="mr-2 font-bold ml-2">imadityarathore@gmail.com</h1>
        </div>
      </Popover>
    );
  };
  
  export default Header;
  