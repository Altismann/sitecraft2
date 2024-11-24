import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitecraft Portfolio",
  description: "Hej! Jag heter Anders... en produktdesigner och webbutvecklare plaserad i Stockholm. Jag skapar enklare gränssnitt för hobbyister och skapare.",
  alternates: {
    canonical: '/',
    languages: {
        'sv-SE': '/',
        'en-UK': '/en',
      },
  },
  openGraph: {
    images: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}