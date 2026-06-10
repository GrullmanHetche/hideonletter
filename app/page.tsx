import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "HIDEONLETTER — 다정한 무지 속에 머무는 기록",
  description: "성공의 뒷면에 남은 실패의 형태 곁에 머무는, S.H.Lee × Y.H.Lee의 봉인된 아카이브.",
};

export default function Home() {
  return <HomeClient />;
}
