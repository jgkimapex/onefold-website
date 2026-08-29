'use client';

import { useTranslations } from 'next-intl';
import { Share2, MapPin, Camera, Move } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FeatureItem = {
    title: string;
    desc: string;
};

export default function FeatureGridSection() {
    const t = useTranslations('Index.additionalFeatures');
    const featureItems = t.raw('items') as FeatureItem[];

    const icons: ReactNode[] = [
        <Share2 key="share" className="w-8 h-8 text-primary" />,
        <MapPin key="map" className="w-8 h-8 text-primary" />,
        <Camera key="camera" className="w-8 h-8 text-primary" />,
        <Move key="move" className="w-8 h-8 text-primary" />
    ];

    return (
        <section className="min-h-dvh snap-start snap-always md:h-screen flex flex-col items-center justify-center pt-20 [@media(max-height:740px)]:pt-16 md:pt-24 pb-10 [@media(max-height:740px)]:pb-6 md:pb-8 px-6 text-center overflow-visible md:overflow-hidden bg-white mobile-section">
            <div className="max-w-4xl mx-auto flex flex-col gap-6 [@media(max-height:740px)]:gap-4 md:gap-12 items-center w-full md:h-full justify-between py-4 [@media(max-height:740px)]:py-2 md:py-8 mobile-section-container">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="shrink-0"
                >
                    <h2 className="font-outfit text-xl md:text-5xl font-bold text-text-main [word-break:keep-all] mobile-section-title">
                        {t('title')}
                    </h2>
                </motion.div>

                {/* Main Content Area: Individual Icon + Text Pairs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 [@media(max-height:740px)]:gap-3 md:gap-12 w-full md:flex-1 items-center justify-center md:min-h-0">
                    {featureItems.map((item, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50/50 p-6 [@media(max-height:740px)]:p-4 md:p-10 rounded-[2rem] border border-slate-100 flex items-center gap-6 [@media(max-height:740px)]:gap-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-white p-4 rounded-2xl shadow-inner shrink-0">
                                {icons[index]}
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-1">{item.title}</h3>
                                <p className="text-sm md:text-lg text-slate-500 font-medium leading-snug [word-break:keep-all]">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
