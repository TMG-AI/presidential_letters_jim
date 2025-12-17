import { motion } from "framer-motion";
import { LetterCard } from "./LetterCard";
import { letters } from "../data/letters";

export const LettersGallery = () => {
  // Show the first (most recent) letter
  const currentLetter = letters[0];

  if (!currentLetter) {
    return (
      <section className="relative px-6 py-8 sm:py-10">
        <div className="text-center">
          <p className="text-muted-foreground">No letters available yet.</p>
        </div>
      </section>
    );
  }

  // Show up to 8 letters on homepage, rest go to archive
  const displayedLetters = letters.slice(0, 8);
  const hasMoreInArchive = letters.length > 8;

  return (
    <section className="relative px-6 py-6 sm:py-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          {letters.length === 1 && 'Your First Letter Has Arrived'}
          {letters.length === 2 && 'Your First Two Letters Have Arrived'}
          {letters.length === 3 && 'Your Third Letter Has Arrived'}
          {letters.length > 3 && `${letters.length} Letters Have Arrived`}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">
          {letters.length === 1 ? 'A Moment in History Awaits' : 'Moments in History Await'}
        </h2>
      </motion.div>

      {/* Letter cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {displayedLetters.map((letter, index) => (
          <LetterCard key={letter.id} letter={letter} />
        ))}
      </div>

      {/* Archive link if there are more than 8 letters */}
      {hasMoreInArchive && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="/archive"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-[hsl(38_33%_96%)] border border-primary rounded-sm hover:bg-[hsl(220_35%_22%)] transition-colors"
          >
            <span className="text-sm font-medium">
              View All {letters.length} Letters in Archive
            </span>
          </a>
        </motion.div>
      )}

      {/* Coming soon teaser */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[hsl(220_35%_18%_/_0.1)] border border-[hsl(220_35%_18%_/_0.3)] rounded-sm">
          <span className="text-primary">✦</span>
          <span className="text-sm text-foreground font-medium">
            More letters arriving throughout the year
          </span>
          <span className="text-primary">✦</span>
        </div>
      </motion.div>
    </section>
  );
};
