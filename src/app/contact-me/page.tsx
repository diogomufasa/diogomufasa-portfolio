'use client';

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import type { FormData } from '@/types';
import { isValidEmail, sendEmail } from '@/utils/utils';
import { ContactMeContext } from '@/Contexts/ContextContactMe';
import Subheader from '@/Components/Subheader/page';
import { LuContact } from 'react-icons/lu';

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { HasContacted, setHasContacted } = useContext(ContactMeContext);
  
  const onSubmit = (data: FormData) => {
    if (!isValidEmail(data.email)) {
      alert('Please enter a valid email address');
      return;
    }
    sendEmail(data);
    setTimeout(() => {
      if (data !== null || data !== undefined) {
        setHasContacted(true);
      }
    }, 2000);
  };

  return (
    <div className="wrapper px-4 sm:px-0 mt-20 sm:mt-24">
      <Subheader title="Contact Me" icon={<LuContact />} />
      <p className="mb-8 text-[var(--muted)] text-lg">
        Open to remote work, internships and project collaborations. My inbox is always open.
      </p>

      {HasContacted ? (
        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] text-center card-hover-effect">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-bold mb-2 text-[var(--text)]">Message sent!</h3>
          <p className="text-[var(--muted)]">Thank you for reaching out. I'll get back to you shortly.</p>
        </div>
      ) : (
        <form className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] card-hover-effect" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-[var(--text)]" htmlFor="name">Name</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                type="text"
                placeholder="Will Smith"
                {...register('name', { required: true })}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-[var(--text)]" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                type="email"
                {...register('email', { required: true })}
                placeholder="will.smith@example.com"
                required
              />
            </div>
          </div>
          
          <div className="w-full flex flex-col mb-8">
            <label className="block text-sm font-medium mb-2 text-[var(--text)]" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-y"
              placeholder="Write your message here..."
              rows={5}
              {...register('message', { required: true })}
              required
            />
          </div>
          
          <button className="w-full py-4 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-lg hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors shadow-lg">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
