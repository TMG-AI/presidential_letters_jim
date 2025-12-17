import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { letters } from "../data/letters";

// Map of president numbers
const presidentNumbers = {
  'George Washington': 1,
  'John Adams': 2,
  'Thomas Jefferson': 3,
  'James Madison': 4,
  'James Monroe': 5,
  'John Quincy Adams': 6,
  'Andrew Jackson': 7,
  'Martin Van Buren': 8,
  'William Henry Harrison': 9,
  'John Tyler': 10,
  'James K. Polk': 11,
  'Zachary Taylor': 12,
  'Millard Fillmore': 13,
  'Franklin Pierce': 14,
  'James Buchanan': 15,
  'Abraham Lincoln': 16,
  'Andrew Johnson': 17,
  'Ulysses S. Grant': 18,
  'Rutherford B. Hayes': 19,
  'James A. Garfield': 20,
  'Chester A. Arthur': 21,
  'Grover Cleveland': 22,
  'Benjamin Harrison': 23,
  'William McKinley': 25,
  'Theodore Roosevelt': 26,
  'William Howard Taft': 27,
  'Woodrow Wilson': 28,
  'Warren G. Harding': 29,
  'Calvin Coolidge': 30,
  'Herbert Hoover': 31,
  'Franklin D. Roosevelt': 32,
  'Harry S. Truman': 33,
  'Dwight D. Eisenhower': 34,
  'John F. Kennedy': 35,
  'Lyndon B. Johnson': 36,
  'Richard Nixon': 37,
  'Gerald Ford': 38,
  'Jimmy Carter': 39,
  'Ronald Reagan': 40,
  'George H. W. Bush': 41,
  'Bill Clinton': 42,
  'George W. Bush': 43,
  'Barack Obama': 44,
  'Donald Trump': 45,
  'Joe Biden': 46,
  'Grace Coolidge': null,
};

function getOrdinalSuffix(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

const Letter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showContext, setShowContext] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const letter = letters.find((l) => l.id === id);

  if (!letter) {
    return (
      <div className="min-h-screen bg-parchment-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-primary mb-4">Letter not found</h1>
          <Link to="/" className="text-gold hover:text-gold-dark transition-colors">
            ← Return home
          </Link>
        </div>
      </div>
    );
  }

  const letterContent = letter.letter || '';
  const paragraphs = letterContent.split('\n\n');
  const context = letter.historicalContext;
  const presidentNumber = presidentNumbers[letter.president];

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
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors bg-card hover:bg-[hsl(38_30%_88%)] rounded-full shadow-lg"
          style={{ opacity: 0.8 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-10 sm:py-12">
        {/* Letterhead */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              From the Desk of
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
              {letter.president}
            </h1>
            {presidentNumber && (
              <p className="text-sm text-muted-foreground">
                {presidentNumber}{getOrdinalSuffix(presidentNumber)} President of the United States
              </p>
            )}
            {!presidentNumber && letter.president === 'Grace Coolidge' && (
              <p className="text-sm text-muted-foreground">
                First Lady of the United States
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto mt-4 mb-4 h-px w-40 bg-gradient-to-r from-transparent via-[hsl(43_75%_38%)] to-transparent"
          />
        </div>

        {/* Event and Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-6"
        >
          <p className="font-display text-xl sm:text-2xl text-gold font-semibold mb-2">
            {letter.subject}
          </p>
          <p className="text-base text-muted-foreground italic">
            {letter.writtenFrom}
          </p>
        </motion.div>

        {/* Letter Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <div className="font-body text-lg sm:text-xl leading-relaxed text-ink space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Signature */}
          <div className="mt-8 pt-6 border-t border-[hsl(38_25%_80%)]">
            <p className="italic text-[hsl(220_25%_25%)] font-display text-lg">
              {letter.signature}
            </p>
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-muted-foreground mt-6 italic"
        >
          Digital Presidential Twin | AI Historical Simulation
        </motion.p>

        {/* Historical Context Toggle */}
        {context && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8"
          >
            <button
              onClick={() => setShowContext(!showContext)}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-primary text-[hsl(38_33%_96%)] hover:bg-[hsl(220_35%_22%)] transition-colors rounded-sm shadow-md"
            >
              <span className="text-base font-semibold uppercase tracking-wider">
                Historical Context
              </span>
              <motion.div
                animate={{ rotate: showContext ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showContext && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-8">
                    {/* Context Title */}
                    <h2 className="font-display text-2xl sm:text-3xl text-primary text-center">
                      {letter.eventTitle}
                    </h2>

                    {/* Background */}
                    {context.background && (
                      <p className="font-body text-lg leading-relaxed text-ink" style={{ opacity: 0.9 }}>
                        {context.background}
                      </p>
                    )}

                    {/* What the President Knew */}
                    {context.whatPresidentKnew && (
                      <div className="bg-[hsl(43_60%_90%)] border border-[hsl(43_50%_80%)] rounded p-4">
                        <h3 className="font-display text-xl text-gold font-semibold mb-3">
                          What the President Knew
                        </h3>
                        <p className="font-body text-lg leading-relaxed text-ink" style={{ opacity: 0.9 }}>
                          {context.whatPresidentKnew}
                        </p>
                      </div>
                    )}

                    {/* Timeline / Key Facts */}
                    {context.keyFacts && context.keyFacts.length > 0 && (
                      <div>
                        <h3 className="font-display text-xl text-gold font-semibold mb-4">
                          Timeline
                        </h3>
                        <ul className="space-y-4">
                          {context.keyFacts.map((fact, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="text-gold mt-1.5">•</span>
                              <span className="font-body text-base leading-relaxed text-ink" style={{ opacity: 0.85 }}>
                                {fact}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Quote */}
                    {context.quote && (
                      <blockquote className="relative py-6 px-8 border-l-4 border-[hsl(43_75%_38%_/_0.5)] bg-card rounded-r-sm" style={{ opacity: 0.5 }}>
                        <p className="font-display text-xl italic text-primary leading-relaxed mb-4">
                          "{context.quote.text}"
                        </p>
                        <cite className="text-sm text-muted-foreground not-italic">
                          — {context.quote.attribution}
                        </cite>
                      </blockquote>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Navigation */}
        {letters.length > 1 && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => {
                const idx = letters.findIndex(l => l.id === letter.id);
                if (idx < letters.length - 1) {
                  navigate(`/letter/${letters[idx + 1].id}`);
                }
              }}
              disabled={letters.findIndex(l => l.id === letter.id) === letters.length - 1}
              className="text-muted-foreground hover:text-foreground disabled:opacity-30 text-sm transition-colors"
            >
              ← Older Letter
            </button>
            <button
              onClick={() => {
                const idx = letters.findIndex(l => l.id === letter.id);
                if (idx > 0) {
                  navigate(`/letter/${letters[idx - 1].id}`);
                }
              }}
              disabled={letters.findIndex(l => l.id === letter.id) === 0}
              className="text-muted-foreground hover:text-foreground disabled:opacity-30 text-sm transition-colors"
            >
              Newer Letter →
            </button>
          </div>
        )}
      </div>

      {/* Gold border bottom */}
      <div className="h-2 bg-gold-gradient" />
    </div>
  );
};

export default Letter;
