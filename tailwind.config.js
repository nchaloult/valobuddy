import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                marqueeRtol: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marqueeRtolTwo: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marqueeRtolThree: {
                    "0%": { transform: "translateX(200%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                marqueeLtor: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marqueeLtorTwo: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                marqueeLtorThree: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(200%)" },
                },
                hazardTapeMarquee: {
                    "0%": { transform: "translateX(-1.5rem)" },
                    // Weirdness to smooth out this animation.
                    "100%": { transform: "translateX(-1px)" },
                },
            },
            animation: {
                "marquee-rtol": "marqueeRtol 25s linear infinite",
                "marquee-rtol-two": "marqueeRtolTwo 25s linear infinite",
                "marquee-rtol-three": "marqueeRtolThree 25s linear infinite",
                "marquee-ltor": "marqueeLtor 25s linear infinite",
                "marquee-ltor-two": "marqueeLtorTwo 25s linear infinite",
                "marquee-ltor-three": "marqueeLtorThree 25s linear infinite",
                "hazard-tape-marquee": "hazardTapeMarquee 1s linear infinite",
            },
        },
    },

    plugins: [forms, typography],
};
