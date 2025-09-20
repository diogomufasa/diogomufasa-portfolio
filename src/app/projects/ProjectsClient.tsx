'use client';

import { useEffect } from 'react';
import Projects from './projects';


export default function ProjectsClient({ projects }: any) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animateOff');
          entry.target.classList.add('animateOn');
        } else {
          entry.target.classList.add('animateOff');
          entry.target.classList.remove('animateOn');
        }
      });
    });

    const blocks = document.querySelectorAll('.animateOff');
    blocks.forEach(ele => observer.observe(ele));

    return () => observer.disconnect();
  }, []);

  // Pass projects to your presentational component
  return <Projects projects={projects} />;
}