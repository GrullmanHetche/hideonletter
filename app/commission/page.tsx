import type { Metadata } from "next";
import CommissionGallery from "@/components/commission/CommissionGallery";

export const metadata: Metadata = {
  title: "Commission",
  description: "수신 전시실 — 두 사람의 이야기가 다른 손을 거쳐 돌아온 그림과 글.",
};

export default function CommissionPage() {
  return <CommissionGallery />;
}
