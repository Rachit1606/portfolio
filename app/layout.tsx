import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Rachit Khanna | Full Stack Developer, Cloud Engineer & AI Specialist",
  description:
    "Portfolio of Rachit Khanna. Software Developer with 2+ years of experience driving business outcomes through scalable distributed systems, cloud-native applications, and Generative AI. AWS Certified Solutions Architect based in Halifax, Canada.",
  referrer: "no-referrer",
  creator: "Rachit Khanna",
  authors: {
    name: "Rachit Khanna",
  },
  keywords:
    "Rachit Khanna, Software Developer, Full Stack Developer, Generative AI, Cloud Engineer, AWS Certified Solutions Architect, Python, Java, React, Next.js, Node.js, Spring Boot, Artificial Intelligence, Halifax, Canada",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/rj.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/rj.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/rj.png"
        />
        <link rel="manifest" href="/logos/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
