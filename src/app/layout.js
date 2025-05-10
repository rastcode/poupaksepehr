

import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
      <body className="flex items-center justify-center">{children}</body>
    </html>
  );
}
