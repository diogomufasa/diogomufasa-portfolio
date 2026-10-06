import React from 'react';
import Image from 'next/image';
import { AcademicCardProps } from './types';
import { motion } from 'framer-motion';

const AcademicCard = ({
  logo,
  collegeName,
  courseName,
  courseDuration,
}: AcademicCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className='sm:ml-[60px] w-full flex-between mb-5 card-hover-effect p-4'
    >
      <div className='h-[60px] w-[80px] flex justify-center items-center rounded-lg bg-white hidden sm:flex overflow-hidden shrink-0'>
        {typeof logo === 'string' ? <Image src={logo} width={40} height={40} alt='' className="object-contain" style={{ width: 'auto', height: 'auto' }} /> : <>{logo}</>}
      </div>
      <div className='sm:mx-5 w-full'>
        <div className='flex-between flex-wrap mb-1'>
          <h2 className='text-lg font-semibold tracking-tight m-0 text-[var(--text)]'>{collegeName}</h2>
          <span className='font-mono text-[var(--subtle)] text-sm'>{courseDuration}</span>
        </div>
        <div className='flex-between flex-wrap'>
          <span className='text-[var(--muted)] font-medium'>{courseName}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AcademicCard;
