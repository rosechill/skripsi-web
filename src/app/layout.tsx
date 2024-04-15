import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Container from "@/components/Container";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">    
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
