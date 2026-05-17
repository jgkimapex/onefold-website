'use client';

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
    const t = useTranslations('Index.contact');
    const f = useTranslations('Index.footer');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would ideally call an API, but for now we'll simulate a mailto trigger or just show success
        setSubmitted(true);
        window.location.href = `mailto:jgkimapex@gmail.com?subject=ONEfold Feedback&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
    };

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-20 md:pt-24 pb-4 md:pb-8 px-6 text-center overflow-hidden bg-white">
            <div className="max-w-2xl mx-auto flex flex-col gap-4 md:gap-8 items-center w-full h-full justify-between py-1 md:py-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-1 shrink-0"
                >
                    <h2 className="font-outfit text-xl md:text-5xl font-bold text-text-main">
                        {t('title')}
                    </h2>
                </motion.div>

                {!submitted ? (
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-4 md:gap-6 bg-slate-50 p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm flex-1 justify-center min-h-0"
                    >
                        <div className="space-y-1 text-left">
                            <label className="text-xs md:text-sm font-bold text-slate-500 ml-2">Email</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('emailPlaceholder')}
                                className="w-full px-4 py-3 md:py-4 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all text-slate-800 text-sm md:text-lg"
                            />
                        </div>
                        <div className="space-y-1 text-left flex-1 flex flex-col min-h-0">
                            <label className="text-xs md:text-sm font-bold text-slate-500 ml-2">Message</label>
                            <textarea
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t('messagePlaceholder')}
                                className="w-full px-4 py-3 md:py-4 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all text-slate-800 flex-1 min-h-[100px] md:min-h-[150px] resize-none text-sm md:text-lg"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 shrink-0"
                        >
                            <Send className="w-4 h-4 md:w-6 md:h-6" />
                            {t('submit')}
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center gap-4 py-6"
                    >
                        <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
                        <h3 className="text-lg md:text-3xl font-bold text-slate-800 [word-break:keep-all]">
                            {t('success')}
                        </h3>
                    </motion.div>
                )}

                {/* Footer Area with Privacy Link */}
                <div className="shrink-0 space-y-2 pt-4 border-t border-slate-100 w-full mb-2">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-base font-bold text-slate-500">
                        <Link href="/ko/privacy" className="hover:text-primary transition-colors">
                            {f('privacy')}
                        </Link>
                        <Link href="/ko/terms" className="hover:text-primary transition-colors">
                            {f('terms')}
                        </Link>
                    </div>
                    <p className="text-slate-400 text-[10px] md:text-sm">
                        {f('copyright')}
                    </p>
                </div>

            </div>
        </section>
    );
}
