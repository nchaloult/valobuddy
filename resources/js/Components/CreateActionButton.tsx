import { useState } from "react";

export default function CreateActionButton() {
  const [areActionsVisible, setAreActionsVisible] = useState(false);

  // TODO: Animate between the stages when areActionsVisible is toggled.
  return (
    <div className="fixed z-20 bottom-8 right-8 p-4 bg-neutral-900/80 shadow-lg shadow-neutral-200/5 border border-white/10 has-[:hover]:p-5 has-[:hover]:bottom-7 has-[:hover]:right-7 transition-all duration-200">
      {areActionsVisible ? (
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            className="px-5 py-3 text-sm text-white font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-neutral-700 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:border-neutral-500 focus:bg-left-bottom focus:border-neutral-500 transition-all duration-200"
          >
            TAG
          </button>
          <button
            type="button"
            className="px-5 py-3 text-sm text-white font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-neutral-700 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:border-neutral-500 focus:bg-left-bottom focus:border-neutral-500 transition-all duration-200"
          >
            STRAT
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setAreActionsVisible(true)}
          className="px-5 py-3 text-sm text-white font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200"
        >
          CREATE
        </button>
      )}
    </div>
  );
}
