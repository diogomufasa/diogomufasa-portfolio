'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuArrowUpRight } from 'react-icons/lu';
import { CgLivePhoto } from 'react-icons/cg';

import useCard from './useCard';
import { styles } from './constants';
import { CardType } from './interface';
import { isValidLink } from '../../utils/utils';
import CardModal from '../CardModal';

const Card: React.FC<CardType> = ({
  title,
  tags,
  image,
  link,
  github,
  id,
  description,
}) => {
  const { showArrowIcon, handleMouseOverFooter, handleMouseLeaveFooter } =
    useCard();

  const [isOpen, setIsOpen] = React.useState(false); // added
  const openModal = () => setIsOpen(true);           // added
  const closeModal = () => setIsOpen(false);         // added
  const onKeyOpen: React.KeyboardEventHandler<HTMLDivElement> = (e) => { // added
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <div>
      <div
        className={styles.card}
        onClick={openModal}               
        role="button"                   
        tabIndex={0}                     
        onKeyDown={onKeyOpen}            
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.para}>{tags.toUpperCase()}</p>
        <div className={styles.imgContainer}>
          {image ? (
            <Image
              className={styles.image}
              src={image}
              alt={title}
              height={250}
              width={300}
            />
          ) : (
            <Image
              className={styles.image}
              src="/placeholder.svg"
              alt="placeholder"
              height={50}
              width={50}
            />
          )}
        </div>
      </div>

      <div className={styles.footer}>
        {github && (
          <div
            className={styles.footer_child}
            onMouseOver={() => handleMouseOverFooter(`${id}-github`)}
            onMouseOut={handleMouseLeaveFooter}
          >
            <Link href={isValidLink(github) ? github : '/'}>
              <div className={styles.flex_between}>
                <div className={styles.badge}>
                  <LuGithub />
                </div>
                {showArrowIcon === `${id}-github` && <LuArrowUpRight />}
              </div>

              <h5 className={styles.title}>Github</h5>
              <p className={styles.sub_title}>Source code</p>
            </Link>
          </div>
        )}

        {link && (
          <div
            className={styles.footer_child}
            onMouseOver={() => handleMouseOverFooter(`${id}-live`)}
            onMouseOut={handleMouseLeaveFooter}
          >
            <Link href={isValidLink(link) ? link : '/'}>
              <div className={styles.flex_between}>
                <div className={styles.badge}>
                  <CgLivePhoto />
                </div>
                {showArrowIcon === `${id}-live` && <LuArrowUpRight />}
              </div>
              <h5 className={styles.title}>Live</h5>
              <p className={styles.sub_title}>Website link</p>
            </Link>
          </div>
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
    </div>
  );
};

export default Card;
