'use client';
import React from 'react';
import { styles } from './constants';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();

  const currentTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={styles.wrapper}>
      <img
        src={`/logos/logo-${currentTheme}.svg`}
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
