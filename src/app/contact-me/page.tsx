'use client';

import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { pageStyles } from '@/Constants';
import { contactStyles } from './constant';
import type { FormData } from '@/types';
import { isValidEmail, sendEmail, redirectTo } from '@/Lib/utils';

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  
  const onSubmit = (data: FormData) => {
    if (!isValidEmail(data.email)) {
      alert('Please enter a valid email address');
      return;
    }
    sendEmail(data);
  };

  const handleFormSubmit = () => {

    setTimeout(() => {
      setSubmitted(true);
    }, 2000);
  }


  return (
    <>
      <div className={pageStyles.wrapper}>
        {submitted ? (
          <div className={contactStyles.successMessage}>
            <p>Thank you! Your message has been sent successfully!</p>
          </div>
        ) : (
          <>
        <h1>Contact Me</h1>
        <p className='my-5'>
          I’m eager to get your feedback! The details you need are below.
        </p>
        <form className={contactStyles.formContainer} onSubmit={handleSubmit(onSubmit)} >
          <div className='flex justify-between mb-5'>
            <div className={contactStyles.labelContainer}>
              <label className={contactStyles.label} 
              htmlFor='name'
              >Name</label>
              <input
                className={contactStyles.input}
                type='text'
                placeholder='Will Smith'
                {...register('name', { required: true })}
                required
              />
            </div>
            <div className={contactStyles.labelContainer}>
              <label className={contactStyles.label}
              htmlFor='email'
              >Email</label>
              <input
                className={contactStyles.input}
                type='email'
                {...register('email', { required: true })}
                placeholder='will.smith@example.com'
                required
              />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <label className={contactStyles.label}
            htmlFor='message'
            >Message</label>
            <textarea
              className= {contactStyles.textarea}
              placeholder='Write your opinion here...'
              rows={5}
              {...register('message', { required: true })}
              required
            />
          </div>
          <button className={contactStyles.submitButton} onClick={handleFormSubmit}>
            Send Message
          </button>
        </form>
        </>
        )}
      </div>
    </>
  );
};

export default ContactForm;
