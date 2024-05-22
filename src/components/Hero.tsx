import { box } from "../constants/boxes";
import { discount, robot } from "../utils";
import GetStarted from "./GetStarted";

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
        <aside className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block-hidden" />
            {""}
            <span className="text-gradient">Generation</span>
            {""}
          </h1>
          <section className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </section>
        </aside>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${box.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </article>
      <article
        className={`flex-1 flex ${box.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </article>
      <article className={`ss:hidden ${box.flexCenter}`}>
        <GetStarted />
      </article>
    </section>
  );
}
