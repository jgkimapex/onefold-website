'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function UseCases() {
    const t = useTranslations('Index.useCases');
    const useCaseKeys = ['travel', 'project', 'daily'] as const;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-outfit text-4xl font-bold text-text-main mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="space-y-32">
                    {useCaseKeys.map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
                        >
                            {/* Image */}
                            <div className="flex-1 relative aspect-square w-full max-w-md bg-slate-50 rounded-[40px] overflow-hidden group">
                                <Image
                                    src={`/usecase-${key}.png`}
                                    alt={t(`items.${key}.title`)}
                                    fill
                                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-outfit text-3xl font-bold text-text-main mb-4">
                                    {t(`items.${key}.title`)}
                                </h3>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                    {t(`items.${key}.desc`)}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {(t.raw(`items.${key}.list`) as string[]).map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-accent" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
