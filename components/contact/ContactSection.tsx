'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  description: z.string().min(10, 'Please describe your project briefly'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  'Web Application',
  'Mobile Application',
  'Full-Stack System',
  'API / Backend',
  'Dashboard / Admin Panel',
  'ERP / Business System',
  'Consultation',
  'Other',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $15,000',
  '$15,000+',
  'Not sure yet',
];

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');

    // Simulate form submission — replace with actual email service
    // e.g., Resend, SendGrid, EmailJS, or a Next.js API route
    try {
      // For now, log the data and show success
      console.log('Contact form submission:', data);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, send to:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — CTA */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
                {'// Contact'}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Have a problem<br />worth solving?
              </h2>
              <p className="text-text-secondary text-lg max-w-md">
                Tell me what you&apos;re trying to build. I&apos;ll figure out the rest.
              </p>
            </div>

            <p className="text-text-muted leading-relaxed max-w-md">
              Whether it&apos;s a full-stack application, an API system, a smart
              dashboard, or a complex business tool — I enjoy taking on
              engineering challenges that require real problem-solving.
            </p>

            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-semibold text-text-primary uppercase tracking-wider">
                Or reach out directly
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:adamtadesse9@gmail.com"
                  className="group flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">adamtadesse9@gmail.com</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://github.com/Adamtad1216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
                >
                  <GithubIcon size={18} />
                  <span className="text-sm">github.com/Adamtad1216</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-tadesse-23b4b1368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
                >
                  <LinkedinIcon size={18} />
                  <span className="text-sm">LinkedIn</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUp}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-border bg-surface p-8"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  {...register('name')}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl bg-elevated border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all',
                    errors.name ? 'border-error' : 'border-border'
                  )}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-error flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  {...register('email')}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl bg-elevated border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all',
                    errors.email ? 'border-error' : 'border-border'
                  )}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-error flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="contact-project-type"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Project Type
                </label>
                <select
                  id="contact-project-type"
                  {...register('projectType')}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl bg-elevated border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all appearance-none',
                    errors.projectType ? 'border-error' : 'border-border'
                  )}
                >
                  <option value="" className="bg-surface text-text-primary">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-surface text-text-primary">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1.5 text-xs text-error flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="contact-budget"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Budget Range{' '}
                  <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <select
                  id="contact-budget"
                  {...register('budget')}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all appearance-none"
                >
                  <option value="" className="bg-surface text-text-primary">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range} className="bg-surface text-text-primary">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="contact-description"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Project Description
                </label>
                <textarea
                  id="contact-description"
                  {...register('description')}
                  rows={4}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl bg-elevated border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all resize-none',
                    errors.description ? 'border-error' : 'border-border'
                  )}
                  placeholder="Tell me about the problem you're trying to solve..."
                />
                {errors.description && (
                  <p className="mt-1.5 text-xs text-error flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                className={cn(
                  'w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300',
                  submitStatus === 'success'
                    ? 'bg-success text-white'
                    : submitStatus === 'error'
                      ? 'bg-error text-white'
                      : 'bg-accent text-text-inverse hover:bg-accent/90'
                )}
              >
                {submitStatus === 'loading' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full"
                    />
                    Sending...
                  </>
                )}
                {submitStatus === 'success' && (
                  <>
                    <CheckCircle size={16} />
                    Message sent!
                  </>
                )}
                {submitStatus === 'error' && (
                  <>
                    <AlertCircle size={16} />
                    Failed to send. Try again.
                  </>
                )}
                {submitStatus === 'idle' && (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>

              <p className="text-xs text-text-muted text-center">
                I&apos;ll respond within 24–48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
