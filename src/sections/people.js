import Image from "next/image";

// Assets
import decor from "@/assets/decor.svg";
import image_decor from "@/assets/image_decor.svg";
import pnq_dmn from "@/assets/dmn&pnq.png";

export default function People() {
    return (
        <section
            className={`min-h-screen flex flex-col justify-center py-24 px-6 lg:px-24 overflow-hidden`}
        >
            <div className="text-center">
                <h1 className="text-[250px] md:text-[300px] xl:text-[500px] text-[#F10000] leading-none font-right_grotesk">
                    BEYOND THE
                </h1>
                <h1 className="text-[250px] md:text-[300px] xl:text-[500px] leading-[0.6] font-right_grotesk text-stroke">
                    EXPECTATION
                </h1>
            </div>

            <div className="py-16 relative">
                <h1 className="text-[60px] md:text-[80px] xl:text-[120px] font-bold">
                    What is our identity
                    <br /> and how <br />
                    may we help you?
                </h1>
                <div className="h-16 xl:h-24 w-auto aspect-[3.5/1] 2xl:aspect-[7/1] bg-[#F10000] absolute top-[50%] left-[50%] translate-x-[-30%] lg:translate-x-[-50%] translate-y-[-52%] md:translate-y-[-60%]" />
                <p className="text-2xl">Team or2er</p>
                <Image
                    src={decor}
                    alt="decor"
                    className="absolute bottom-[-6rem] left-auto right-[-15rem] w-[45%] h-auto lg:w-auto lg:h-auto"
                />
            </div>

            <div className="flex-row grid grid-cols-2 pt-56 ">
                <p className="text-2xl/normal xl:text-4xl/normal pr-16 xl:pr-24">
                    We are five enthusiastic developers, aged 19-20, form the
                    or2er team. All of whom are{" "}
                    <span className="text-[#F10000] underline underline-offset-8">
                        dedicated to using AI to create solutions
                    </span>{" "}
                    that makes a positive impact. Each member brings their own
                    skills and ideas, working together seamlessly to push the
                    boundaries of AI.
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
        </section>
    );
}
