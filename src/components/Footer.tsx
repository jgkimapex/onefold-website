'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('Index.footer');
    const locale = useLocale();

    return (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">

                    {/* Logo & Brand */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 bg-white rounded-2xl p-2.5 shadow-xl">
                            <Image
                                src="/logo.png"
                                alt="ONEfold Logo"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                        <span className="font-outfit text-2xl font-bold text-white tracking-tighter">ONEfold</span>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-8 font-medium">
                        <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                            {t('privacy')}
                        </Link>
                        <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                            {t('terms')}
                        </Link>
                        <Link href={`/${locale}/support`} className="hover:text-white transition-colors">
                            {t('support')}
                        </Link>
                    </nav>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col items-center gap-4">
                    <p className="text-sm font-medium">
                        {t('copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
