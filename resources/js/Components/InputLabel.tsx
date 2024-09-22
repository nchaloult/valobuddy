import { LabelHTMLAttributes } from "react";

export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
  return (
    <label
      {...props}
      className={
        `block font-medium text-sm text-neutral-100 font-['Druk_Wide_Bold'] ` +
        className
      }
    >
      {value ? value : children}
    </label>
  );
}
