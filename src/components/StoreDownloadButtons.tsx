'use client';

import { useEffect, useState } from 'react';
import { Play, Smartphone } from 'lucide-react';

type StorePlatform = 'desktop' | 'android' | 'ios';
type StoreButtonSize = 'regular' | 'tight' | 'compact';

const GOOGLE_PLAY_URL =
    'https://play.google.com/store/apps/details?id=com.bizbinder.v2';

const APP_STORE_URL =
    'https://apps.apple.com/kr/app/onefold/id6799573646';

function detectStorePlatform(): StorePlatform {
    if (typeof navigator === 'undefined') {
        return 'desktop';
    }

    const userAgent = navigator.userAgent || '';
    const platform = navigator.platform || '';

    if (/Android/i.test(userAgent)) {
        return 'android';
    }

    const isClassicIOS = /iPhone|iPad|iPod/i.test(userAgent);

    // iPadOS 13+ can identify itself as MacIntel.
    const isModernIPad =
        platform === 'MacIntel' &&
        navigator.maxTouchPoints > 1;

    if (isClassicIOS || isModernIPad) {
        return 'ios';
    }

    return 'desktop';
}

const sizeClasses: Record<StoreButtonSize, string> = {
    regular: 'px-5 py-2.5 text-base',
    tight: 'px-5 py-2 text-base',
    compact: 'px-5 py-2.5 text-sm',
};

interface StoreButtonProps {
    store: 'android' | 'ios';
    label: string;
    enabled: boolean;
    size: StoreButtonSize;
}

function StoreButton({
    store,
    label,
    enabled,
    size,
}: StoreButtonProps) {
    const isAndroid = store === 'android';

    const commonClassName = [
        'w-full sm:w-auto',
        'flex items-center justify-center',
        'gap-2 md:gap-3',
        sizeClasses[size],
        'md:px-8 md:py-4',
        'rounded-xl md:rounded-2xl',
        'font-bold md:text-xl',
        'transition-all',
    ].join(' ');

    const icon = isAndroid ? (
        <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
    ) : (
        <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
    );

    if (!enabled) {
        return (
            <span
                aria-disabled="true"
                className={[
                    commonClassName,
                    'bg-slate-300 text-white',
                    'opacity-60 grayscale',
                    'cursor-not-allowed select-none',
                ].join(' ')}
            >
                {icon}
                {label}
            </span>
        );
    }

    if (isAndroid) {
        return (
            <a
                href={GOOGLE_PLAY_URL}
                className={[
                    commonClassName,
                    'bg-primary text-white',
                    'hover:bg-blue-700',
                    'shadow-xl shadow-blue-500/20',
                    'active:scale-95',
                ].join(' ')}
            >
                {icon}
                {label}
            </a>
        );
    }

    return (
        <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={[
                commonClassName,
                'bg-slate-900 text-white',
                'hover:bg-slate-700',
                'shadow-xl shadow-slate-500/20',
                'active:scale-95',
            ].join(' ')}
        >
            {icon}
            {label}
        </a>
    );
}

interface StoreDownloadButtonsProps {
    androidLabel: string;
    iosLabel: string;
    size?: StoreButtonSize;
}

export default function StoreDownloadButtons({
    androidLabel,
    iosLabel,
    size = 'regular',
}: StoreDownloadButtonsProps) {
    // SSR/hydration markup stays identical.
    // Desktop is the neutral initial state: both stores enabled.
    const [platform, setPlatform] =
        useState<StorePlatform>('desktop');

    useEffect(() => {
        setPlatform(detectStorePlatform());
    }, []);

    return (
        <>
            <StoreButton
                store="android"
                label={androidLabel}
                enabled={platform !== 'ios'}
                size={size}
            />
            <StoreButton
                store="ios"
                label={iosLabel}
                enabled={platform !== 'android'}
                size={size}
            />
        </>
    );
}
