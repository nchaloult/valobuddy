// TODO: Add marquee animations.
//
// TODO: Make sure this looks good on all screen sizes. Experiment with zooming
// out in the browser to simulate super large, super high-DPI displays.
export default function BigProductNameMarquees() {
  const groupOne = (
    <div>
      <span className="text-6xl lg:text-9xl font-['Druk_Wide_Bold'] text-white/5">
        VALO
      </span>
      <span
        className="text-6xl lg:text-9xl font-['Druk_Wide_Bold'] text-white/0"
        style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)" }}
      >
        BUDDY
      </span>
    </div>
  );
  const groupTwo = (
    <div>
      <span
        className="text-6xl lg:text-9xl font-['Druk_Wide_Bold'] text-white/0"
        style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)" }}
      >
        VALO
      </span>
      <span className="text-6xl lg:text-9xl font-['Druk_Wide_Bold'] text-white/5">
        BUDDY
      </span>
    </div>
  );

  return (
    <>
      {/* Random initial horizontal offsets. */}
      <div className="-translate-x-12">{groupOne}</div>
      <div className="-translate-x-1/3">{groupTwo}</div>
      <div className="-translate-x-1/2">{groupOne}</div>
      <div className="-translate-x-2/3">{groupTwo}</div>
      <div className="-translate-x-64">{groupOne}</div>
      <div className="-translate-x-1/3">{groupTwo}</div>
      <div className="-translate-x-1/2">{groupOne}</div>
      <div className="-translate-x-2/3">{groupTwo}</div>
    </>
  );
}
