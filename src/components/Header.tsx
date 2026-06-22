'use client';

import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { Share2 } from 'lucide-react';
import packageJson from '../../package.json';

export default function Header() {
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
            <nav className="max-w-7xl mx-auto px-3 sm:pl-6 sm:pr-4 h-16 flex items-center justify-between gap-2">
                <Link href="/" className="flex flex-col relative min-w-0 shrink">
                    <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                        <Image
                            src="/logo.png"
                            alt="ONEfold Logo"
                            width={32}
                            height={32}
                            className="rounded-lg shadow-sm group-hover:scale-110 transition-transform"
                        />
                        <span className="font-outfit font-bold text-lg sm:text-xl tracking-tight text-text-main truncate">ONEfold</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold ml-10 absolute -bottom-3 md:hidden">v{packageJson.version}</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <button onClick={handleShare} className="text-slate-600 hover:text-primary transition-colors" aria-label="Share">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <LanguageSwitcher />
                    <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold border border-slate-200">
                        v{packageJson.version}
                    </span>
                </div>

                {/* Mobile Mini Switcher */}
                <div className="md:hidden flex items-center gap-2 shrink-0">
                    <button onClick={handleShare} className="text-slate-600 hover:text-primary transition-colors" aria-label="Share">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <LanguageSwitcher />
                </div>
            </nav>
        </header>
    );
}
