'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMoon, FiSun } from 'react-icons/fi';
import { LuLayoutDashboard, LuFolder, LuContact, LuGithub, LuLinkedin } from 'react-icons/lu';
import { useTheme } from 'next-themes';

const DEFAULT_TAB_ITEMS = [
  { title: 'Feed', path: '/', icon: <LuLayoutDashboard size={16} /> },
  { title: 'Projects', path: '/projects', icon: <LuFolder size={16} /> },
  { title: 'Contact', path: '/contact-me', icon: <LuContact size={16} /> },
];

const MEDIA_TAB_ITEMS = [
  { title: 'Github', path: 'https://github.com/diogomufasa', icon: <LuGithub size={16} /> },
  { title: 'Linkedin', path: 'https://www.linkedin.com/in/diogo-soromenho/', icon: <LuLinkedin size={16} /> },
];

export default function TabNavigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="top-nav">
      <Link href="/" className="font-bold text-[var(--text)] px-3 pr-4">
        DS
      </Link>
      
      {DEFAULT_TAB_ITEMS.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-[14px] font-medium transition-colors ${
            pathname === item.path
              ? 'bg-[var(--card-hover)] text-[var(--text)]'
              : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--card-hover)]'
          }`}
        >
          <span className="sm:hidden">{item.icon}</span>
          <span className="hidden sm:inline">{item.title}</span>
        </Link>
      ))}

      <div className="w-[1px] h-5 bg-[var(--border)] mx-1"></div>

      {MEDIA_TAB_ITEMS.map((item) => (
        <a
          key={item.path}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--card-hover)] rounded-full transition-colors"
          title={item.title}
        >
          {item.icon}
        </a>
      ))}
      
      <button
        onClick={toggleTheme}
        className="p-2 ml-1 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--card-hover)] rounded-full transition-colors flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        {mounted && theme === 'light' ? <FiSun size={16} /> : <FiMoon size={16} />}
      </button>
    </nav>
  );
}
