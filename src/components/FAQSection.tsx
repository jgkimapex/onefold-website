'use client';

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
    q: string;
    a: string;
};

export default function FAQSection() {
    const t = useTranslations('Index.faqSection');
    const faqItems = t.raw('items') as FAQItem[];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="min-h-dvh snap-start md:h-screen md:snap-always flex flex-col items-center justify-center pt-20 [@media(max-height:740px)]:pt-16 md:pt-24 pb-10 [@media(max-height:740px)]:pb-6 md:pb-8 px-6 text-center overflow-visible md:overflow-hidden bg-slate-50/50 mobile-section">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 [@media(max-height:740px)]:gap-3 md:gap-8 items-center w-full md:h-full justify-between py-4 [@media(max-height:740px)]:py-2 md:py-4 mobile-section-container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="shrink-0"
                >
                    <h2 className="font-outfit text-xl md:text-5xl font-bold text-text-main mobile-section-title">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="w-full space-y-2 md:space-y-3 md:flex-1 overflow-visible md:overflow-y-auto pr-1 scrollbar-hide py-0.5">
                    {faqItems.map((item, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="text-left"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full flex items-center justify-between p-2.5 md:p-5 rounded-xl md:rounded-2xl transition-all border ${openIndex === index
                                    ? 'bg-primary text-white border-primary shadow-lg shadow-blue-500/10'
                                    : 'bg-white text-slate-800 border-slate-100 hover:border-slate-200 shadow-sm'
                                    }`}
                            >
                                <span className="font-bold text-sm md:text-xl pr-4 text-left [word-break:keep-all]">
                                    {item.q}
                                </span>
                                <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                    marginTop: openIndex === index ? 2 : 0
                                }}
                                className="overflow-hidden"
                            >
                                <div className="p-2.5 md:p-6 text-slate-600 text-xs md:text-lg leading-relaxed bg-slate-100/50 rounded-xl [word-break:keep-all]">
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
