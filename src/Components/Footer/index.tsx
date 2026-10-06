'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between py-8 px-6 mt-12 border-t border-[var(--border)] max-w-[1080px] mx-auto z-10">
      <div className="text-2xl font-black tracking-tighter mb-4 sm:mb-0 text-[var(--text)]">
        DS<span className="text-[var(--accent)]">.</span>
      </div>
      <div className="text-sm font-mono text-[var(--subtle)]">
        © {new Date().getFullYear()} Diogo Soromenho
      </div>
    </footer>
  );
};

export default Footer;
