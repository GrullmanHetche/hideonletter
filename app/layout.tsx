import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google"; // 명조체 삭제!
import "./globals.css";

const sans = Noto_Sans_KR({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hide on Letter",
  description: "The Archive of SangHyeok & YuHyeon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* 폰트를 하나로 통일해서 애플 특유의 깔끔함을 살립니다 */}
      <body className={`${sans.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}