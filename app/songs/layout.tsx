import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Songs | Lenny's Greatest Hits",
  description:
    "Browse all 102 songs built from Lenny Rachitsky's best podcast and newsletter insights. Search by topic, guest, or album.",
};

export default function SongsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
