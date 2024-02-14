import Image from "next/image";
import Navbar from "@/components/navbar";

// Sections
import People from "@/sections/people";
import Journey from "@/sections/journey";

function HightlightText({ text }) {
    processed_text = text.split("");
    console.log("processed text: ", processed_text);

    return (
        <div className="block relative text-center">
            {processed_text.map((char, index) => (
                <div
                    key={index}
                    className="relative inline-block transform-none rotate-0 "
                >
                    {char}
                </div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Navbar />
            <People />
            <Journey />
        </div>
    );
}
