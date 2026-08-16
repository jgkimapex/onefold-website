'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import StoreDownloadButtons from "./StoreDownloadButtons";

export default function CardsSection() {
    const t = useTranslations('Index.cards');
    const h = useTranslations('Index.hero'); // For buttons strings

    return (
        <section className="min-h-dvh snap-start md:h-screen md:snap-always flex flex-col items-center justify-center pt-20 [@media(max-height:740px)]:pt-16 md:pt-24 pb-10 [@media(max-height:740px)]:pb-6 md:pb-8 px-6 text-center overflow-visible md:overflow-hidden mobile-section">
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
                    <h2 className="font-outfit text-base md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight whitespace-pre-line [word-break:keep-all] mobile-section-title-sub">
                        {t('headline')}
                    </h2>
                </motion.div>

                {/* 3. Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[240px] [@media(max-height:740px)]:max-w-[210px] md:max-w-xs lg:max-w-md aspect-[3/4] shadow-2xl rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-slate-900 md:flex-1 md:h-full md:min-h-0 mobile-section-visual-small"
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
                    <div className="text-sm md:text-3xl text-slate-600 leading-[1.4] font-medium whitespace-pre-line [word-break:keep-all] mobile-section-body-sub">
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
                    <StoreDownloadButtons
                        androidLabel={h('downloadAndroid')}
                        iosLabel={h('downloadIos')}
                        size="compact"
                    />
                </motion.div>

            </div>
        </section>
    );
}
