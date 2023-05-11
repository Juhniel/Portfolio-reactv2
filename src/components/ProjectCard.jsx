import Img1 from "../assets/project-recipebook.png";
import Img2 from "../assets/project-portfoliov1.png";
import Img3 from "../assets/project-webshop.png";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import {
  SiJavascript,
  SiReact,
  SiSpring,
  SiThymeleaf,
  SiHtml5,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export default function ProductCard() {
  return (
    <div className="dark:bg-zinc-800 rounded-md p-4 shadow-xl relative overflow-hidden">
      {/* Image container */}
      <div className="group relative h-62">
        {/* Image */}
        <img
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          src={Img1}
          alt=""
        />
        {/* Overlay */}
        <div className="group-hover:bg-black/70 group-hover:scale-125 w-full h-full top-0 absolute z-80 transition-all duration-300"></div>
        {/* Pretitle */}
        <div className="absolute bottom-20 left-4 group-hover:-bottom-5  transition-all duration-500 z-50">
          <span className="text-white opacity-0 group-hover:opacity-100">
            #Spring #MySQL #JavaScript #Java
          </span>
        </div>
        {/* Title */}
        <div className="absolute bottom-4 left-4 group-hover:bottom-3 lg:group-hover:bottom-10 xl:group-hover:bottom-3 transition-all duration-700 z-50">
          <span 
          className="text-3xl tracking-wide text-white opacity-0 group-hover:opacity-100">
            Recipebook
          </span>
        </div>
      </div>

      {/* Card content */}
      {/* <h1 className="text mt-2 text-2xl font-semibold text-center">Recipebook</h1> */}
      <div className="mt-10">
        <p className="text-secondary font-medium text-black dark:text-white mb-6">
          Spring boot project backed by mySQL. This application allows users to
          search, discover and save their favourite recipes. Personalized
          account creation and profile editing options.
        </p>
        <a
          href=""
          className="text-secondary tracking-widest font-bold  text-black dark:text-white flex justify-center mb-4"
        >
          Link to project
          <span className="ml-2 text-2xl">
            <SiGithub />
          </span>
        </a>

        <div className="flex justify-around">
          <span className="text px-2 text-2xl">
            <SiSpring />
          </span>
          <span className="text px-2 text-3xl">
            <SiMysql />
          </span>
          <span className="text px-2 text-2xl">
            <FaJava />
          </span>
          <span className="text px-2 text-2xl">
            <SiJavascript />
          </span>
        </div>
      </div>
    </div>
  );
}
