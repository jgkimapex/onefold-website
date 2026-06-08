'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Play } from "lucide-react";

export default function CardsSection() {
    const t = useTranslations('Index.cards');
    const h = useTranslations('Index.hero'); // For buttons strings

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-20 md:pt-24 pb-4 md:pb-8 px-6 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col gap-1.5 md:gap-8 items-center w-full h-full justify-between py-1 md:py-4">

                {/* 1. Problem Question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center shrink-0"
                >
                    <span className="font-outfit text-xl md:text-5xl font-bold text-blue-900 leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all] mb-6 md:mb-10">
                        &ldquo;{t('problem')}&rdquo;
                    </span>

                    {/* 2. Main Solution Headline */}
                    <h2 className="font-outfit text-base md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all]">
                        {t('headline')}
                    </h2>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[240px] md:max-w-xs lg:max-w-md aspect-[3/4] shadow-2xl rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-slate-900 shrink-1 flex-1 h-full min-h-0"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/onefold-cards.png"
                            alt="ONEfold Cards UI"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </motion.div>

                {/* 4. Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-1 md:space-y-4 shrink-0"
                >
                    <div className="text-sm md:text-3xl text-slate-600 leading-[1.4] font-medium whitespace-pre-line [word-break:keep-all]">
                        {t('description')}
                    </div>
                </motion.div>

                {/* 5. Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2 md:gap-4 w-full sm:w-auto shrink-0 pb-4"
                >
                    <a
                        href="https://play.google.com/store/apps/details?id=com.bizbinder.v2"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-primary text-white px-5 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                    >
                        <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                        {h('downloadAndroid')}
                    </a>
                    <div className="w-full sm:w-auto select-none flex flex-col items-center">
                        <button
                            disabled
                            className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-slate-300 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl opacity-60 grayscale cursor-not-allowed"
                        >
                            <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                            {h('downloadIos')}
                        </button>
                        <p className="hidden md:block text-xs text-slate-400 mt-1 font-medium">Coming Soon</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
