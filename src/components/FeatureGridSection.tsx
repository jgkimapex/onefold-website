'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureGridSection() {
    const t = useTranslations('Index.additionalFeatures');

    const featureItems = t.raw('items');

    return (
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center pt-6 md:pt-20 pb-2 md:pb-8 px-6 text-center overflow-hidden bg-white">
            <div className="max-w-5xl mx-auto flex flex-col gap-1 md:gap-6 items-center w-full h-full justify-between py-0.5 md:py-4">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="shrink-0"
                >
                    <h2 className="font-outfit text-xl md:text-5xl font-bold text-text-main [word-break:keep-all]">
                        {t('title')}
                    </h2>
                </motion.div>

                {/* Main Content Area: Image with Floating Text */}
                <div className="relative w-full flex-1 flex flex-col items-center justify-center min-h-0">

                    {/* Background Plate */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-[340px] md:max-w-xl aspect-[1.4/1] md:aspect-[1.8/1] flex items-center justify-center"
                    >
                        <Image
                            src="/features-grid.png"
                            alt="Additional Features Grid"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />

                        {/* Desktop: Quadrant Labels */}
                        <div className="hidden md:block absolute inset-0">
                            {/* Top Left: Memo */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute top-[10%] left-[-15%] text-right w-48"
                            >
                                <span className="block text-xl font-bold text-primary mb-1">{featureItems[0].title}</span>
                                <p className="text-sm text-slate-500 font-medium">{featureItems[0].desc}</p>
                            </motion.div>

                            {/* Top Right: Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute top-[10%] right-[-15%] text-left w-48"
                            >
                                <span className="block text-xl font-bold text-primary mb-1">{featureItems[1].title}</span>
                                <p className="text-sm text-slate-500 font-medium">{featureItems[1].desc}</p>
                            </motion.div>

                            {/* Bottom Left: Camera */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute bottom-[10%] left-[-15%] text-right w-48"
                            >
                                <span className="block text-xl font-bold text-primary mb-1">{featureItems[2].title}</span>
                                <p className="text-sm text-slate-500 font-medium">{featureItems[2].desc}</p>
                            </motion.div>

                            {/* Bottom Right: D&D */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute bottom-[10%] right-[-15%] text-left w-48"
                            >
                                <span className="block text-xl font-bold text-primary mb-1">{featureItems[3].title}</span>
                                <p className="text-sm text-slate-500 font-medium">{featureItems[3].desc}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile: Simple Tight Grid */}
                <div className="grid md:hidden grid-cols-2 gap-1.5 w-full shrink-0 pb-1">
                    {featureItems.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50/50 p-2 rounded-xl border border-slate-100 flex flex-col items-center"
                        >
                            <span className="text-sm font-bold text-primary mb-0.5">{item.title}</span>
                            <p className="text-[10px] text-slate-500 leading-tight font-medium [word-break:keep-all]">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
