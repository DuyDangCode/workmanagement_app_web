"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isAbout, setIsAbout] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex flex-row w-full bg-violet-400 px-5 py-1 backdrop:blur-0">
      <Link
        href={"/"}
        className="flex flex-row flex-1 gap-2"
        onClick={() => {
          setIsAbout(true);
        }}
      >
        <Image
          src={"/favicon/android-chrome-512x512.png"}
          width={37}
          height={37}
          alt="WA"
          className="object-contain"
        ></Image>
        <p className="max-sm:hidden font-sans font-semibold text-lg text-black tracking-wide;">
          WK app
        </p>
      </Link>
      <div className="flex-row flex-1 sm:flex hidden">
        <Link
          href={"/"}
          className={
            isAbout
              ? "border-b-2 flex-1 text-center text-black-50"
              : "border-b-0 flex-1 text-center text-zinc-50"
          }
          onClick={() => {
            setIsAbout(true);
          }}
        >
          About us
        </Link>
        <Link
          href={"/download"}
          className={
            isAbout
              ? "border-b-0 flex-1 text-center text-zinc-50"
              : "border-b-2 flex-1 text-center text-black-50"
          }
          onClick={() => {
            setIsAbout(false);
          }}
        >
          Download
        </Link>
      </div>

      {/*mobile navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <div className="items-center h-full justify-center">
            <AiOutlineMenu
              size={25}
              className="object-contain"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
          </div>
          {toggleDropdown && (
            <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
              <Link
                href={"/"}
                className={
                  isAbout
                    ? "text-sm font-medium text-black hover:text-gray-500 border-b-2"
                    : "text-sm font-medium text-black hover:text-gray-500 border-b-0"
                }
                onClick={() => {
                  setToggleDropdown(false);
                  setIsAbout(true);
                }}
              >
                About
              </Link>
              <Link
                href={"/download"}
                onClick={() => {
                  setToggleDropdown(false);
                  setIsAbout(false);
                }}
                className={
                  isAbout
                    ? "text-sm font-medium text-black hover:text-gray-500 border-b-0"
                    : "text-sm font-medium text-black hover:text-gray-500 border-b-2"
                }
              >
                Download
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
