'use client';

import { useState } from 'react';
import { RiRadioButtonLine } from 'react-icons/ri';

import { styles, JOB_STATUS } from './constants';

const JobStatus = () => {
  const [status, setStatus] = useState(JOB_STATUS[0]);

  return (
    <div className='flex justify-between my-5 flex-wrap gap-1'>
      <div className={styles.wrapper1}>
        <RiRadioButtonLine className={styles.online} />
        <span className='font-verdana'>{status}</span>
      </div>
    </div>
  );
};

export default JobStatus;
