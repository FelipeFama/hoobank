import { footerLinks, socialMedia } from "../constants";
import { box } from "../constants/boxes";
import { logo } from "../utils";

export default function Footer() {
  return (
    <footer className={`${box.flexCenter} ${box.paddingY} flex-col`}>
      <section className={`${box.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <article className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${box.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </article>
        <article className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <aside
              key={footerlink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h1>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </aside>
          ))}
        </article>
      </section>
      <section className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright &#9400; 2022 HooBank. All Rights Reserved.
        </p>
        <figure className="flex flex-row md:mt-0 mt-6 relative">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </figure>
      </section>
    </footer>
  );
}
