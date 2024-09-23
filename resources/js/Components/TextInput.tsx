import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    className = "",
    isFocused = false,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        "p-2 text-neutral-200 text-sm placeholder:text-neutral-400 bg-neutral-700 border-2 border-neutral-600 outline-none hover:bg-neutral-600 hover:border-neutral-500 focus:ring-0 focus:bg-neutral-600 focus:border-neutral-400 transition-all duration-200 " +
        className
      }
      ref={localRef}
    />
  );
});
