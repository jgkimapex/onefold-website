'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    const t = useTranslations('Index.contact');
    const locale = useLocale();

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary to-blue-700 rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20"
                >
                    {/* Decorative Orbs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="font-outfit text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                            {t('title')}
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="/download/ONEfold_v1.6.1.apk"
                                className="flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                            >
                                <Download className="w-6 h-6" />
                                {t('button')}
                            </a>

                            <Link
                                href={`/${locale}/support`}
                                className="flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all active:scale-95"
                            >
                                <Mail className="w-6 h-6" />
                                {t('support')}
                                <ChevronRight className="w-5 h-5 opacity-50" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
