'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, routing } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(nextLocale: 'en' | 'ko') {
        router.replace(pathname, { locale: nextLocale });
    }

    return (
        <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-slate-400" />
            <select
                defaultValue={locale}
                onChange={(e) => onSelectChange(e.target.value as any)}
                className="bg-transparent text-sm font-medium text-slate-600 focus:outline-none cursor-pointer hover:text-primary transition-colors"
            >
                <option value="ko">한국어</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}
