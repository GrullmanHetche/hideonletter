import type { Metadata } from "next";
import { Suspense } from "react";
import ScheduleCalendar from "@/components/schedule/ScheduleCalendar";

export const metadata: Metadata = {
  title: "Schedule",
  description: "T1의 경기와 유현의 날들이 한 달력 위에서 만나는 곳.",
};

export default function SchedulePage() {
  return (
    <Suspense fallback={<main className="min-h-[60vh]" />}>
      <ScheduleCalendar />
    </Suspense>
  );
}
