import { motion } from "framer-motion";
import presidentialSeal from "../assets/presidential-seal.png";

export const PresidentialSeal = ({ size = "md", animate = true }) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-40 h-40"
  };

  return (
    <motion.div
      initial={animate ? { scale: 0.8, opacity: 0, rotate: -10 } : false}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`${sizeClasses[size]} relative`}
    >
      <img
        src={presidentialSeal}
        alt="Seal of the President of the United States"
        className="w-full h-full object-contain rounded-full"
        style={{
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))"
        }}
      />
    </motion.div>
  );
};
