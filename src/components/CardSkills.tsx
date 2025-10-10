import { motion } from "framer-motion";
import { DataSkills } from "../utils/DataSkills";

export const CardSkills = () => {
  return (
    <>
      {DataSkills.map((stack, idx) => (
        <motion.a
          key={idx}
          href={stack.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: idx * 0.01,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
          }}
          className="
            flex flex-col items-center justify-center
            sm:flex-row sm:justify-start sm:space-x-4
            p-3 sm:p-5
            bg-white rounded-lg shadow-md
            transition-transform duration-300 cursor-pointer
          "
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={stack.logo}
              alt={stack.name}
              className="h-10 w-10 sm:h-10 sm:w-10 object-contain"
            />
          </div>

          {/* Info */}
          <div className="hidden sm:flex flex-col">
            <h3 className="text-base font-semibold text-gray-900">
              {stack.name}
            </h3>
            <p className="text-sm text-gray-500">{stack.type}</p>
          </div>
        </motion.a>
      ))}
    </>
  );
};
