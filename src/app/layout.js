import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "ETRA Universe | One Universe. Infinite Creativity.",
  description:
    "ETRA Universe brings together ETRA Dreams and ETRA Gaming under one creative ecosystem, delivering visual effects, animation, gaming, CGI and immersive digital experiences.",
  keywords: [
    "ETRA Universe",
    "ETRA Dreams",
    "ETRA Gaming",
    "Visual Effects",
    "Animation",
    "Game Development",
    "CGI",
    "Interactive Experiences",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}