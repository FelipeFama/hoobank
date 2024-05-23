import React from "react";
import { box, layout } from "../constants/boxes";
import Button from "./Button";
import { card } from "../utils";

export default function CardDeal() {
  return (
    <section className={layout.section}>
      <article className={layout.sectionInfo}>
        <h2 className={box.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${box.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={`mt-10`} />
      </article>
      <figure className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </figure>
    </section>
  );
}
