import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative px-6 py-12 border-t border-[hsl(43_75%_38%_/_0.2)]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-3xl text-gold">✦</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground mb-4"
        >
          A gift for Jim Messina
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[hsl(43_70%_47%_/_0.4)] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs text-muted-foreground italic"
        >
          AI Historical Simulation — Not actual presidential correspondence
        </motion.p>
      </div>
    </footer>
  );
};
