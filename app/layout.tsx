import type { Metadata } from "next";
import { Inter, Geist_Mono, Spectral } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/lib/audio-context";
import NowPlayingBar from "@/components/NowPlayingBar";
import TrackNavigator from "@/components/TrackNavigator";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-lenny",
  weight: ["400", "600"],
  style: ["normal", "italic"],
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
    siteName: "Lenny's Greatest Hits",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenny's Greatest Hits",
    description:
      "10 songs from 638 episodes. The insights you quote on X, turned into music you can feel.",
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
      className={`${inter.variable} ${geistMono.variable} ${spectral.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Lenny's Greatest Hits",
              description:
                "Tech culture anthems from 638 episodes of Lenny's Podcast. Real, catchy songs built from the best insights in product, startups, and building.",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://lennys-greatest-hits.vercel.app",
              applicationCategory: "Entertainment",
              operatingSystem: "Web",
            }),
          }}
        />
        <PostHogProvider>
          <AudioProvider>
            <div className="pb-[72px]">{children}</div>
            <NowPlayingBar />
            <TrackNavigator />
          </AudioProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
