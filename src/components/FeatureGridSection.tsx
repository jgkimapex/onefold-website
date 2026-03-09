'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureGridSection() {
    const t = useTranslations('Index.additionalFeatures');

    const featureItems = t.raw('items');

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-10 items-center w-full h-full max-h-full justify-between py-4">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="shrink-0"
                >
                    <h2 className="font-outfit text-3xl md:text-5xl font-bold text-text-main leading-[1.2] tracking-tight [word-break:keep-all]">
                        {t('title')}
                    </h2>
                </motion.div>

                {/* Illustration Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-[320px] md:max-w-2xl aspect-[1.4/1] md:aspect-[1.8/1] shrink-1"
                >
                    <div className="relative w-full h-full drop-shadow-xl">
                        <Image
                            src="/features-grid.png"
                            alt="Additional Features"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-8 w-full shrink-0">
                    {featureItems.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow"
                        >
                            <span className="font-outfit text-lg md:text-2xl font-bold text-primary">
                                {item.title}
                            </span>
                            <p className="text-sm md:text-lg text-slate-600 leading-tight [word-break:keep-all]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
