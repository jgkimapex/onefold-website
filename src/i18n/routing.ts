import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'it', 'ru', 'pt', 'vi', 'th', 'id', 'ar', 'hi', 'tr', 'pl'],

    // Used when no locale matches
    defaultLocale: 'ko'
});

export type AppLocale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
