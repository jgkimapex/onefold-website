'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const GOOGLE_FEEDBACK_FORM_URL = 'https://forms.gle/oCRbH77R77Y62oWZ6';

export default function ContactSection() {
    const t = useTranslations('Index.contact');
    const f = useTranslations('Index.footer');
    const locale = useLocale();

    return (
        <section className="min-h-dvh snap-start snap-always md:h-screen flex flex-col items-center justify-center pt-20 [@media(max-height:740px)]:pt-16 md:pt-24 pb-10 [@media(max-height:740px)]:pb-6 md:pb-8 px-6 text-center overflow-visible md:overflow-hidden bg-white mobile-section">
            <div className="max-w-2xl mx-auto flex flex-col items-center justify-between gap-8 w-full md:h-full py-8 md:py-12 mobile-section-container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-1 flex-col items-center justify-center gap-6 w-full"
                >
                    <a
                        href={GOOGLE_FEEDBACK_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-primary text-white px-6 py-6 md:py-8 rounded-2xl md:rounded-[2rem] font-bold text-xl md:text-4xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] [word-break:keep-all]"
                    >
                        <span>{t('title')}</span>
                        <ExternalLink className="w-5 h-5 md:w-8 md:h-8 shrink-0" />
                    </a>

                    <p className="text-sm md:text-xl leading-relaxed text-slate-600 [word-break:keep-all]">
                        {t('messagePlaceholder')}
                    </p>
                </motion.div>

                <div className="shrink-0 space-y-2 pt-4 border-t border-slate-100 w-full mb-2">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-base font-bold text-slate-500">
                        <Link href={`/${locale}/privacy`} className="hover:text-primary transition-colors">
                            {f('privacy')}
                        </Link>
                        <Link href={`/${locale}/terms`} className="hover:text-primary transition-colors">
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
