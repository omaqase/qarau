import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qarau",
  description: "Qarau - innovative marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
