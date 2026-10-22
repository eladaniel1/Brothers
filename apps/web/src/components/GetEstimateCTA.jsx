import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GetEstimateCTA = ({ tone = 'light', heading = 'Ready to get started?', text, className = '' }) => {
    const dark = tone === 'dark';
    return (
        <div className={`${dark ? 'border border-white/15 bg-white/5' : 'border border-neutral-200 bg-neutral-50'} p-6 md:p-8 ${className}`}>
            <p className={`font-display text-2xl font-bold uppercase ${dark ? 'text-white' : ''}`}>{heading}</p>
            {text && <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-neutral-600'}`}>{text}</p>}
            <Link
                to="/quote"
                className="mt-5 flex min-h-[48px] items-center justify-center gap-2 bg-[hsl(var(--brand))] px-6 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0"
            >
                Get an Estimate <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    );
};

export default GetEstimateCTA;
