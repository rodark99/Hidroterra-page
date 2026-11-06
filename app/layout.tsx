import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Hidroterra | Ingeniería, agua y energía", template: "%s | Hidroterra" },
  description:
    "Soluciones hidráulicas, sistemas de bombeo y soporte técnico para industria y riego.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
