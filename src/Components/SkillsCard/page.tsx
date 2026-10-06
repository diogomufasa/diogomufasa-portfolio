import React from 'react';
import { SkillsCardProps } from './types';
import { motion } from 'framer-motion';

const SkillsCard = ({ title, items }: SkillsCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className='w-full card-hover-effect p-5 sm:p-6 mb-2'
    >
      <h4 className='font-mono text-xs font-semibold text-[var(--subtle)] uppercase tracking-widest mb-4'>
        {title}
      </h4>
      <div className='flex flex-wrap gap-2'>
        {items?.map((d, i) => (
          <div 
            key={i} 
            className='flex items-center gap-1.5 font-medium text-sm px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]'
          >
            {d?.Icon && <span className="opacity-70">{d.Icon}</span>}
            <span>{d?.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
