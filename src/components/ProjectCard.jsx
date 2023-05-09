import Img1 from "../assets/project-recipebook.png";
import Img2 from "../assets/project-portfoliov1.png";
import Img3 from "../assets/project-webshop.png";

export default function ProductCard() {

    return(
        <div className="dark:bg-zinc-800 rounded-md p-4 shadow relative overflow-hidden">
        {/* Image container */}
        <div className="group relative h-62 ">
          {/* Image */}
          <img className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
          {/* Overlay */}
          <div className="group-hover:bg-black/70 group-hover:scale-125 w-full h-full top-0 absolute z-80 transition-all duration-300"></div>
          {/* Pretitle */}
          <div className="absolute -top-full left-4 group-hover:top-80 sm:group-hover:top-[2rem] lg:group-hover:top-[13rem] transition-all duration-500 z-50">
            <span className="text-white">#Spring #MySQL #JavaScript #Thymeleaf</span>
          </div>
          {/* Title */}
          <div className="absolute -top-full left-4 group-hover:top-[22rem] sm:group-hover:top-[11rem] lg:group-hover:top-[15rem] transition-all duration-700 z-50">
            <span className="text-3xl text-white">Recipebook</span>
          </div>
        </div>
        
        {/* Card content */}
        <div className="mt-16">
          <h2 className="font-bold text-[32px] mb-2 text">Link to Project</h2>
          <p className="text">Description</p>
          <p className="text">Description</p>
          <p className="text">Description</p>
          <p className="text">Description</p>
        </div>
      </div>
    )
}