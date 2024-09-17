import Header from "@/Components/Header";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
  return (
    // TODO: Why is there a bit of vertical scroll when the page doesn't stretch
    // beyond the screen height? Padding or margin somewhere? Why isn't the grow
    // class working like I think it should?
    <div className="flex flex-col min-h-svh">
      <Header />

      <div className="grow">{children}</div>

      {/* TODO: Add Footer component. */}
    </div>
  );
}
