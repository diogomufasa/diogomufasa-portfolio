'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuExternalLink } from 'react-icons/lu';
import { motion } from 'framer-motion';

import { CardType } from './interface';
import { isValidLink } from '../../utils/utils';
import CardModal from '../CardModal';

const Card: React.FC<CardType & { index?: number }> = ({
  title,
  tags,
  image,
  link,
  github,
  description,
  index = 0
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const onKeyOpen: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full sm:w-[calc(50%-12px)] mb-6 flex flex-col"
    >
      <div
        className="card-hover-effect rounded-2xl cursor-pointer group flex flex-col h-full overflow-hidden border border-[var(--border)] bg-[var(--card)] relative"
        onClick={openModal}               
        role="button"                   
        tabIndex={0}                     
        onKeyDown={onKeyOpen}            
      >
        <div className="h-48 w-full overflow-hidden relative border-b border-[var(--border)]">
          {image ? (
            <Image
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-[var(--bg-elev)] flex items-center justify-center">
              <Image
                className="opacity-20"
                src="/placeholder.svg"
                alt="placeholder"
                height={50}
                width={50}
              />
            </div>
          )}
          
          {link && (
            <div className="absolute top-3 right-3 bg-[var(--bg-elev)] border border-[var(--border)] px-2 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-mono font-medium text-[var(--accent)] backdrop-blur-md bg-opacity-80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
              </span>
              LIVE
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <h2 className="text-xl font-bold tracking-tight mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">{title}</h2>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.split(',').slice(0, 3).map((tag, i) => (
              <span key={i} className="font-mono text-[10px] sm:text-xs text-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-elev)] truncate max-w-[120px]">
                {tag.trim().toUpperCase()}
              </span>
            ))}
            {tags.split(',').length > 3 && (
              <span className="font-mono text-[10px] sm:text-xs text-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-elev)] shrink-0">
                +{tags.split(',').length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-3 w-full">
        {github && (
          <Link 
            href={isValidLink(github) ? github : '/'} 
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--card-hover)] hover:border-[var(--border-strong)] transition-colors text-sm font-medium text-[var(--muted)] hover:text-[var(--text)]"
          >
            <LuGithub size={16} /> <span className="hidden xs:inline">Source</span>
          </Link>
        )}

        {link && (
          <Link 
            href={isValidLink(link) ? link : '/'} 
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--accent)] transition-colors text-sm font-medium text-[var(--accent)]"
            style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}
          >
            <LuExternalLink size={16} /> <span className="hidden xs:inline">Visit</span>
          </Link>
        )}
      </div>

      <CardModal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        description={description}
        tags={tags}
        image={image}
        link={link}
        github={github}
      />
    </motion.div>
  );
};

export default Card;
