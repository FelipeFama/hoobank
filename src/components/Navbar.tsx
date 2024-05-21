import { useState } from "react";
import { logo, menu, close } from "../utils";
import { box } from "../constants/boxes";
import { navLinks } from "../constants";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
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
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <aside
              className={`${!toggle ? "hidden" : "flex"}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    }`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
}
