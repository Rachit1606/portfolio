import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Rachit Khanna || Personal Portfolio",
  description:
    "Full-stack developer, Cloud Engineer and Generative AI Enthusiast with experience in building robust applications using modern technologies. Skilled in frontend development, backend development, Implementing Generative AI, and passionate about creating efficient and scalable solutions.",
  referrer: "no-referrer",
  creator: "Rachit Khanna",
  authors: {
    name: "Rachit Khanna",
  },
  keywords:
    "HTML, CSS, Javascript, Typescript, Angular, Java, Spring Boot, SQL, Microservices, Vertex AI, AWS, GCP, Agile",
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
