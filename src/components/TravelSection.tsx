'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Play } from "lucide-react";

export default function TravelSection() {
    const t = useTranslations('Index.travel');
    const h = useTranslations('Index.hero'); // For buttons strings

    return (
        <section className="min-h-dvh snap-start md:h-screen md:snap-always flex flex-col items-center justify-center pt-20 [@media(max-height:740px)]:pt-16 md:pt-24 pb-10 [@media(max-height:740px)]:pb-6 md:pb-8 px-6 text-center overflow-visible md:overflow-hidden bg-slate-50/50 mobile-section">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 [@media(max-height:740px)]:gap-3 md:gap-8 items-center w-full md:h-full justify-between py-4 [@media(max-height:740px)]:py-2 md:py-4 mobile-section-container">

                {/* 1. Problem Question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center shrink-0"
                >
                    <span className="font-outfit text-xl md:text-5xl font-bold text-blue-900 leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all] mb-6 md:mb-10 mobile-section-title mobile-section-title-margin">
                        &ldquo;{t('problem')}&rdquo;
                    </span>

                    {/* 2. Main Solution Headline */}
                    <h2 className="font-outfit text-xl md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all] mobile-section-title">
                        {t('headline')}
                    </h2>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[280px] [@media(max-height:740px)]:max-w-[240px] md:max-w-lg aspect-square md:flex-1 md:min-h-0 mobile-section-visual"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/travel-hero.png"
                            alt="ONEfold Travel Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                    {/* Soft background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-3xl rounded-full -z-10" />
                </motion.div>

                {/* 4. Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-1 md:space-y-4 shrink-0"
                >
                    <div className="text-base md:text-3xl text-slate-600 leading-[1.4] font-medium whitespace-pre-line [word-break:keep-all] mobile-section-body">
                        {t('description')}
                    </div>
                </motion.div>

                {/* 5. Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2 md:gap-4 w-full sm:w-auto shrink-0 pb-2"
                >
                    <a
                        href="https://play.google.com/store/apps/details?id=com.bizbinder.v2"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-primary text-white px-5 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                    >
                        <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                        {h('downloadAndroid')}
                    </a>
                    <a
                        href="https://apps.apple.com/kr/app/onefold/id6799573646"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-slate-900 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-xl hover:bg-slate-700 transition-all shadow-xl shadow-slate-500/20 active:scale-95"
                    >
                        <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                        {h('downloadIos')}
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
