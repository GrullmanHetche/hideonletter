/* eslint-disable @next/next/no-page-custom-font -- App Router head 링크 폰트는 전역 적용됨 */
import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://hideonletter.vercel.app"),
  title: { default: "HIDEONLETTER", template: "%s — HIDEONLETTER" },
  description: "The Sealed Archive of SangHyeok & YuHyeon",
  openGraph: {
    siteName: "HIDEONLETTER",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 폰트 3단 체계: UI=Pretendard / 문학=MaruBuri / 영문 디스플레이=Archivo */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://hangeul.pstatic.net/hangeul_static/css/maru-buri.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&display=swap"
        />
      </head>
      <body className="font-sans antialiased bg-ink text-paper min-h-screen flex flex-col">
        {/* 시그니처: 상단 레드 룰 — 전 페이지 공통 */}
        <div aria-hidden className="fixed top-0 left-0 z-50 h-[2px] w-full bg-t1-red" />
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
