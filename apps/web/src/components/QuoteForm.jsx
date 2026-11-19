import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { services, areas } from '@/data/site';

const empty = { name: '', email: '', phone: '', city: '', service: '', budget: '', timeline: '', message: '' };

const field = 'min-h-[44px] w-full border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-[hsl(var(--brand))]';
const label = 'text-xs font-bold uppercase tracking-widest text-neutral-600';

const projectTypes = ['Kitchen', 'Bathroom', 'Addition', 'Whole home', 'Concrete', 'Other'];

const QuoteForm = ({ defaultService = '', defaultCity = '', compact = false, bare = false }) => {
    const location = useLocation();
    const [form, setForm] = useState({
        ...empty,
        service: defaultService,
        city: defaultCity,
        timeline: bare ? 'Within 3 months' : '',
        budget: bare ? 'Not sure yet' : '',
    });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError('');
        try {
            await pb.collection('quote_requests').create({ ...form, source_page: location.pathname });
            setStatus('done');
            setForm({ ...empty, service: defaultService, city: defaultCity });
        } catch (err) {
            setStatus('error');
            setError(err?.response?.message || 'We could not send that. Please call us and we will take the details by phone.');
        }
    };

    if (status === 'done') {
        return (
            <div className="border border-neutral-200 bg-neutral-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[hsl(var(--brand))]" strokeWidth={2} />
                <h3 className="font-display mt-4 text-2xl font-bold uppercase">Request received</h3>
                <p className="mt-2 text-sm text-neutral-600">
                    An estimator will call you within one business day to schedule the site walkthrough.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="mt-5 text-sm font-semibold underline">
                    Send another request
                </button>
            </div>
        );
    }

    if (bare) {
        return (
            <form className="form" onSubmit={submit}>
                <div><label htmlFor="qf-name">Full name</label><input id="qf-name" required value={form.name} onChange={set('name')} placeholder="First and last name" /></div>
                <div><label htmlFor="qf-phone">Phone</label><input id="qf-phone" required value={form.phone} onChange={set('phone')} placeholder="(000) 000-0000" /></div>
                <div><label htmlFor="qf-email">Email</label><input id="qf-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" /></div>
                <div><label htmlFor="qf-city">ZIP code</label><input id="qf-city" value={form.city} onChange={set('city')} placeholder="33613" /></div>
                <div className="full">
                    <label>Project type</label>
                    <div className="chips">
                        {projectTypes.map((type) => (
                            <button type="button" key={type} className={form.service === type ? 'on' : undefined} onClick={() => setForm((current) => ({ ...current, service: type }))}>{type}</button>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="qf-timeline">When do you want to start?</label>
                    <select id="qf-timeline" value={form.timeline} onChange={set('timeline')}>
                        <option>Within 3 months</option>
                        <option>3 to 6 months</option>
                        <option>Just planning</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="qf-budget">Interested in financing?</label>
                    <select id="qf-budget" value={form.budget} onChange={set('budget')}>
                        <option>Not sure yet</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="full"><label htmlFor="qf-message">About the project</label><textarea id="qf-message" value={form.message} onChange={set('message')} placeholder="What do you want done?" /></div>
                {status === 'error' ? <p className="full fine">{error}</p> : null}
                <div className="full"><button className="btn btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Request My Estimate'}</button></div>
                <p className="full fine">By sending this form you agree to be contacted about your project by phone, text or email.</p>
            </form>
        );
    }

    return (
        <form onSubmit={submit} className="border border-neutral-200 bg-white p-6 md:p-8">
            <p className="font-display text-2xl font-bold uppercase">Request your free quote</p>
            <p className="mt-1 text-sm text-neutral-600">No obligation. Licensed and local.</p>

            <div className={`mt-6 grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
                <div className="grid gap-2">
                    <label className={label} htmlFor="qf-name">Full name</label>
                    <input id="qf-name" required value={form.name} onChange={set('name')} className={field} placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                    <label className={label} htmlFor="qf-email">Email</label>
                    <input id="qf-email" type="email" required value={form.email} onChange={set('email')} className={field} placeholder="you@email.com" />
                </div>
                <div className="grid gap-2">
                    <label className={label} htmlFor="qf-phone">Phone</label>
                    <input id="qf-phone" value={form.phone} onChange={set('phone')} className={field} placeholder="(813) 555-0100" />
                </div>
                <div className="grid gap-2">
                    <label className={label} htmlFor="qf-city">Project location</label>
                    <select id="qf-city" value={form.city} onChange={set('city')} className={field}>
                        <option value="">Select area</option>
                        {areas.map((a) => <option key={a.slug} value={a.city}>{a.city}</option>)}
                        <option value="Other">Other / nearby</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <label className={label} htmlFor="qf-service">Service needed</label>
                    <select id="qf-service" value={form.service} onChange={set('service')} className={field}>
                        <option value="">Select service</option>
                        {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                        <option value="Other">Something else</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <label className={label} htmlFor="qf-budget">Budget range</label>
                    <select id="qf-budget" value={form.budget} onChange={set('budget')} className={field}>
                        <option value="">Select range</option>
                        <option value="Under $50k">Under $50k</option>
                        <option value="$50k–$150k">$50k–$150k</option>
                        <option value="$150k–$400k">$150k–$400k</option>
                        <option value="$400k+">$400k+</option>
                    </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                    <label className={label} htmlFor="qf-timeline">Desired start</label>
                    <select id="qf-timeline" value={form.timeline} onChange={set('timeline')} className={field}>
                        <option value="">Select timeline</option>
                        <option value="ASAP">As soon as possible</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="Planning stage">Still planning</option>
                    </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                    <label className={label} htmlFor="qf-message">Project details</label>
                    <textarea id="qf-message" rows={4} value={form.message} onChange={set('message')} className={`${field} min-h-[120px]`} placeholder="Square footage, scope, drawings, building type..." />
                </div>
            </div>

            {status === 'error' && (
                <p className="mt-4 flex items-start gap-2 border border-neutral-300 bg-neutral-50 p-3 text-sm text-neutral-800">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 bg-[hsl(var(--brand))] px-6 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0 disabled:opacity-70"
            >
                {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'loading' ? 'Sending…' : 'Get My Free Estimate'}
            </button>
            <p className="mt-3 text-xs text-neutral-500">We reply within one business day. Your details are never sold or shared.</p>
        </form>
    );
};

export default QuoteForm;
