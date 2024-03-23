import Image from "next/image";

// Team Or2er Images
import dmn from "@/assets/dmn.png";
import kna from "@/assets/kna.png";
import mvnm from "@/assets/mvnm.png";
import ninh from "@/assets/ninh.png";
import pnq from "@/assets/pnq.png";

export default function HeroSection() {
  return (
    <section className="flex justify-center">
      <h1 className="text-[720px] text-[#F10000] relative font-right_grotesk">
        TEAM OR2ER
      </h1>

      <div className="w-[86%] grid grid-cols-5 absolute bottom-0 flex flex-row ">
        <div>
          <Image src={kna} alt="kna" className="w-[100%] h-auto object-cover" />
        </div>
        <div>
          <Image src={dmn} alt="dmn" className="w-[100%] h-auto object-cover" />
        </div>
        <div>
          <Image
            src={mvnm}
            alt="mvnm"
            className="w-[100%] h-auto object-cover"
          />
        </div>
        <div>
          <Image src={pnq} alt="pnq" className="w-[100%] h-auto object-cover" />
        </div>
        <div>
          <Image
            src={ninh}
            alt="ninh"
            className="w-[100%] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
