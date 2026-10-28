import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Eyebrow } from '@/components/SiteLayout';
import { MarkerCircle, MarkerUnderline } from '@/components/MarkerAccents';

const AMOUNTS = [20000, 35000, 60000];

const monthlyPayment = (principal, apr, years) => {
    const r = apr / 100 / 12;
    const n = years * 12;
    return Math.round((principal * r * (1 + r) ** n) / ((1 + r) ** n - 1));
};

const money = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const UpgradeMark = () => (
    <span className="inline-flex items-center gap-2.5 border border-emerald-200 bg-emerald-50 px-4 py-2.5">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#059669" />
            <path d="M9 19 16 9l7 10" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" />
            <path d="M12.5 19h7V23h-7z" fill="#fff" />
        </svg>
        <span className="font-display text-xl font-bold uppercase tracking-wide text-emerald-800">Upgrade</span>
    </span>
);

const YgreneMark = () => (
    <span className="inline-flex items-center gap-2.5 border border-sky-200 bg-sky-50 px-4 py-2.5">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#0284c7" />
            <path d="M16 7c2.4 3.4 5 5.6 7.6 6.6-1.3 5.2-4 8.6-7.6 11C12.4 22.2 9.7 18.8 8.4 13.6 11 12.6 13.6 10.4 16 7z" fill="#bbf7d0" />
        </svg>
        <span className="font-display text-xl font-bold uppercase tracking-wide text-sky-900">Ygrene</span>
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
            rate: '0%',
            note: 'Same-as-cash promotional period',
            accent: '#c8102e',
            tint: 'bg-rose-50',
            circle: '#c8102e',
            badge: 'Same-as-cash',
        },
        {
            key: 'ten',
            kicker: '10-year term',
            title: '6.99% fixed APR',
            detail: '10 years · 6.99% fixed APR',
            payment: tenYear,
            rate: '6.99%',
            note: 'Predictable monthly payment',
            featured: true,
            accent: '#e8a818',
            circle: '#e8a818',
            badge: 'Most popular',
        },
        {
            key: 'twenty',
            kicker: '20-year term',
            title: '8.99% fixed APR',
            detail: '20 years · 8.99% fixed APR',
            payment: twentyYear,
            rate: '8.99%',
            note: 'Lowest monthly payment for larger remodels',
            accent: '#1b365d',
            tint: 'bg-sky-50',
            circle: '#1b365d',
        },
    ];

    return (
        <section className="w-full min-w-0 max-w-full border-y border-neutral-200 bg-[#f7f4ee] px-4 py-16 md:py-20">
            <div className="mx-auto min-w-0 w-full max-w-[86rem]">
                <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="min-w-0">
                        <Eyebrow>Financing</Eyebrow>
                        <h2 className="font-display relative mt-3 inline-block text-4xl font-bold uppercase leading-tight text-[#0f223d] md:text-5xl">
                            Pay over time
                            <MarkerUnderline src="/images/graffiti-underline-red-thick-right.png" className="mt-1 h-4 max-w-[18rem]" />
                        </h2>
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
                            Kitchen, bath, and addition projects can be financed through Upgrade and Ygrene. Pick a project amount to see what each plan costs per month.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <UpgradeMark />
                        <YgreneMark />
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3" role="group" aria-label="Example project amount">
                    <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Example project</span>
                    {AMOUNTS.map((value) => {
                        const selected = value === amount;
                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => setAmount(value)}
                                aria-pressed={selected}
                                className={`min-h-[48px] border px-4 text-base font-semibold ${selected ? 'border-[#c8102e] bg-[#c8102e] text-white' : 'border-neutral-300 bg-white text-[#0f223d] hover:border-[#c8102e]'}`}
                            >
                                {money(value)}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-6 grid min-w-0 gap-4 md:grid-cols-3">
                    {plans.map((plan) => (
                        <article
                            key={plan.key}
                            className={`relative flex min-w-0 flex-col overflow-hidden border p-6 md:p-7 ${plan.featured ? 'border-[#0f223d] bg-[#0f223d] text-white shadow-[0_18px_40px_-28px_rgba(15,34,61,0.8)]' : `border-neutral-200 ${plan.tint}`}`}
                        >
                            <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: plan.accent }} />
                            {plan.badge && (
                                <span className={`absolute right-4 top-4 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest ${plan.featured ? 'bg-[#e8a818] text-[#0f223d]' : 'bg-[#c8102e] text-white'}`}>
                                    {plan.badge}
                                </span>
                            )}
                            <p className={`text-sm font-bold uppercase tracking-widest ${plan.featured ? 'text-[#e8a818]' : 'text-[#c8102e]'}`}>{plan.kicker}</p>
                            <h3 className="font-display mt-2 pr-16 text-3xl font-bold uppercase leading-tight">{plan.title}</h3>
                            <p className={`mt-2 text-base leading-relaxed ${plan.featured ? 'text-white/75' : 'text-neutral-600'}`}>{plan.detail}</p>
                            <div className="relative mt-6 inline-flex w-fit items-center justify-center px-7 py-4">
                                <MarkerCircle className="absolute -inset-2" color={plan.featured ? '#e8a818' : plan.circle} />
                                <p className="font-display relative text-5xl font-bold leading-none">
                                    {money(plan.payment)}
                                    <span className={`ml-1 text-lg font-semibold uppercase tracking-wide ${plan.featured ? 'text-white/60' : 'text-neutral-500'}`}>/ mo</span>
                                </p>
                            </div>
                            <p className={`mt-6 flex items-start gap-2 text-sm font-semibold uppercase tracking-wide ${plan.featured ? 'text-white/80' : 'text-neutral-600'}`}>
                                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: plan.featured ? '#e8a818' : plan.accent }} strokeWidth={3} />
                                {plan.note}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-7 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        to="/financing"
                        className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-[#c8102e] px-6 text-base font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-px"
                    >
                        Check financing options <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                        to="/contact"
                        className="text-base font-semibold text-[#0f223d] underline decoration-[#e8a818] decoration-2 underline-offset-4 hover:text-[#c8102e]"
                    >
                        Get pre-qualified in minutes — no impact to credit score
                    </Link>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-neutral-500">
                    Payments shown for {money(amount)} are estimates before fees. The 10-year figure uses 6.99% APR and the 20-year figure uses 8.99% APR. The 12-month plan is $0 during the same-as-cash period. Offers are from the lender, require credit approval, and can change.
                </p>
            </div>
        </section>
    );
};

export default FinancingSection;
