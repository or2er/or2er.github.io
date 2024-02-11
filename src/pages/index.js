import Image from "next/image";
import Navbar from "@/components/navbar";

// Assets
import decor from "@/assets/decor.svg";
import image_decor from "@/assets/image_decor.svg";
import pnq_dmn from "@/assets/dmn&pnq.png";

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
      <main
        className={`min-h-screen flex flex-col justify-center p-24 overflow-hidden`}
      >
        <div className="text-center">
          <h1 className="text-[600px] text-[#F10000] leading-none font-right_grotesk">
            BEYOND THE
          </h1>
          <h1 className="text-[600px] leading-[0.6] font-right_grotesk text-stroke">
            EXPECTATION
          </h1>
        </div>

        <div className="py-16 relative">
          <h1 className="text-[120px] font-bold">
            What is our identity
            <br /> and how <br />
            may we help you?
          </h1>
          <div className="h-24 w-auto aspect-[7/1] bg-[#F10000] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          <p className="text-2xl">Team or2er</p>
          <Image
            src={decor}
            alt="decor"
            className="absolute bottom-[-6rem] left-auto right-[-15rem]"
          />
        </div>

        <div className="flex-row grid grid-cols-2 pt-56 ">
          <p className="text-4xl pr-24 leading-normal">
            We are five enthusiastic developers, aged 19-20, form the or2er
            team. All of whom are{" "}
            <p className="text-[#F10000] underline underline-offset-8">
              dedicated to using AI to create solutions
            </p>{" "}
            that makes a positive impact. Each member brings their own skills
            and ideas, working together seamlessly to push the boundaries of AI.
          </p>
          <div className="relative">
            <Image src={pnq_dmn} alt="pnq_dmn" className="ml-auto" />
            <Image
              src={image_decor}
              alt="image_decor"
              className="absolute top-0 right-0"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
