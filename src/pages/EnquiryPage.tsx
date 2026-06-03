import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ArrowLeft, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { products, categoryMeta } from '../data/products';

// -----------------------------------------------------------------------
// Google Apps Script Web App URL
// Replace this with your deployed Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxehZUUvbzujy-kaA9yjO39pjfSYdevyhNV6eQlx2D1gtwqOJfDGY9Wdhc66CVZXH4A/exec';
// -----------------------------------------------------------------------

interface FormData {
  name: string;
  phone: string;
  email: string;
  category: string;
  product: string;
  message: string;
}

const initialForm: FormData = { name: '', phone: '', email: '', category: '', product: '', message: '' };

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormData>({
    ...initialForm,
    product: searchParams.get('product') || '',
    category: searchParams.get('category') || '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    setForm((f) => ({
      ...f,
      product: searchParams.get('product') || f.product,
      category: searchParams.get('category') || f.category,
    }));
  }, [searchParams]);

  const categoryProducts = form.category
    ? products.filter((p) => p.category === form.category)
    : products;

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = 'Valid phone number required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.category) e.category = 'Please select a category';
    if (!form.message.trim()) e.message = 'Please include a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    const payload = {
      timestamp: new Date().toISOString(),
      name: form.name,
      phone: form.phone,
      email: form.email,
      category: form.category,
      product: form.product,
      message: form.message,
    };

    if (SCRIPT_URL === 'PASTE_APPS_SCRIPT_URL_HERE') {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('success');
      setForm(initialForm);
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Top banner */}
      <div className="bg-[#0a1628] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Send a <span className="gold-text">Business Enquiry</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fill in the form below and our trade specialists will respond within 24 business hours.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-10 text-center"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Received!</h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              Thank you for your enquiry. Our trade specialists will contact you within 24 business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:border-blue-900 hover:text-blue-900 transition-colors"
              >
                Send Another Enquiry
              </button>
              <Link
                to="/"
                className="px-6 py-3 gold-gradient text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Form header */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-gray-900 font-semibold">Product Enquiry Form</h2>
                <p className="text-gray-500 text-xs">All fields marked with * are required</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6" noValidate>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name *" error={errors.name}>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="John Smith"
                      className={inputCls(!!errors.name)}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                  </div>
                </Field>

                <Field label="Phone Number *" error={errors.phone}>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 73488 90341"
                      className={inputCls(!!errors.phone)}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                  </div>
                </Field>
              </div>

              {/* Row 2 */}
              <Field label="Email Address *" error={errors.email}>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="john@company.com"
                    className={inputCls(!!errors.email)}
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
              </Field>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Select Category *" error={errors.category}>
                  <select
                    value={form.category}
                    onChange={(e) => { update('category', e.target.value); update('product', ''); }}
                    className={selectCls(!!errors.category)}
                  >
                    <option value="">Choose category…</option>
                    {Object.entries(categoryMeta).map(([key, val]) => (
                      <option key={key} value={key}>{val.label}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Select Product (optional)">
                  <select
                    value={form.product}
                    onChange={(e) => update('product', e.target.value)}
                    className={selectCls(false)}
                  >
                    <option value="">Choose product…</option>
                    {categoryProducts.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <Field label="Message *" error={errors.message}>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Describe your requirement, quantity, destination port, or any specific details…"
                    rows={5}
                    className={`${inputCls(!!errors.message)} resize-none`}
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
              </Field>

              {/* Error */}
              {status === 'error' && (
                <div className="flex items-center gap-2.5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Submission failed. Please try again or email us directly at info@suhanexports.com
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 gold-gradient text-white font-bold rounded-xl hover:opacity-90 disabled:opacity-60 transition-all text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}

        {/* Info box */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Response Time', value: 'Within 24 hours' },
            { label: 'Languages', value: 'English, Hindi, Arabic' },
            { label: 'Support', value: 'Mon–Sat 9AM–6PM IST' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">{label}</p>
              <p className="text-sm font-semibold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500">
          <AlertCircle className="w-3 h-3" />{error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full pr-4 py-3 border rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50'
      : 'border-gray-200 focus:border-blue-900/40 focus:ring-blue-900/10 bg-white'
  }`;
}

function selectCls(hasError: boolean) {
  return `w-full px-4 py-3 border rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 transition cursor-pointer appearance-none bg-white ${
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-gray-200 focus:border-blue-900/40 focus:ring-blue-900/10'
  }`;
}
