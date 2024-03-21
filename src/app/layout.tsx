import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/montserrat";
import "@fontsource/inter";
import "@fontsource/red-hat-display";
import "@fontsource/poppins";
import { ReduxProvider } from "@/store/provider";

export const metadata: Metadata = {
  title: "Crework",
  description:
    "Get your next product job with our community first immersive cohort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
}
