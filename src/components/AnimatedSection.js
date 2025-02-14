'use client';
import { motion } from 'framer-motion';

export function AnimatedSection({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
} 