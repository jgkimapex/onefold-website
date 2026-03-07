'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
    FolderOpen,
    Link as LinkIcon,
    MapPin,
    Mic,
    Camera,
    Type
} from 'lucide-react';

const icons = {
    files: FolderOpen,
    links: LinkIcon,
    maps: MapPin,
    notes: Type,
    camera: Camera
};

export default function Features() {
    const t = useTranslations('Index.features');

    const featureKeys = ['files', 'links', 'maps', 'notes', 'camera'] as const;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="font-outfit text-4xl font-bold text-text-main mb-4">
                    {t('title')}
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {featureKeys.map((key) => {
                    const Icon = icons[key as keyof typeof icons] || FolderOpen;
                    return (
                        <motion.div
                            key={key}
                            variants={item}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-outfit text-xl font-bold text-text-main mb-3">
                                {t(`items.${key}.title`)}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {t(`items.${key}.desc`)}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
