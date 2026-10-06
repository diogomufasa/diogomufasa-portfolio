'use client';

import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { HiAcademicCap } from 'react-icons/hi';
import { MdWorkspacePremium } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';
import { IoIosLaptop } from 'react-icons/io';
import { LuArrowRight } from 'react-icons/lu';
import Link from 'next/link';

import { pageStyles } from '@/Constants';
import AcademicCard from '@/Components/AcademicCard/page';
import ExperienceCard from '@/Components/ExperienceCard/page';
import SkillsCard from '@/Components/SkillsCard/page';
import { Skills } from '@/Components/SkillsCard/constant';
import Subheader from '@/Components/Subheader/page';
import JobStatus from '@/Components/JobStatus';

export default function Home() {
  useEffect(() => {
    const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animateOff');
          entry.target.classList.add('animateOn');

          if (entry.target.className.includes('academic_card')) {
            const dom: any = document.querySelector('.verticalLineWrapper .verticalLine');
            const start1: any = document.getElementById('start1');
            const stop1: any = document.getElementById('stop1');
            
            if(start1 && stop1) {
              start1.style.display = 'flex';
              stop1.style.display = 'none';
              let height = 10;
  
              const interval = setInterval(() => {
                height += 10;
                if (dom) dom.style.height = `${height}px`;
  
                if (height > 215) {
                  start1.style.display = 'none';
                  stop1.style.display = 'flex';
                  clearInterval(interval);
                }
              }, 50);
            }
          }
        }
      });
    }, { threshold: 0.1 });

    const blocks = document.querySelectorAll('.animateOff');
    blocks.forEach((ele) => observers.observe(ele));

    return () => {
      blocks.forEach((ele) => observers.unobserve(ele));
    };
  }, []);

  return (
    <div className="wrapper px-4 sm:px-0 mt-16 sm:mt-24">
      {/* HERO SECTION */}
      <header className="mb-20 animateOff">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm font-medium text-[var(--muted)] font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          Open to internships & collaborations
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Hey, I'm Diogo.<br />
          <span className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-transparent bg-clip-text">
            I build with AI, data & the web.
          </span>
        </h1>
        
        <div className="text-lg sm:text-xl text-[var(--muted)] max-w-[600px] mb-8 leading-relaxed">
          <p>
            18-year-old developer from Portugal 🇵🇹, studying <strong className="text-[var(--text)] font-semibold">Computer Science & Business at Trinity College Dublin</strong>.
            I've spent the last year shipping AI and data science work at <strong className="text-[var(--text)] font-semibold">BI4ALL</strong> — from voice agents to full-stack apps.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors">
            View my work <LuArrowRight />
          </Link>
          <a href="https://github.com/diogomufasa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-strong)] bg-[var(--card)] hover:bg-[var(--card-hover)] font-semibold transition-colors">
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-[var(--border)]">
          <div>
            <span className="block text-3xl font-bold tracking-tight mb-1">8+</span>
            <span className="text-sm font-mono text-[var(--subtle)]">projects shipped</span>
          </div>
          <div>
            <span className="block text-3xl font-bold tracking-tight mb-1">1 yr+</span>
            <span className="text-sm font-mono text-[var(--subtle)]">industry experience</span>
          </div>
          <div>
            <span className="block text-3xl font-bold tracking-tight mb-1">Dublin 🇮🇪</span>
            <span className="text-sm font-mono text-[var(--subtle)]">currently based</span>
          </div>
        </div>
      </header>

      <div className={pageStyles.divider}></div>

      {/* EXPERIENCE */}
      <div className="animateOff">
        <Subheader title="Work Experience" icon={<IoIosLaptop />} />
        <div className={`${pageStyles.feed_child2} gap-6`}>
          <ExperienceCard
            logo="/logos/bi4all-logo.svg"
            companyName="BI4ALL"
            position="Trainee"
            engagedDuration="1 year"
            skills={['AI and Data Science']}
            jobType="Remote"
            workingHours="Part-time"
          />
          <ExperienceCard
            logo="/logos/bi4all-logo.svg"
            companyName="BI4ALL"
            position="Internship"
            engagedDuration="2 months"
            skills={['Python', 'AI & Machine Learning']}
            jobType="Hybrid"
            workingHours="Full-time"
          />
        </div>
      </div>

      <div className={pageStyles.divider}></div>

      {/* ACADEMICS */}
      <div className="animateOff">
        <Subheader title="Academic Qualification" icon={<HiAcademicCap />} />
        <div className={`${pageStyles.feed_child2} relative`}>
          <div className="verticalLineWrapper invisible sm:visible absolute left-12 top-10 h-[calc(100%-40px)]">
            <div className="verticalLine h-full"></div>
          </div>
          <AcademicCard
            logo="/logos/tcd-logo.png"
            collegeName="Trinity College Dublin"
            courseName="BSc Computer Science and Business"
            courseDuration="2026 - present"
            key={1}
          />
          <AcademicCard
            logo="/logos/maristas-logo.svg"
            collegeName="Colegio Marista de Carcavelos"
            courseName="Secondary/High School"
            courseDuration="2023 - 2026"
            key={2}
          />
        </div>
      </div>

      <div className={pageStyles.divider}></div>

      {/* SKILLS */}
      <div className="animateOff">
        <Subheader title="Skills And Knowledge" icon={<MdWorkspacePremium />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <SkillsCard title="Frontend" items={Skills.frontend} />
          <SkillsCard title="Backend" items={Skills.backend} />
          <SkillsCard title="Services" items={Skills.services} />
          <SkillsCard title="Database" items={Skills.database} />
        </div>
      </div>
    </div>
  );
}
