'use client';

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
    const t = useTranslations('Index.faqSection');
    const faqItems = t.raw('items');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden bg-slate-50/50">
            <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-10 items-center w-full h-full max-h-full justify-start py-8">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-outfit text-3xl md:text-5xl font-bold text-text-main mb-4 shrink-0"
                >
                    {t('title')}
                </motion.h2>

                <div className="w-full space-y-3 md:space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                    {faqItems.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-left"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full flex items-center justify-between p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all ${openIndex === index ? 'bg-primary text-white shadow-xl shadow-blue-500/20' : 'bg-white text-slate-800 border border-slate-100'
                                    }`}
                            >
                                <span className="font-bold text-lg md:text-xl pr-4 [word-break:keep-all]">
                                    {item.q}
                                </span>
                                <ChevronDown className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-5 md:p-8 text-slate-600 text-base md:text-lg leading-relaxed [word-break:keep-all]">
                                    {item.a}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
