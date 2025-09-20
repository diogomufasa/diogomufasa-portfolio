
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuX, LuArrowUpRight } from 'react-icons/lu';
import { CgLivePhoto } from 'react-icons/cg';
import { isValidLink } from '../../utils/utils';
import { styles } from './constants';

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
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className={styles.closeBtn}
          >
            <LuX size={20} />
          </button>
        </div>

        <div className={styles.body}>
          {image ? (
            <div className={styles.imageWrap}>
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          ) : null}
          <p style={{ margin: 0 }}>Technologies:</p>
          {tags ? <p style={{ opacity: 0.8, margin: 0 }}>{tags.toUpperCase()}</p> : null}
          <p style={{ margin: 0 }}>Description:</p>
          {description ? <p style={{ marginTop: 8, lineHeight: 1.6 }}>{description}</p> : null}
        </div>

        <div className={styles.footer}>
          {github && (
            <Link
              href={isValidLink(github) ? github : '/'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <LuGithub /> GitHub <LuArrowUpRight />
            </Link>
          )}
          {link && (
            <Link
              href={isValidLink(link) ? link : '/'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <CgLivePhoto /> Live <LuArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}