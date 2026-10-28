import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '@/components/SiteLayout';

const AMOUNTS = [20000, 35000, 60000];

const monthlyPayment = (principal, apr, years) => {
    const r = apr / 100 / 12;
    const n = years * 12;
    return Math.round((principal * r * (1 + r) ** n) / ((1 + r) ** n - 1));
};

const money = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const UpgradeMark = () => (
    <span className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-3 py-2">
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#14324f" />
            <path d="M8 16.5 14 8l6 8.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M11 16.5h6V20h-6z" fill="#fff" />
        </svg>
        <span className="font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--ink))]">Upgrade</span>
    </span>
);

const YgreneMark = () => (
    <span className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-3 py-2">
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#1f6b45" />
            <path d="M14 6c2.2 3.2 4.6 5.2 7 6.2-1.2 4.8-3.6 8-7 10.3C10.6 20.2 8.2 17 7 12.2 9.4 11.2 11.8 9.2 14 6z" fill="#fff" />
        </svg>
        <span className="font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--ink))]">Ygrene</span>
    </span>
);

const FinancingSection = () => {
    const [amount, setAmount] = useState(35000);
    const tenYear = monthlyPayment(amount, 6.99, 10);
    const twentyYear = monthlyPayment(amount, 8.99, 20);

    const plans = [
        {
            key: 'promo',
            kicker: '12 months',
            title: 'No payments, no interest',
            detail: '0% interest and $0 payments for 12 months',
            payment: 0,
            note: 'Same-as-cash promotional period',
        },
        {
            key: 'ten',
            kicker: '10-year term',
            title: '6.99% fixed APR',
            detail: '10 years · 6.99% fixed APR',
            payment: tenYear,
            note: 'Predictable monthly payment',
        },
        {
            key: 'twenty',
            kicker: '20-year term',
            title: '8.99% fixed APR',
            detail: '20 years · 8.99% fixed APR',
            payment: twentyYear,
            note: 'Lowest monthly payment for larger remodels',
        },
    ];

    return (
        <section className="w-full min-w-0 max-w-full border-y border-neutral-200 bg-neutral-50 px-4 py-14 md:py-16">
            <div className="mx-auto min-w-0 max-w-[72rem]">
                <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="min-w-0">
                        <Eyebrow>Financing</Eyebrow>
                        <h2 className="font-display mt-3 text-3xl font-bold uppercase leading-tight md:text-4xl">Pay over time</h2>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600">
                            Kitchen, bath, and addition projects can be financed through Upgrade and Ygrene. Pick a project amount to see what each plan costs per month.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <UpgradeMark />
                        <YgreneMark />
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Example project amount">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Example project</span>
                    {AMOUNTS.map((value) => {
                        const selected = value === amount;
                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => setAmount(value)}
                                aria-pressed={selected}
                                className={`min-h-[40px] border px-3 text-sm font-semibold ${selected ? 'border-[hsl(var(--ink))] bg-[hsl(var(--ink))] text-white' : 'border-neutral-300 bg-white text-[hsl(var(--ink))] hover:border-[hsl(var(--brand))]'}`}
                            >
                                {money(value)}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-5 grid min-w-0 gap-3 md:grid-cols-3">
                    {plans.map((plan) => (
                        <article key={plan.key} className="flex min-w-0 flex-col border border-neutral-200 bg-white p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand))]">{plan.kicker}</p>
                            <h3 className="font-display mt-2 text-2xl font-bold uppercase leading-tight">{plan.title}</h3>
                            <p className="mt-1 text-sm text-neutral-600">{plan.detail}</p>
                            <p className="font-display mt-4 text-4xl font-bold leading-none text-[hsl(var(--ink))]">
                                {money(plan.payment)}
                                <span className="ml-1 text-base font-semibold uppercase tracking-wide text-neutral-500">/ mo</span>
                            </p>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">{plan.note}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        to="/financing"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[hsl(var(--brand))] px-5 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px"
                    >
                        Check financing options <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]"
                    >
                        Get pre-qualified in minutes — no impact to credit score
                    </Link>
                </div>
                <p className="mt-4 max-w-3xl text-xs leading-relaxed text-neutral-500">
                    Payments shown for {money(amount)} are estimates before fees. The 10-year figure uses 6.99% APR and the 20-year figure uses 8.99% APR. The 12-month plan is $0 during the same-as-cash period. Offers are from the lender, require credit approval, and can change.
                </p>
            </div>
        </section>
    );
};

export default FinancingSection;
