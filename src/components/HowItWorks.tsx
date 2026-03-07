'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
    const t = useTranslations('Index.howItWorks');
    const steps = ['step1', 'step2', 'step3'] as const;

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-outfit text-4xl font-bold text-text-main mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {steps.map((step, index) => (
                        <div key={step} className="flex-1 flex flex-col items-center text-center relative w-full">
                            {/* Connector Arrow (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 -right-6 z-0">
                                    <ArrowRight className="w-8 h-8 text-slate-300" />
                                </div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-24 h-24 bg-white rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center text-3xl font-bold text-primary mb-8"
                            >
                                {index + 1}
                            </motion.div>

                            <h3 className="font-outfit text-2xl font-bold text-text-main mb-4">
                                {t(`${step}.title`)}
                            </h3>
                            <p className="text-slate-500 font-medium leading-relaxed max-w-[240px]">
                                {t(`${step}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Share Extension Visual (Simplified) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 bg-primary rounded-[32px] text-white flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 shadow-2xl shadow-primary/30"
                >
                    <div className="flex items-center gap-4 text-xl font-bold">
                        <div className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm">File</div>
                        <ArrowRight className="w-6 h-6" />
                        <div className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm font-outfit">Share</div>
                        <ArrowRight className="w-6 h-6" />
                        <div className="px-4 py-2 bg-white text-primary rounded-xl font-outfit">ONEfold</div>
                    </div>
                    <div className="text-white/80 font-medium whitespace-nowrap">
                        Works from any app with Share extension
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
