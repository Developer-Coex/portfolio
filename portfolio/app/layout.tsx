import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";

// const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
