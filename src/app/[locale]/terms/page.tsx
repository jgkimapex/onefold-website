'use client';

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
    const t = useTranslations('Policies.terms');

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
                <div className="max-w-4xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Home</span>
                    </Link>
                    <h1 className="text-lg md:text-xl font-bold font-outfit truncate px-4">
                        {t('title')}
                    </h1>
                    <div className="w-12 md:w-20" /> {/* Spacer */}
                </div>
            </header>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-slate prose-lg max-w-none"
                >
                    <div className="whitespace-pre-line leading-relaxed text-slate-600">
                        {t('content')}
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-100 bg-slate-50 py-12">
                <div className="max-w-4xl mx-auto px-6 text-center text-slate-400 text-sm">
                    © 2026 ONEfold. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
}
