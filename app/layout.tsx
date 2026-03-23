import "./globals.css";

export const metadata = {
  title: "Tech Store",
  description: "Electronics + Perfume Ads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
