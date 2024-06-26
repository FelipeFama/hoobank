import { feedback } from "../constants";
import { box } from "../constants/boxes";
import { FeedbackCard } from "./FeedbackCard";

export default function Testimonials() {
  return (
    <section
      id="clients"
      className={`${box.paddingY} ${box.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <article className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={box.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <aside className="w-full md:mt-0 mt-6">
          <p className={`${box.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </aside>
      </article>
      <article className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </article>
    </section>
  );
}
