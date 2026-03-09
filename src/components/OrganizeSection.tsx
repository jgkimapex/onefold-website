'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Play } from "lucide-react";

export default function OrganizeSection() {
    const t = useTranslations('Index.organize');
    const h = useTranslations('Index.hero'); // For buttons strings

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-20 pb-10 px-6 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-12 items-center w-full">

                {/* 1. Problem Question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-lg md:text-3xl text-slate-500 font-medium tracking-tight bg-slate-100 px-6 py-2 md:px-8 md:py-3 rounded-full mb-3 md:mb-6 inline-block [word-break:keep-all]">
                        {t('problem')}
                    </span>

                    {/* 2. Main Solution Headline */}
                    <h2 className="font-outfit text-2xl md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all]">
                        {t('headline')}
                    </h2>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[280px] md:max-w-lg aspect-square"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/organize-hero.png"
                            alt="ONEfold Organize Illustration"
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
                    className="space-y-2 md:space-y-4"
                >
                    <div className="text-lg md:text-3xl text-slate-600 leading-[1.4] font-medium whitespace-pre-line [word-break:keep-all]">
                        {t('description')}
                    </div>
                </motion.div>

                {/* 5. Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 w-full sm:w-auto"
                >
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                        <Play className="w-5 h-5 fill-current" />
                        {h('downloadAndroid')}
                    </button>
                    {/* Disabled App Store Button */}
                    <div className="w-full sm:w-auto select-none flex flex-col items-center">
                        <button
                            disabled
                            className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-slate-300 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl opacity-60 grayscale cursor-not-allowed"
                        >
                            <Smartphone className="w-5 h-5" />
                            {h('downloadIos')}
                        </button>
                        <p className="hidden md:block text-xs text-slate-400 mt-2 font-medium">Coming Soon</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
