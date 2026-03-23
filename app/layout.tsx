import "./globals.css";
import Navbar from "@/components/Navbar";
import  footer from "@/components/Footer"

export const metadata = {
  title: "Tymo Electronics & Perfume Store | Darwin",
  description:
    "Tymo: Darwin's premier electronics, laptop sales, repair services, and luxury perfume shop. Buy laptops, gadgets, and perfumes with ease.",
  openGraph: {
    title: "Tymo Electronics & Perfume Store | Darwin",
    description:
      "Tymo: Darwin's premier electronics, laptop sales, repair services, and luxury perfume shop. Buy laptops, gadgets, and perfumes with ease.",
    url: "https://yourdomain.com",
    siteName: "Tymo Store",
    images: [
      {
        url: "/tymo-logo.png",
        width: 800,
        height: 600,
        alt: "Tymo Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 font-sans antialiased">
        {/* Navbar SSR ready, interactive via CSR */}
        <Navbar />

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
       <footer/>
      </body>
    </html>
  );
}
