import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WaxSeal } from "./WaxSeal";

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
  // Special cases
  'Grace Coolidge': null, // First Lady, not president
};

export const LetterCard = ({ letter }) => {
  // Get first meaningful paragraph for preview
  const letterContent = letter.letter || '';
  const paragraphs = letterContent.split('\n\n');
  const previewText = paragraphs[1] || paragraphs[0] || '';

  const presidentNumber = presidentNumbers[letter.president];
  const lastNameInitial = letter.president.split(' ').pop()?.charAt(0) || 'P';

  return (
    <Link to={`/letter/${letter.id}`} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="group cursor-pointer w-full max-w-lg mx-auto h-full"
      >
        <div className="relative bg-card paper-texture rounded-sm shadow-letter overflow-hidden transition-shadow duration-300 group-hover:shadow-xl h-full flex flex-col">
          {/* Top decorative border */}
          <div className="h-1.5 bg-gold-gradient" />

          <div className="p-8 sm:p-12 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="flex-1">
                {presidentNumber && (
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    {presidentNumber}{getOrdinalSuffix(presidentNumber)} President of the United States
                  </p>
                )}
                {!presidentNumber && letter.president === 'Grace Coolidge' && (
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    First Lady of the United States
                  </p>
                )}
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-2">
                  {letter.president}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {letter.writtenFrom}
                </p>
              </div>

              <WaxSeal
                initial={lastNameInitial}
                size="md"
                delay={0.5}
              />
            </div>

            {/* Historical Event */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
                {letter.subject}
              </p>
              <p className="font-display text-lg text-foreground italic">
                {letter.eventTitle}
              </p>
            </div>

            {/* Decorative divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[hsl(43_70%_47%_/_0.4)] to-transparent" />

            {/* Letter preview */}
            <div className="relative flex-1">
              <p className="font-body text-lg text-ink leading-relaxed line-clamp-4" style={{ opacity: 0.8 }}>
                "{previewText.substring(0, 200)}..."
              </p>

              {/* Fade out overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[hsl(38_30%_92%)] to-transparent" />
            </div>

            {/* Read more */}
            <div className="mt-8 flex items-center justify-center gap-3 text-gold group-hover:text-gold-dark transition-colors mt-auto">
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [-4, 0, -4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
              <span className="text-sm font-medium uppercase tracking-wider">Read the Letter</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </div>

          {/* Decorative corner flourishes */}
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[hsl(43_75%_38%_/_0.3)] rounded-tl-sm" />
          <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[hsl(43_75%_38%_/_0.3)] rounded-tr-sm" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-[hsl(43_75%_38%_/_0.3)] rounded-bl-sm" />
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[hsl(43_75%_38%_/_0.3)] rounded-br-sm" />
        </div>
      </motion.article>
    </Link>
  );
};

function getOrdinalSuffix(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
