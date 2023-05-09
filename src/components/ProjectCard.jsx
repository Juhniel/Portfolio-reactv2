import Img1 from "../assets/project-recipebook.png";
import Img2 from "../assets/project-portfoliov1.png";
import Img3 from "../assets/project-webshop.png";

export default function ProductCard() {

    return(
        <div className="dark:bg-zinc-800 rounded-md p-4 shadow h-[26em] relative overflow-hidden">
        {/* Image container */}
        <div className="group relative h-62 ">
          {/* Image */}
          <img className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
          {/* Overlay */}
          <div className="group-hover:bg-black/70 group-hover:scale-125 w-full h-full top-0 absolute z-80 transition-all duration-300"></div>
          {/* Pretitle */}
          <div className="absolute -top-full left-4 group-hover:top-48 transition-all duration-500 z-50">
            <span className="text-white">#Spring #MySQL #JavaScript #Thymeleaf</span>
          </div>
          {/* Title */}
          <div className="absolute -bottom-full left-4 group-hover:bottom-0 transition-all duration-700 z-50">
            <span className="text-3xl text-white">Recipebook</span>
          </div>
        </div>
        
        {/* Card content */}
        <div className="mt-12">
          <h2 className="font-bold mb-2">Title</h2>
          <p>Description</p>
        </div>
      </div>
    )
}