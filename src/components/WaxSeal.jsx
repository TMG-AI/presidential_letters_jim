import { motion } from "framer-motion";

export const WaxSeal = ({ initial = "P", size = "md", delay = 0 }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  const fontSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <motion.div
      initial={{ scale: 1.3, opacity: 0, rotate: -15 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className={`${sizeClasses[size]} relative`}
    >
      {/* Wax seal base */}
      <div
        className="absolute inset-0 rounded-full shadow-seal"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 30% 30%, hsl(0, 55%, 55%) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 70%, hsl(0, 70%, 30%) 0%, transparent 50%),
            linear-gradient(135deg, hsl(0, 65%, 45%) 0%, hsl(0, 65%, 38%) 50%, hsl(0, 70%, 32%) 100%)
          `,
        }}
      />

      {/* Wax drips */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-2"
        style={{
          background: "hsl(0, 65%, 38%)",
          borderRadius: "0 0 50% 50%",
          filter: "blur(1px)"
        }}
      />

      {/* Inner circle impression */}
      <div
        className="absolute inset-2 rounded-full flex items-center justify-center"
        style={{
          background: `
            radial-gradient(circle at 40% 40%, hsl(0, 60%, 48%) 0%, transparent 30%),
            linear-gradient(180deg, hsl(0, 65%, 42%) 0%, hsl(0, 70%, 35%) 100%)
          `,
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(255,255,255,0.1)"
        }}
      >
        <span
          className={`${fontSize[size]} font-display font-bold text-amber-100/90`}
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.3)"
          }}
        >
          {initial}
        </span>
      </div>
    </motion.div>
  );
};
