'use client';

import Card from '@/Components/Card';
import Subheader from '@/Components/Subheader/page';
import { pageStyles, CARD_ITEMS } from '@/Constants';
import React, { useEffect } from 'react';
import { LuSearch } from 'react-icons/lu';

const ProjectFeed = () => {
  useEffect(() => {
    const observers = new IntersectionObserver(entries => {
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

    blocks.forEach(ele => observers.observe(ele));
  }, []);

  return (
    <>
      <div className={pageStyles.wrapper}>
        <Subheader title='Projects' icon={<LuSearch />} />
        <div className={pageStyles.feed_child2}>
          {CARD_ITEMS.map((d: any, i: number) => {
            return (
              <Card
                key={i}
                id={d.id}
                title={d.title}
                description={d.description}
                image={d.image}
                link={d.link}
                github={d.github}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectFeed;
