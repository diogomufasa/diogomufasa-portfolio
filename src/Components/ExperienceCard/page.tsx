import Image from 'next/image';
import React from 'react';
import { ExperienceCardProps } from './types';

const ExperienceCard = ({
  logo,
  companyName,
  position,
  engagedDuration,
  skills,
  workingHours,
  jobType,
}: ExperienceCardProps) => {
  return (
    <div className='experience_card w-full mb-4 animateOff card-hover-effect p-5 sm:p-6'>
      <div className='flex gap-4 sm:gap-6 items-start'>
        <div className='h-[50px] w-[50px] flex justify-center items-center rounded-xl bg-white hidden sm:flex shrink-0 p-2 shadow-sm border border-[var(--border)]'>
          <Image src={logo} width={34} height={34} alt='' className="object-contain" style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className='w-full'>
          <div className='flex-between flex-wrap gap-2 mb-1'>
            <h2 className='text-lg font-semibold tracking-tight m-0 text-[var(--text)]'>{companyName}</h2>
            <div className='font-mono text-[var(--subtle)] text-xs sm:text-sm px-2 py-1 rounded bg-[var(--bg-elev)] border border-[var(--border)]'>{engagedDuration}</div>
          </div>

          <div className='mb-3'>
            <span className='text-[var(--text)] font-medium'>{position}</span>
            <span className='mx-2 text-[var(--border-strong)]'>|</span>
            <span className='text-[var(--muted)] text-sm'>{workingHours} · {jobType}</span>
          </div>
          
          <div className='flex flex-wrap gap-2 mt-2'>
            {skills.map((skill, index) => (
              <span key={index} className='font-mono text-xs text-[var(--muted)] px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg-elev)]'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
