'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";

export default function Hero() {
    const t = useTranslations('Index.hero');

    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary text-sm font-bold rounded-full tracking-wider uppercase">
                            ONEfold v1.6.1 Launch
                        </span>
                        <h1 className="font-outfit text-5xl md:text-7xl font-bold text-text-main leading-[1.1] mb-8 tracking-tight">
                            {t('headline').split(',')[0]} <br />
                            <span className="text-primary">ONEfold</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {t('subtext')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="/download/ONEfold_v1.6.1.apk"
                                className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                            >
                                <Download className="w-5 h-5 group-hover:bounce" />
                                {t('downloadAndroid')}
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex flex-col items-center sm:items-start">
                                <span className="text-slate-400 text-sm font-medium mb-1">Coming Soon</span>
                                <div className="opacity-50 grayscale cursor-not-allowed flex items-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg text-slate-400">
                                    {t('downloadIos')}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 grayscale opacity-60">
                            <div className="flex flex-col items-center italic text-xs font-bold text-slate-400">
                                <span>Privacy Focused</span>
                                <div className="w-12 h-[2px] bg-slate-200 mt-1" />
                            </div>
                            <div className="flex flex-col items-center italic text-xs font-bold text-slate-400">
                                <span>Local Storage</span>
                                <div className="w-12 h-[2px] bg-slate-200 mt-1" />
                            </div>
                            <div className="flex flex-col items-center italic text-xs font-bold text-slate-400">
                                <span>No Subscriptions</span>
                                <div className="w-12 h-[2px] bg-slate-200 mt-1" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <div className="flex-1 relative w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="relative aspect-[4/5] w-full bg-gradient-to-tr from-primary/5 to-accent/5 rounded-[40px] p-4 overflow-hidden shadow-2xl">
                            <Image
                                src="/hero-mockup.png"
                                alt="ONEfold App Mockup"
                                fill
                                className="object-contain p-8 drop-shadow-2xl"
                                priority
                            />
                        </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
