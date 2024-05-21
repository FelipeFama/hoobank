import { box } from "../constants/boxes";
import { arrowUp } from "../utils";

export default function GetStarted() {
  return (
    <div
      className={`${box.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <aside
        className={`${box.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <figure className={`${box.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </figure>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </aside>
    </div>
  );
}
