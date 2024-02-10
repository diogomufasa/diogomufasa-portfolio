'use client';
import React from 'react';
import Image from 'next/image';
import { styles } from './constants';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();

  const currentTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={styles.wrapper}>
      <Image
        src={`/logos/logo-${currentTheme}.svg`}
        width={100}
        height={100}
        alt='logo'
        className={styles.logo}
      />
      <div className={styles.text}>
        <span>© Copyright 2023 Diogo Soromenho</span>
      </div>
    </div>
  );
};

export default Footer;
