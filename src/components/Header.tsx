'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { Share2 } from 'lucide-react';

export default function Header() {
    const t = useTranslations('Nav');

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'ONEfold',
                    url: window.location.origin,
                });
            } else {
                await navigator.clipboard.writeText(window.location.origin);
                alert('Link copied to clipboard!');
            }
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="ONEfold Logo"
                        width={32}
                        height={32}
                        className="rounded-lg shadow-sm group-hover:scale-110 transition-transform"
                    />
                    <span className="font-outfit font-bold text-xl tracking-tight text-text-main">ONEfold</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        {t('features')}
                    </Link>
                    <Link href="/guide" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        {t('guide')}
                    </Link>
                    <div className="h-4 w-[1px] bg-slate-200" />
                    <button onClick={handleShare} className="text-slate-600 hover:text-primary transition-colors" aria-label="Share">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <LanguageSwitcher />
                    <Link
                        href="#download"
                        className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95"
                    >
                        {t('download')}
                    </Link>
                </div>

                {/* Mobile Mini Switcher */}
                <div className="md:hidden flex items-center gap-6">
                    <button onClick={handleShare} className="text-slate-600 hover:text-primary transition-colors" aria-label="Share">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <LanguageSwitcher />
                </div>
            </nav>
        </header>
    );
}
