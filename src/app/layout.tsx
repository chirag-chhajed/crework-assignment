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
  openGraph: {
    title: "Crework",
    description:
      "Get your next product job with our community first immersive cohort",
    siteName: "Crework",
    images: [
      {
        url: "https://res.cloudinary.com/crework-cloud/image/upload//c_thumb,w_1200,h_630/v1709912646/Preview_Image_PM_Cohort_a11edk.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
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
