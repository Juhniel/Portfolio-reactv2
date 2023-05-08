import {motion, AnimatePresence} from "framer-motion"
import {fadeIn, fadeOut} from "../variants"

export default function AllProjects() {
    return(
        <motion.section 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        id="work"
        className="section"
        >
            <h1 className="text">Hello world test test test</h1>
            <h1 className="text">Hello world test test test</h1>
            <h1 className="text">Hello world test test test</h1>
            <h1 className="text">Hello world test test test</h1>
        </motion.section>
    )
}