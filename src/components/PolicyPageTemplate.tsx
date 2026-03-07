import { useTranslations } from 'next-intl';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PolicyPage({ type }: { type: 'privacy' | 'terms' | 'support' }) {
    const t = useTranslations('Policies');

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            <main className="flex-grow pt-40 pb-24 px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
                    <h1 className="font-outfit text-4xl font-bold text-text-main mb-8">
                        {t(`${type}.title`)}
                    </h1>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed whitespace-pre-line">
                            {t(`${type}.content`)}
                        </p>
                        {type === 'support' && (
                            <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                                <h2 className="font-outfit text-xl font-bold text-text-main mb-4">
                                    {t('support.emailTitle')}
                                </h2>
                                <a
                                    href={`mailto:${t('support.email')}`}
                                    className="text-primary font-bold text-lg hover:underline"
                                >
                                    {t('support.email')}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
