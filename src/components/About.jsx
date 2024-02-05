import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";


const ServiceCard = ({ index, name, ava, role }) => {
  return (
    <Tilt className="xs:w-[210px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-2  flex  items-center flex-col"
        >
          <div className="bg-[#9F82FF] rounded-[90px] overflow-hidden">
            <img
              src={ava}
              alt="web-development"
              className="w-28 h-28 object-cover"
            />
          </div>

          <h3 className="text-white text-[20px] font-bold text-center pt-4">
            {name}
          </h3>
          <p className="text-[rgb(255,255,255,0.6)]" >
            {role}
          </p>

          <div className="flex flex-row w-32 mt-2 gap-4 justify-center" >
            <a href="#">
              <FaGithub className="w-6 h-6 text-[rgb(255,255,255,0.6)] hover:text-[#C2B0FC] cursor-pointer" />
            </a>
            <a href="#">
              <IoLogoLinkedin className="w-6 h-6 text-[rgb(255,255,255,0.6)] hover:text-[#C2B0FC] cursor-pointer" />
            </a>
            <a href="#">
              <FaFacebook className="w-6 h-6 text-[rgb(255,255,255,0.6)] hover:text-[#C2B0FC] cursor-pointer" />
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>team overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <span className="font-bold">or2er</span> is where the brightest minds
        congregate. Our goal is to work together to create technological
        products that benefit and make people happy. Come together with us to
        make your wildest goals and ideas come true.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
