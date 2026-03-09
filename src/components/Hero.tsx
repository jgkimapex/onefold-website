'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Play } from "lucide-react";

export default function Hero() {
    const t = useTranslations('Index.hero');

    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col gap-12 items-center">

                {/* 1. Problem Question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-2xl md:text-3xl text-slate-500 font-medium tracking-tight bg-slate-100 px-8 py-3 rounded-full mb-6 inline-block [word-break:keep-all]">
                        {t('problem')}
                    </span>

                    {/* 2. Main Solution Headline */}
                    <h1 className="font-outfit text-3xl md:text-5xl font-bold text-text-main leading-tight tracking-tight whitespace-pre-line [word-break:keep-all]">
                        {t('headline')}
                    </h1>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-sm md:max-w-lg aspect-square"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/hero-basket.png"
                            alt="ONEfold Concept Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Soft background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full -z-10" />
                </motion.div>

                {/* 4. Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                >
                    <div className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium whitespace-pre-line [word-break:keep-all]">
                        {t('description')}
                    </div>
                </motion.div>

                {/* 5. Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                        <Play className="w-5 h-5 fill-current" />
                        {t('downloadAndroid')}
                    </button>
                    {/* Disabled App Store Button */}
                    <div className="w-full sm:w-auto select-none">
                        <button
                            disabled
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-300 text-white px-8 py-4 rounded-2xl font-bold text-xl opacity-60 grayscale cursor-not-allowed"
                        >
                            <Smartphone className="w-5 h-5" />
                            {t('downloadIos')}
                        </button>
                        <p className="text-xs text-slate-400 mt-2 font-medium">Coming Soon</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
