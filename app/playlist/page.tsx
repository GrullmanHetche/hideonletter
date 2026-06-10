import type { Metadata } from "next";
import Turntable from "@/components/playlist/Turntable";

export const metadata: Metadata = {
  title: "Playlist",
  description: "Sound Archive — 서사를 따라 도는 15곡의 턴테이블.",
};

export default function PlaylistPage() {
  return <Turntable />;
}
