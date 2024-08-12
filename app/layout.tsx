import type { Metadata } from "next";

import "@/app/globals.css";
import { calSans } from "@/components/local-fonts";

export const metadata: Metadata = {
  title: {
    default: "Ajay Singh",
    template: "%s | Ajay Singh",
  },
  description: "A Personal Portfolio for Ajay Singh.",
  openGraph: {
    title: "Ajay Singh",
    description:
      "A Personal Portfolio for Ajay Singh.",
    url: "https://ajaysingh.com.np",
    siteName: "Ajay Singh",
    images: [
      {
        url: "https://ajaysingh.com.np/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ajay Singh",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/images/logo-color.png",
  },
};

// const popins = Poppins({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={calSans.className}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        {children}
      </body>
    </html>
  );
}