import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-parchment-gradient paper-texture flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-6"
      >
        <span className="text-6xl text-gold mb-6 block">✦</span>
        <h1 className="font-display text-4xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          This letter seems to have been lost in the archives.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-[hsl(38_33%_96%)] rounded-sm hover:bg-[hsl(220_35%_22%)] transition-colors"
        >
          ← Return to the Inbox
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
