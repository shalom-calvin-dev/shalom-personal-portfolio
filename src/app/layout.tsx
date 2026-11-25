import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getExperienceLabel } from "@/lib/experience-label";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Shalom Calvin | Software Engineer – Backend, Full Stack & Power Platform";

// The years value is computed from the career start date, so metadata is generated rather than static.
// The meta, Open Graph and Twitter descriptions all use this one string.
export async function generateMetadata(): Promise<Metadata> {
  const description = `Portfolio of Shalom Calvin, a Software Engineer with ${await getExperienceLabel()} of experience building scalable backend APIs, modern web applications and Microsoft Power Platform automation solutions.`;

  return {
    title,
    description,
    authors: [{ name: "Shalom Calvin" }],
    // One URL constant (src/lib/site.ts) drives metadataBase, the canonical link, og:url and the social image URLs.
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: "Shalom Calvin",
      title,
      description,
      locale: "en_US",
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const themeInitScript = `(function(){var d=document.documentElement;var t="dark";try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark"){t=s}else if(window.matchMedia("(prefers-color-scheme: light)").matches){t="light"}}catch(e){}d.setAttribute("data-theme",t)})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below sets data-theme on <html> before React hydrates.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Runs before first paint: saved choice wins, otherwise follow the OS; avoids a wrong-theme flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#ffffff] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#1c1917]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
