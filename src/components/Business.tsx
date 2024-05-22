import { box, layout } from "../constants/boxes";

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
      </article>
    </section>
  );
}
