import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex items-center justify-center">{children}</body>
    </html>
  );
}
