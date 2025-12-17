import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { letters } from "../data/letters";
import { WaxSeal } from "../components/WaxSeal";

const Archive = () => {
  return (
    <div className="min-h-screen bg-parchment-gradient paper-texture">
      {/* Gold border top */}
      <div className="h-2 bg-gold-gradient" />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-20"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors bg-card hover:bg-[hsl(38_30%_88%)] rounded-full shadow-lg"
          style={{ opacity: 0.8 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-10 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            The Presidential Inbox
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
            Letter Archive
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto mt-4 mb-4 h-px w-40 bg-gradient-to-r from-transparent via-[hsl(43_75%_38%)] to-transparent"
          />
          <p className="text-muted-foreground">
            {letters.length} letters received
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="space-y-4">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/letter/${letter.id}`}
                className="block p-6 bg-card rounded-sm shadow-letter hover:shadow-xl transition-shadow border border-[hsl(38_25%_80%)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-display text-xl font-semibold text-primary mb-1">
                      {letter.president}
                    </p>
                    <p className="text-sm text-gold font-medium mb-2">
                      "{letter.subject}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {letter.eventTitle}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-muted-foreground">
                      {letter.writtenFrom}
                    </span>
                    <WaxSeal
                      initial={letter.president.split(' ').pop()?.charAt(0) || 'P'}
                      size="sm"
                      delay={0.3 + index * 0.1}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          {52 - letters.length} letters to come
        </motion.p>
      </div>

      {/* Gold border bottom */}
      <div className="h-2 bg-gold-gradient" />
    </div>
  );
};

export default Archive;
