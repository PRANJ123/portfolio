import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pranjal Bajpai",
  description: "A portfolio site built with Next.js and Tailwind CSS.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="max-w-7xl mx-auto py-10 px-4 ">
            <header className="absolute left-10 z-10">
              <div className="flex items-center justify-between">
                {/* <ModeToggle /> */}
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1ZyEhhjOh_chsCXWKDJf_wZmJ3C2ygDUB/view?usp=sharing"
                  >
                    Resume
                  </a>
                  {/* <Link href="/posts">Blog</Link> */}
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
