import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://nexct.io"),
  title: "NEXCt | Advancing Clinical Research Through Collaboration",
  description:
    "NEXCt showcases collaboration between ACHIEVE Clinical Expertise and S-3 Research—bringing clinician infrastructure and responsible technology together to advance clinical research.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "NEXCt",
    title: "NEXCt | Advancing Clinical Research Through Collaboration",
    description:
      "Clinician infrastructure and responsible technology, together to advance clinical research.",
    images: [
      {
        url: "/images/nexct-collaboration-hero.png",
        alt: "A care team, patient, and caregiver reviewing research information together",
      },
    ],
  },
};
export const viewport: Viewport = { themeColor: "#071b2b" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
