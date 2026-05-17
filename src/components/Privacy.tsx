'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
    const t = useTranslations('Index.privacy');

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

                {/* Visual */}
                <motion.div
                    className="flex-1 relative aspect-square w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-primary/5 rounded-[60px] blur-3xl" />
                    <Image
                        src="/privacy-shield.png"
                        alt="Data Privacy"
                        fill
                        className="object-contain p-12 relative z-10"
                    />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-widest text-sm">
                            <ShieldCheck className="w-5 h-5" />
                            <span>Local First Privacy</span>
                        </div>
                        <h2 className="font-outfit text-4xl font-bold text-text-main mb-6 leading-tight">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            {t('desc')}
                        </p>
                        <p className="text-slate-400 italic font-medium">
                            * {t('note')}
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
