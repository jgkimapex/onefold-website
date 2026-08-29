'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import StoreDownloadButtons from "./StoreDownloadButtons";

export default function Hero() {
    const t = useTranslations('Index.hero');

    return (
        <section className="min-h-dvh snap-start snap-always md:h-screen flex flex-col items-center justify-center pt-24 [@media(max-height:740px)]:pt-20 pb-10 [@media(max-height:740px)]:pb-6 md:pb-8 px-6 text-center overflow-visible md:overflow-hidden mobile-section mobile-section-hero">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 [@media(max-height:740px)]:gap-3 md:gap-8 items-center justify-center w-full md:h-full mobile-section-container">

                {/* 1. Problem Question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center shrink-0"
                >
                    <span className="font-outfit text-xl md:text-5xl font-bold text-blue-900 leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all] mb-6 md:mb-10 mobile-section-title mobile-section-title-margin">
                        {t('problem')}
                    </span>

                    {/* 2. Main Solution Headline */}
                    <h1 className="font-outfit text-xl md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all] mobile-section-title">
                        {t('headline')}
                    </h1>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[280px] [@media(max-height:740px)]:max-w-[240px] md:max-w-lg aspect-square shrink-0 mobile-section-visual"
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
                    className="space-y-1 md:space-y-4 shrink-0"
                >
                    <div className="text-base md:text-3xl text-slate-600 leading-[1.4] font-medium whitespace-pre-line [word-break:keep-all] mobile-section-body">
                        {t('description')}
                    </div>
                </motion.div>

                {/* 5. Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2 md:gap-4 w-full sm:w-auto shrink-0 pb-2"
                >
                    <StoreDownloadButtons
                        androidLabel={t('downloadAndroid')}
                        iosLabel={t('downloadIos')}
                        size="regular"
                    />
                </motion.div>

            </div>
        </section>
    );
}
