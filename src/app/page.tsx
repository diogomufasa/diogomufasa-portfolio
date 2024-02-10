'use client';

import { useEffect } from 'react';

import { TypeAnimation } from 'react-type-animation';
import { HiAcademicCap } from 'react-icons/hi';
import { MdWorkspacePremium } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';
import { IoIosLaptop } from 'react-icons/io';

import { pageStyles } from '@/Constants';
import AcademicCard from '@/Components/AcademicCard/page';
import ExperienceCard from '@/Components/ExperienceCard/page';
import SkillsCard from '@/Components/SkillsCard/page';
import { Skills } from '@/Components/SkillsCard/constant';
import Subheader from '@/Components/Subheader/page';
import JobStatus from '@/Components/JobStatus';

export default function Home() {
  useEffect(() => {
    const observers = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animateOff');
          entry.target.classList.add('animateOn');

          if (entry.target.className.includes('academic_card')) {
            const dom: any = document.querySelector(
              '.verticalLineWrapper .verticalLine'
            );
            const start1: any = document.getElementById('start1');
            const stop1: any = document.getElementById('stop1');

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
        } else {
          entry.target.classList.add('animateOff');
          entry.target.classList.remove('animateOn');
        }
      });
    });

    const blocks = document.querySelectorAll('.animateOff');

    blocks.forEach(ele => observers.observe(ele));
  }, []);

  return (
    <>
      {/* <TabNavigation /> */}
      <div className={pageStyles.wrapper}>
        <div className={pageStyles.title}>
          <JobStatus />
          <label className='text-[2rem] max-[460px]:text-[1.8rem] sm:text-[2.4rem] font-bold'>
            Hey, I'm Diogo Soromenho
          </label>
          <div>
            <TypeAnimation
              sequence={[
                'A Junior Dev.',
                1000,
                () => {},
                'A student.',
                1000,
                () => {},
                'A traveller.',
                1000,
                () => {},
                'A tech enthusiast.',
                1000,
                () => {},
                '',
              ]}
              wrapper='h2'
              cursor={true}
              repeat={Infinity}
              className='mb-5 text-2xl font-medium text-green-700 dark:text-green-500'
              style={{ display: 'inline-block' }}
            />
          </div>
          <div>
            <p className='inline-block'>I am a 16-year-old passionate student from the coastal beauty of Portugal, I am currently at high-school and I have been coding for 2 years now. I am available for remote opportunities and internships. I am also open to collaborations and projects. Feel free to reach out to me.</p>
          </div>
        </div>

        <div className={pageStyles.divider}></div>

        <>
          <Subheader title='Academic Qualification' icon={<HiAcademicCap />} />
          <div className={`${pageStyles.feed_child2} flex flex-wrap`}>
            <div className='verticalLineWrapper invisible sm:visible'>
              <div className='verticalLine'></div>
              <GiSandsOfTime
                id='start1'
                className='bg-green-700 text-white dark:text-black p-1 text-3xl animate-spin rounded-ful rotate-180 rounded-full'
              />
              <AiFillCheckCircle
                id='stop1'
                className='hidden text-3xl text-green-700 rounded-ful stop1'
              />
            </div>
            <AcademicCard
              logo='/logos/marista-logo.svg'
              collegeName='Colegio Marista de Carcavelos'
              courseName='Secondary/High School'
              courseDuration='2019 - 2024'
              key={1}
            />
            <AcademicCard
              logo='logos\logo-ips.svg'
              collegeName='IPS International Preparatory School'
              courseName='Primary/Middle School'
              courseDuration='2012 - 2019'
              key={2}
            />
            {/* Space */}
            <br></br>
            <br></br>
            <br></br>
          </div>
        </>

        <div className={pageStyles.divider}></div>
        <>
          <Subheader title='Work Experience' icon={<IoIosLaptop />} />
          <div className={`${pageStyles.feed_child2} flex-between flex-wrap`}>
            <ExperienceCard
              logo='/logos/bi4all-logo.svg'
              companyName='Bi4all'
              position='Fullstack Developer'
              engagedDuration=''
              skills={['python', 'C#', '.NET', 'mysql']}
              jobType='On-site'
              workingHours='Internship'
            />
          </div>
        </>

        <div className={pageStyles.divider}></div>

        <div className='animateOff'>
          <Subheader
            title='Skills And Knowledge'
            icon={<MdWorkspacePremium />}
          />
          <div className={`${pageStyles.feed_child2} flex flex-wrap`}>
            <SkillsCard title='Services' items={Skills.services} />
            <SkillsCard title='Frontend' items={Skills.frontend} />
            <SkillsCard title='Backend' items={Skills.backend} />
            <SkillsCard title='Database' items={Skills.database} />
          </div>
        </div>
      </div>
    </>
  );
}
