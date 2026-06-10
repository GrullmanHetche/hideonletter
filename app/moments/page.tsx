import type { Metadata } from "next";
import LockScreen from "@/components/moments/LockScreen";

export const metadata: Metadata = {
  title: "Moments",
  description: "잠금화면에 쌓인 알림들 — 그날의 대화를 펼치는 기록.",
};

export default function MomentsPage() {
  return <LockScreen />;
}
