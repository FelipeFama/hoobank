import { ButtonProps } from "../types";

export default function Button({ styles }: ButtonProps) {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  );
}
