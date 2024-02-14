import {
  mongodb,
  neo4j,
  nextjs,
  nodejs,
  pytorch,
  redis,
  scikit,
  spring,
  tensorflow,
} from "@/assets/assets.js";

import Image from "next/image";

export default function TechStacks() {
  return (
    <section className={`grid grid-cols-2 py-24 px-6 lg:px-24 overflow-hidden`}>
      <div className="flex flex-col">
        <div className="text-left">
          <h1 className="text-[180px] xl:text-[200px] text-[#000000] leading-none font-right_grotesk">
            OUR TECHSTACK
          </h1>
          <h1 className="text-[180px] xl:text-[200px] text-[#F10000] leading-[0.6] font-right_grotesk">
            AND TOOLS
          </h1>
        </div>

        <p className="text-1xl md:text-3xl pb-16">- 1+ years of client work</p>
        <p className="text-1xl md:text-3xl pr-16">
          Members of Team or2er come from a variety of professional backgrounds.
          Our tech stack is made up of several cutting-edge framework and tool
          components working together.
        </p>
      </div>

      <div className="">
        <div className="flex flex-row justify-between items-center pb-6">
          <Image src={scikit} alt="scikit" className="h-[100%] object-cover" />
          <Image src={pytorch} alt="scikit" className="h-[100%] object-cover" />
          <Image
            src={tensorflow}
            alt="scikit"
            className="h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-row justify-between items-center pb-6">
          <Image src={nodejs} alt="scikit" className="h-[100%] object-cover" />
          <Image src={nextjs} alt="scikit" className="h-[100%] object-cover" />
          <Image src={mongodb} alt="scikit" className="h-[100%] object-cover" />
        </div>
        <div className="flex flex-row justify-between items-center pb-6">
          <Image src={spring} alt="scikit" className="h-[100%] object-cover" />
          <Image src={neo4j} alt="scikit" className="h-[100%] object-cover" />
          <Image src={redis} alt="scikit" className="h-[100%] object-cover" />
        </div>
        <div className="flex flex-row justify-between items-center pb-6">
          <Image src={mongodb} alt="scikit" className="h-[100%] object-cover" />
          <Image
            src={tensorflow}
            alt="scikit"
            className="h-[100%] object-cover"
          />
          <Image src={nodejs} alt="scikit" className="h-[100%] object-cover" />
        </div>
      </div>
    </section>
  );
}
