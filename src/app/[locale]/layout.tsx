import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Outfit } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'ko' ? "ONEfold - 모든 파일과 링크를 하나의 폴더에 보관하세요." : "ONEfold - Keep all files and links in one folder.",
    description: locale === 'ko' ? "모든 파일과 링크를 하나의 폴더에 보관하세요. (문서, 사진, 오디오, 비디오, 인터넷 링크 등)" : "Keep all files and links in one folder. (Documents, photos, audio, video, internet links, etc.)",
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-inter`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
