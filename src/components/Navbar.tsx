import React from "react";
import { logo } from "../utils";
import { box } from "../constants/boxes";
import { navLinks } from "../constants";

export default function Navbar() {
  return (
    <header className={`${box.paddingX} ${box.flexCenter}`}>
      <nav className={`${box.boxWidth}`}>
        <div className="w-full flex py-6 justify-between items-center">
          <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
