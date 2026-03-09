'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";

export default function PrivacySection() {
    const t = useTranslations('Index.privacy');

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-12 md:pt-20 pb-4 md:pb-8 px-6 text-center overflow-hidden bg-slate-50/30">
            <div className="max-w-4xl mx-auto flex flex-col gap-2 md:gap-8 items-center w-full h-full justify-between py-1 md:py-4">

                {/* 1. Problem Question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center shrink-0"
                >
                    <span className="text-base md:text-3xl text-slate-500 font-medium tracking-tight bg-slate-100 px-5 py-1.5 md:px-8 md:py-3 rounded-full mb-1 md:mb-4 inline-block [word-break:keep-all]">
                        {t('problem')}
                    </span>

                    {/* 2. Main Solution Headline */}
                    <h2 className="font-outfit text-xl md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all]">
                        {t('headline')}
                    </h2>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[280px] md:max-w-lg aspect-square shrink-1 flex-1 flex items-center justify-center min-h-0"
                >
                    <div className="relative w-full h-full drop-shadow-2xl">
                        <Image
                            src="/privacy-hero.png"
                            alt="Privacy Shield Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-400/5 blur-[100px] rounded-full -z-10" />
                </motion.div>

                {/* 4. Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-1 md:space-y-4 shrink-0 pb-4"
                >
                    <div className="text-base md:text-3xl text-slate-600 leading-[1.4] font-medium whitespace-pre-line [word-break:keep-all]">
                        {t('description')}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
