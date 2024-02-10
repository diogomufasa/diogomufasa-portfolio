'use client';

import React from 'react';
import { pageStyles } from '@/Constants';

const ProjectFeed = () => {
  return (
    <>
      <div className='wrapper'>
        <h1>Contact Me</h1>
        <p className='my-5'>
          I’m eager to get your feedback! The details you need are below.
        </p>
        <div className='border border-slate-100 dark:border-zinc-800 px-5 pt-5 pb-10 rounded-md'>
          <div className='flex justify-between mb-5'>
            <div className='w-[49%]'>
              <label className='font-sm'>Fullname</label>
              <input
                className='w-full mt-1 py-[7px] px-3 outline-none border border-slate-60 dark:border-zinc-500 dark:bg-zinc-800 rounded'
                placeholder='Will Smith'
              />
            </div>
            <div className='w-[49%]'>
              <label className='font-sm '>Email</label>
              <input
                className='w-full mt-1 py-[7px] px-3 outline-none border border-slate-60 dark:border-zinc-500 dark:bg-zinc-800 rounded'
                placeholder='smith@gmail.com'
              />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <label className='font-sm '>Message</label>
            <textarea
              className='mt-1 py-[7px] px-3 outline-none border border-slate-60 dark:border-zinc-500 dark:bg-zinc-800 rounded'
              placeholder='Write your opinion here...'
              rows={5}
            />
          </div>
          <button className='transition duration-300 ease-in-out p-2 bg-slate-900 text-white hover:bg-green-700 dark:bg-zinc-800 mt-5 w-full rounded'>
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectFeed;
