import { InputHTMLAttributes } from "react";

export default function Checkbox({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        "appearance-none p-2 border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] hover:cursor-pointer checked:bg-left-bottom checked:text-neutral-900 checked:border-red-500 transition-all duration-[150ms]" +
        className
      }
    />
  );
}
