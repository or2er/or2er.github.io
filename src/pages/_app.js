import "@/styles/globals.css";

import localFont from "next/font/local";

const neue = localFont({
    src: [
        {
            path: "../../public/fonts/NeueHaasDisplayLight.ttf",
        },
        {
            path: "../../public/fonts/NeueHaasDisplayMediu.ttf",
        },
        {
            path: "../../public/fonts/NeueHaasDisplayRoman.ttf",
        },
    ],
    variable: "--font-neue",
});

const right_grotesk = localFont({
    src: [
        { path: "../../public/fonts/RightGrotesk-TallBold.otf" },
        { path: "../../public/fonts/RightGrotesk-TallDark.otf" },
    ],
    variable: "--font-right_grotesk",
});

export default function App({ Component, pageProps }) {
    return (
        <main
            className={`${neue.variable} ${right_grotesk.variable} font-neue`}
        >
            <Component {...pageProps} />;
        </main>
    );
}
