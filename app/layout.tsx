import "./globals.css";

export const metadata = {
  title: "Tech Store",
  description: "Electronics + Perfume Ads",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 font-sans">{children}</body>
    </html>
  );
}
