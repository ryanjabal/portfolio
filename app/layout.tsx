import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Cinzel } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ryan Jabal — Design Portfolio",
  description:
    "Design portfolio showcasing brand identity, product design, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight hover:text-muted transition-colors"
        >
          Ryan Jabal
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/#work"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Ryan Jabal
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:ryanjabal@gmail.com"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-jabal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
