import type { Metadata } from "next";
import localFont from "next/font/local";
import "../asset/css/index.css"

export const metadata: Metadata = {
  title: "My Wedding",
  description: "Get Your Wedding Done",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <main className="flex-grow flex flex-col gap-y-16">
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
