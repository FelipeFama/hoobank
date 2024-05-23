import { features } from "../constants";
import { box, layout } from "../constants/boxes";
import { FeatureCardProps } from "../types";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
  <aside
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}>
    <figure
      className={`w-[64px] h-[64px] rounded-full ${box.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </figure>
    <div className="flex-1 flex flex-col ml-3">
      <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h3>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </aside>
);

export default function Business() {
  return (
    <section id="features" className={layout.section}>
      <article className={layout.sectionInfo}>
        <h2 className={box.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${box.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={`mt-10`} />
      </article>
      <article className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </article>
    </section>
  );
}
