import { createClient } from '@/utils/supabase/server';
import HomeClient from './HomeClient';
import { Skills as DefaultSkills } from '@/Components/SkillsCard/constant';

export const revalidate = 0;

export default async function Page() {
  const supabase = await createClient();

  // Try to fetch editable data from Supabase.
  // We wrap in individual try-catch blocks to fallback smoothly if a table doesn't exist yet.
  
  let heroData = null;
  try {
    const { data } = await supabase.from('home_hero').select('*').single();
    if (data) heroData = data;
  } catch (e) {}

  let experiencesData = null;
  try {
    const { data } = await supabase.from('home_experiences').select('*').order('id', { ascending: true });
    if (data && data.length > 0) experiencesData = data;
  } catch (e) {}

  let academicsData = null;
  try {
    const { data } = await supabase.from('home_academics').select('*').order('id', { ascending: true });
    if (data && data.length > 0) academicsData = data;
  } catch (e) {}

  let skillsData = null;
  try {
    const { data } = await supabase.from('home_skills').select('*').single();
    if (data) skillsData = data;
  } catch (e) {}

  // Fallbacks if data doesn't exist in Supabase (which it won't until the user creates the tables)
  const defaultHero = {
    statusText: 'Open to internships & collaborations',
    title: "Hey, I'm Diogo.",
    subtitle: 'I build with AI, data & the web.',
    description: '18-year-old developer from Portugal 🇵🇹, studying <strong class="text-[var(--text)] font-semibold">Computer Science & Business at Trinity College Dublin</strong>. I\'ve spent the last year shipping AI and data science work at <strong class="text-[var(--text)] font-semibold">BI4ALL</strong> — from voice agents to full-stack apps.',
    githubUrl: 'https://github.com/diogomufasa',
    projectsShipped: '8+',
    experienceYears: '1 yr+',
    location: 'Dublin 🇮🇪'
  };

  const defaultExperiences = [
    {
      logo: "/logos/bi4all-logo.svg",
      companyName: "BI4ALL",
      position: "Trainee",
      engagedDuration: "1 year",
      skills: ['AI and Data Science'],
      jobType: "Remote",
      workingHours: "Part-time"
    },
    {
      logo: "/logos/bi4all-logo.svg",
      companyName: "BI4ALL",
      position: "Internship",
      engagedDuration: "2 months",
      skills: ['Python', 'AI & Machine Learning'],
      jobType: "Hybrid",
      workingHours: "Full-time"
    }
  ];

  const defaultAcademics = [
    {
      logo: "/logos/tcd-logo.png",
      collegeName: "Trinity College Dublin",
      courseName: "BSc Computer Science and Business",
      courseDuration: "2026 - present"
    },
    {
      logo: "/logos/maristas-logo.svg",
      collegeName: "Colegio Marista de Carcavelos",
      courseName: "Secondary/High School",
      courseDuration: "2023 - 2026"
    }
  ];

  const defaultSkills = {
    frontend: DefaultSkills.frontend,
    backend: DefaultSkills.backend,
    services: DefaultSkills.services,
    database: DefaultSkills.database
  };

  // Merge fetched data with fallbacks
  const finalHero = heroData || defaultHero;
  const finalExperiences = experiencesData || defaultExperiences;
  const finalAcademics = academicsData || defaultAcademics;
  const finalSkills = skillsData || defaultSkills;

  return (
    <HomeClient 
      hero={finalHero} 
      experiences={finalExperiences} 
      academics={finalAcademics} 
      skills={finalSkills} 
    />
  );
}
