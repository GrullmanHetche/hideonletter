import type { Metadata } from "next";
import ArchiveBook from "@/components/archive/ArchiveBook";

export const metadata: Metadata = {
  title: "Archive",
  description: "전 3장의 서간 — 강의실, 서예실, 그리고 다정한 무지.",
};

export default function ArchivePage() {
  return <ArchiveBook />;
}
