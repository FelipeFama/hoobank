import { box } from "../constants/boxes";
import Button from "./Button";

export default function CTA() {
  return (
    <section
      className={`${box.flexCenter} ${box.marginY} ${box.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <article className="flex-1 flex flex-col">
        <h2 className={box.heading2}>Let’s try our service now!</h2>
        <p className={`${box.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </article>
      <aside className={`${box.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </aside>
    </section>
  );
}
