// import { RiReactjsLine } from "react-icons/ri";
// import {FaPython } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { DiAws } from "react-icons/di";
// import {FaNodeJs } from "react-icons/fa";
// import { DiHtml5 } from "react-icons/di";
// import {animate, motion} from "framer-motion";

// const iconVariants = (duration) =>({
//     initial: {y: -100},
//     animate: {
//         y: [10, -10],
//         transition:{
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",

//         },
//     },
// });
// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//         <h1 className="my-20 text-center text-4xl"> Technologies</h1>
//         <motion.div
//             whileInView={{opacity: 1,x: 0}}
//             initial={{opacity: 0,x: -100}}
//             transition={{duration: 1.5}}
//             className="flex flex-wrap iteam-center justify-center gap-4">
//             <motion.div 
//                 variants={iconVariants(2.5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800">
//                 <RiReactjsLine className="text-7xl text-cyan-400"/>
//             </motion.div>

//             <motion.div
//                 variants={iconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                  className="rounded-2xl border-4 border-neutral-800">
//                 <FaPython className="text-7xl "/>
//             </motion.div>

//             <motion.div
//                 variants={iconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                  className="rounded-2xl border-4 border-neutral-800">
//                 <SiMongodb className="text-7xl text-green-500"/>
//             </motion.div>

//             <motion.div
//                 variants={iconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800">
//                 <DiAws className="text-7xl text-red-700"/>
//             </motion.div>

//             <motion.div
//                 variants={iconVariants(6)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800">
//                 <FaNodeJs className="text-7xl text-green-500"/>
//             </motion.div>

//             <motion.div
//                 variants={iconVariants(4)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800">
//                 <DiHtml5 className="text-7xl text-yellow-400"/>
//             </motion.div>
//         </motion.div>
//     </div>
//   )
// }

// export default Technologies

import { FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { DiAws } from "react-icons/di";
import { GrDocumentExcel } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -100 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl"> Technologies</h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl" />
          <p className="mt-2 text-sm text-white">Python</p>
        </motion.div>

        {/* Excel */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GrDocumentExcel className="text-7xl text-green-600" />
          <p className="mt-2 text-sm text-white">Advance Excel</p>
        </motion.div>

        {/* SQL */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase className="text-7xl text-blue-500" />
          <p className="mt-2 text-sm text-white">SQL</p>
        </motion.div>

        {/* AWS */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiAws className="text-7xl text-red-700" />
          <p className="mt-2 text-sm text-white">AWS</p>
        </motion.div>
        {/*power BI */}
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
            alt="Power BI"
            className="w-16 h-16"
        />
        <p className="mt-2 text-sm text-white">Power BI</p>
        </motion.div>

        {/* Data Analyst */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaChartBar className="text-7xl text-purple-500" />
          <p className="mt-2 text-sm text-white">Data Analyst</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;