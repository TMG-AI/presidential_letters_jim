import { motion } from "framer-motion";
import { PresidentialSeal } from "./PresidentialSeal";

export const HeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-6 overflow-hidden">
      {/* Background vignette */}
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      {/* Content - Side by side layout */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Presidential Seal - Left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <PresidentialSeal size="lg" animate />
          </motion.div>

          {/* Text content - Right side */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold font-medium mb-3"
            >
              A Personal Collection For
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4"
            >
              <span className="pointer-events-none select-all">Jim Messina</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="my-5 h-px w-32 bg-gradient-to-r from-transparent via-[hsl(43_75%_38%)] to-transparent md:mx-0 mx-auto"
            />

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-display text-xl sm:text-2xl text-[hsl(220_30%_28%)] mb-4"
            >
              Presidential Letters Through History
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-body text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Personal correspondence from America's leaders, written as if you stood among them during history's most pivotal moments.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Decorative corner flourishes */}
      <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[hsl(43_75%_38%_/_0.2)]" />
      <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-[hsl(43_75%_38%_/_0.2)]" />
      <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-[hsl(43_75%_38%_/_0.2)]" />
      <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[hsl(43_75%_38%_/_0.2)]" />
    </section>
  );
};
