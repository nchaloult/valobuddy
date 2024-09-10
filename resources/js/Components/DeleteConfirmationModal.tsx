// TODO: Type props.
export default function DeleteConfirmationModal({ stratId, stratTitle, handleCancel }) {
  return (
    <div className="relative z-50" style={{ animation: "fade-in 0.2s" }}>
      {/* Background overlay */}
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"></div> */}
      <div className="fixed inset-0 bg-gradient-to-b from-red-500 to-transparent from-[-60%] to-80%">&nbsp;</div>

      <svg xmlns="http://www.w3.org/2000/svg" className="fixed z-10 w-svw h-svh opacity-20">
        <defs>
          <pattern id="plusPattern" x="0" y="0" width={80} height={80} patternUnits="userSpaceOnUse">
            <path
              d={`M${20 / 2},${20 / 4} v${20 / 2} M${20 / 4},${20 / 2} h${20 / 2}`}
              stroke="#EF4444"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plusPattern)" />
      </svg>

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-full">

          <div className="p-4 w-2/3 lg:w-1/2 bg-neutral-800 border border-white/10 shadow-lg shadow-neutral-200/5">

            {/* "Hazard tape" graphic. */}
            <div className="mb-2 h-4 overflow-hidden">
              <div
                className="w-svw"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, rgba(0,0,0,0), rgba(0,0,0,0) 0.5rem, #404040 0.5rem, #404040 1rem )",
                  // TODO: Only apply this animation if prefers-reduce-motion is false.
                  animation: "hazard-tape-marquee-ltor 1s linear infinite",
                }}
              >
                &nbsp;
              </div>
            </div>

            {/* TODO: What tag should we use for this? */}
            <h4 className="text-3xl font-['Druk_Wide_Bold']">DELETE STRAT</h4>
            <p>Are you sure you want to delete "{stratTitle}"?</p>

            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => handleCancel()}
                className="grow px-4 py-3 text-center text-sm font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-t from-neutral-700 to-neutral-900 from-50% to-50% bg-top bg-[length:100%_200%] outline-none hover:bg-bottom hover:border-neutral-500 focus:bg-bottom focus:border-neutral-500 transition-all duration-200">
                CANCEL
              </button>
              <button
                className="grow px-4 py-3 text-center text-sm font-['Space_Mono'] border-2 border-red-400 bg-gradient-to-t from-red-600 to-red-500 from-50% to-50% bg-top bg-[length:100%_200%] outline-none hover:bg-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200">
                DELETE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
