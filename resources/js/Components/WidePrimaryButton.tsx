import { ButtonHTMLAttributes } from "react";

interface Props {
  fullWidth?: boolean;
}
export default function WidePrimaryButton({
  fullWidth,
  className = "",
  disabled,
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `${
          fullWidth ? "w-full" : "w-1/3 min-w-48"
        } px-4 py-3 text-center text-sm font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-t from-red-600 to-neutral-900 from-50% to-50% bg-top bg-[length:100%_200%] outline-none hover:bg-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
