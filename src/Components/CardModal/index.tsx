'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuX, LuExternalLink } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import { isValidLink } from '../../utils/utils';

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  tags?: string;
  image?: string;
  link?: string;
  github?: string;
};

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  tags,
  image,
  link,
  github,
}: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[95vh] sm:h-auto sm:max-h-[90vh] sm:max-w-3xl overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[var(--bg-elev)] border border-[var(--border)] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[var(--border)] sticky top-0 bg-[var(--bg-elev)]/80 backdrop-blur-md z-10">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] line-clamp-1 pr-4">{title}</h3>
              <button
                aria-label="Close"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[var(--card-hover)] text-[var(--muted)] hover:text-[var(--text)] transition-colors shrink-0"
              >
                <LuX size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 flex flex-col gap-6">
              {image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
              )}

              <div className="flex flex-col gap-4">
                {tags && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[var(--text)] uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {tags.split(',').map((tag, i) => (
                        <span key={i} className="font-mono text-[10px] sm:text-xs text-[var(--text)] px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {description && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[var(--text)] uppercase tracking-wider mb-2 mt-4">About this project</h4>
                    <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-[15px]">
                      {description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-[var(--border)] flex flex-wrap gap-3 mt-auto sticky bottom-0 bg-[var(--bg-elev)] z-10">
              {github && (
                <Link
                  href={isValidLink(github) ? github : '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 sm:px-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--card-hover)] hover:border-[var(--border-strong)] transition-all text-sm font-medium text-[var(--text)] shadow-sm"
                >
                  <LuGithub size={18} /> Source
                </Link>
              )}
              {link && (
                <Link
                  href={isValidLink(link) ? link : '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 sm:px-6 rounded-xl transition-all text-sm font-medium text-[var(--accent)] shadow-sm border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}
                >
                  <LuExternalLink size={18} /> Visit
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}