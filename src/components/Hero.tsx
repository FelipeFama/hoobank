import React from "react";
import { box } from "../constants/boxes";
import { discount } from "../utils";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${box.paddingY} ${box.boxWidth}`}>
      <article
        className={`flex-1 ${box.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <aside className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${box.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </aside>
      </article>
    </section>
  );
}
