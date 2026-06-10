import type { Metadata } from "next";
import ProfileCards from "@/components/profile/ProfileCards";

export const metadata: Metadata = {
  title: "Profile",
  description: "Official Pair Profile — 두 장의 선수 카드와 가방 속 사물들.",
};

export default function ProfilePage() {
  return <ProfileCards />;
}
