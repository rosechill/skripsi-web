import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Container from "@/components/templates/Container";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Home | Travelxism",
    template: "%s | Travelxism",
  },
  description: "Travelxism ",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
