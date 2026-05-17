'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AppOverview() {
    const t = useTranslations('Index.overview');

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

                {/* Illustration */}
                <motion.div
                    className="flex-1 relative aspect-video"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/overview-illustration.png"
                        alt="ONEfold Overview"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-outfit text-4xl font-bold text-text-main mb-6">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            {t('description')}
                        </p>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 font-medium">
                            {t('supportFiles')}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
