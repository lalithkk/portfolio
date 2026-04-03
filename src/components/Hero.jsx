import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/lalith2.jpg";
import { delay, motion, transform } from "framer-motion";

const container = (delay) =>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-star">
                    
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-6 text-6xl font-thin tracking-tight lg:mt-0 lg:text-8xl">Lalith Kumar Kaicharla 
                    </motion.h1>
                    <motion.span
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xm tracking-tight text-transparent">Data Analyst|Excel,SQL,Python,Power BI|Data Visualization & Reporting
                    </motion.span>
                    <motion.p 
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                     className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}

                    </motion.p>
                </div>
            </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                            initial={{ x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}
                            src={profilePic} alt= "k.lalith kumar"
                            className="w-1/2 h-auto"/>


                    </div>
                </div>
        </div > 
    </div>
  )
}

export default Hero
