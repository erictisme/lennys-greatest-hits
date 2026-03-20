import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/lib/audio-context";
import NowPlayingBar from "@/components/NowPlayingBar";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lennys-greatest-hits.vercel.app"
  ),
  title: "Lenny's Greatest Hits",
  description:
    "Tech culture anthems from 638 episodes of Lenny's Podcast. Real, catchy songs built from the best insights in product, startups, and building.",
  openGraph: {
    title: "Lenny's Greatest Hits",
    description:
      "10 songs from 638 episodes. The insights you quote on X, turned into music you can feel.",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Lenny's Greatest Hits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenny's Greatest Hits",
    description:
      "10 songs from 638 episodes. The insights you quote on X, turned into music you can feel.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <PostHogProvider>
          <AudioProvider>
            <div className="pb-[72px]">{children}</div>
            <NowPlayingBar />
          </AudioProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
