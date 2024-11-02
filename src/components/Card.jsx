import React from "react";
import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";

const Card = ({ reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileHover={{
          scale: 1,
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
        className=" relative w-60 h-72 rounded-[20px] bg-slate-200/70 px-5 py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-light">
          {" "}
          magni eaque dolorum velit accusantium odit quia harum.
        </p>

        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-5 py-4  mb-1">
            <h5>.5mb</h5>
            <span className="w-6 h-6 bg-zinc-400 rounded-full flex items-center justify-center cursor-pointer">
              <MdOutlineDownloading size=".7em" color="#fff" />
            </span>
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download now</h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={reference}
        whileHover={{
          scale: 1,
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
        className=" relative w-60 h-72 rounded-[20px] bg-slate-200/70 px-5 py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-light">
          {" "}
          magni eaque dolorum velit accusantium odit quia harum.
        </p>

        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-5 py-4  mb-1">
            <h5>.5mb</h5>
            <span className="w-6 h-6 bg-zinc-400 rounded-full flex items-center justify-center cursor-pointer">
              <MdOutlineDownloading size=".7em" color="#fff" />
            </span>
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download now</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
