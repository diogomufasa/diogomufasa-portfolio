'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuArrowUpRight } from 'react-icons/lu';
import { CgLivePhoto } from 'react-icons/cg';

import useCard from './useCard';
import { styles } from './constants';
import { CardType } from './interface';
import { isValidLink } from '../../Lib/utils';

const Card: React.FC<CardType> = ({
  title,
  description,
  image,
  link,
  github,
  id,
}) => {
  const { showArrowIcon, handleMouseOverFooter, handleMouseLeaveFooter } =
    useCard();

  return (
    <div>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.para}>{description.toUpperCase()}</p>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            alt={title}
            height={250}
            width={300}
          />
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
    </div>
  );
};

export default Card;
