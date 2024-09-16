import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useEffect, useState } from "react";

const MARQUEE_PHRASES = [
  "Get ValoBuddy",
  "Find lineups",
  "Review your VODs",
  "Study strats",
  "Learn fast",
  "Prep for any scenario",
  "Play with confidence",
  "Climb the ranked ladder",
  "Buy the SEN bundle",
];

const ENCODING_CHARS = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "?",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const INITIAL_PRODUCT_NAME_TEXT_AS_ARRAY = [
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
  "_",
];
const FINAL_PRODUCT_NAME_TEXT_AS_ARRAY = [
  "V",
  "a",
  "l",
  "o",
  "B",
  "u",
  "d",
  "d",
  "y",
];
const WINDOW_SIZE = 8;
const ANIMATION_TICK_DURATION_IN_MILLIS = 75;
const ANIMATION_INTERMISSION_DURATION_IN_MILLIS = 5000;

interface MarqueeProps {
  phrases: string[];
}
function MarqueeRtol({ phrases }: MarqueeProps) {
  // https://play.tailwindcss.com/VJvK9YXBoB?layout=horizontal
  return (
    <div className="w-full relative flex overflow-x-hidden bg-neutral-900">
      <div
        className={`animate-marquee-rtol py-2 whitespace-nowrap font-['Space_Mono'] scale-y-110`}
      >
        {phrases.map((phrase) => (
          <span key={phrase} className="mx-8 text-base uppercase">
            {phrase}
          </span>
        ))}
      </div>
      <div
        className={`absolute top-0 animate-marquee-rtol-two py-2 whitespace-nowrap font-['Space_Mono'] scale-y-110`}
      >
        {phrases.map((phrase) => (
          <span key={phrase} className="mx-8 text-base uppercase">
            {phrase}
          </span>
        ))}
      </div>
      <div
        className={`absolute top-0 animate-marquee-rtol-three py-2 whitespace-nowrap font-['Space_Mono'] scale-y-110`}
      >
        {phrases.map((phrase) => (
          <span key={phrase} className="mx-8 text-base uppercase">
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
function MarqueeLtor({ phrases }: MarqueeProps) {
  // https://play.tailwindcss.com/VJvK9YXBoB?layout=horizontal
  return (
    <div className="w-full relative flex overflow-x-hidden bg-neutral-900">
      <div
        className={`animate-marquee-ltor py-2 whitespace-nowrap font-['Space_Mono'] scale-y-110`}
      >
        {phrases.map((phrase) => (
          <span key={phrase} className="mx-8 text-base uppercase">
            {phrase}
          </span>
        ))}
      </div>
      <div
        className={`absolute top-0 animate-marquee-ltor-two py-2 whitespace-nowrap font-['Space_Mono'] scale-y-110`}
      >
        {phrases.map((phrase) => (
          <span key={phrase} className="mx-8 text-base uppercase">
            {phrase}
          </span>
        ))}
      </div>
      <div
        className={`absolute top-0 animate-marquee-ltor-three py-2 whitespace-nowrap font-['Space_Mono'] scale-y-110`}
      >
        {phrases.map((phrase) => (
          <span key={phrase} className="mx-8 text-base uppercase">
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Welcome({ auth }: PageProps) {
  // Setting this state var's initial value to "ValoBuddy" so that in a
  // situation where JavaScript is being slow to load in or start executing,
  // something still shows up on the page. It's also good for SEO — web crawlers
  // will see "ValoBuddy" in the h1 tag.
  const [productNameText, setProductNameText] = useState("ValoBuddy");

  useEffect(() => {
    let curProductNameTextAsArray = INITIAL_PRODUCT_NAME_TEXT_AS_ARRAY;

    // Sliding window approach to produce the "decoding" animation. Each time
    // the window moves forward by one index, each character inside the window
    // gets a new decode character. Once a character is no longer inside the
    // window, it becomes its final, "decoded" character.
    let startIdx = -1 * (WINDOW_SIZE - 1);
    let endIdx = 0;
    // Fun fact: timeouts and intervals both have the Timeout type.
    let animationInterval: NodeJS.Timeout;
    let animationIntermissionTimeout: NodeJS.Timeout;

    function animationLoop() {
      // Change out every char inside the window.
      for (let i = startIdx; i <= endIdx; i++) {
        if (i < 0 || i >= FINAL_PRODUCT_NAME_TEXT_AS_ARRAY.length) {
          continue;
        }
        const randomEncodingChar =
          ENCODING_CHARS[Math.floor(Math.random() * ENCODING_CHARS.length)];
        curProductNameTextAsArray[i] = randomEncodingChar;
      }
      // For the character that just exited the window, set it to its "final"
      // character.
      const idxThatJustExitedWindow = startIdx - 1;
      if (idxThatJustExitedWindow >= 0) {
        curProductNameTextAsArray[idxThatJustExitedWindow] =
          FINAL_PRODUCT_NAME_TEXT_AS_ARRAY[idxThatJustExitedWindow];
      }
      // Update the product name text with the next "frame".
      setProductNameText(curProductNameTextAsArray.join(""));
      // Slide the window forward.
      startIdx++;
      endIdx++;
      // If the animation/effect is finished, pause for a bit before restarting.
      if (startIdx > curProductNameTextAsArray.length) {
        curProductNameTextAsArray = INITIAL_PRODUCT_NAME_TEXT_AS_ARRAY;
        startIdx = -1 * (WINDOW_SIZE - 1);
        endIdx = 0;

        clearInterval(animationInterval);
        animationIntermissionTimeout = setTimeout(() => {
          animationInterval = setInterval(
            animationLoop,
            ANIMATION_TICK_DURATION_IN_MILLIS
          );
        }, ANIMATION_INTERMISSION_DURATION_IN_MILLIS);
      }
    }

    animationInterval = setInterval(
      animationLoop,
      ANIMATION_TICK_DURATION_IN_MILLIS
    );

    // When this component is unmounted, clear this interval (just in case the
    // animation/effect isn't finished when the user navigates away from this
    // page, for instance).
    return () => {
      clearInterval(animationInterval);
      clearTimeout(animationIntermissionTimeout);
    };
  }, []);

  return (
    <main
      // https://www.ibelick.com/blog/create-grid-and-dot-backgrounds-with-css-tailwind-css
      className="flex flex-col space-y-32 grow justify-center items-center bg-[radial-gradient(#333333_1px,transparent_2px)] [background-size:32px_32px]"
    >
      <MarqueeRtol phrases={MARQUEE_PHRASES} />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-5xl lg:text-7xl font-['Space_Mono'] scale-y-110">
          {productNameText}
        </h1>
        <h2 className="lg:text-lg text-center">
          The <em>ultimate</em> notes system for{" "}
          <span className="text-red-500 font-bold">
            high-ELO Valorant players
          </span>
        </h2>
        <div className="flex space-x-4">
          {auth.user ? (
            <>
              <Link
                href={route("strats.index", { map: "foo", agent: "bar" })}
                className="p-5 text-sm text-white font-['Space_Mono'] border-2 border-red-400 bg-gradient-to-r from-red-600 to-red-500 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-[250ms]"
              >
                VIEW LIBRARY
              </Link>
              {/* TODO: Fix this link. */}
              <Link
                href="/"
                className="p-5 text-sm text-white font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-[250ms]"
              >
                SIGN OUT
              </Link>
            </>
          ) : (
            <>
              <Link
                href={route("register")}
                className="p-5 text-sm text-white font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-[250ms]"
              >
                SIGN UP NOW
              </Link>
              <Link
                href={route("login")}
                className="p-5 text-sm text-white font-['Space_Mono'] border-2 border-red-400 bg-gradient-to-r from-red-600 to-red-500 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-[250ms]"
              >
                LOG IN
              </Link>
            </>
          )}
        </div>
      </div>
      <MarqueeLtor phrases={MARQUEE_PHRASES} />
    </main>
  );
}
