import type { Metadata } from "next";
import "./globals.css";
// import "@fontsource/montserrat";
// import "@fontsource/inter";
// import "@fontsource/red-hat-display";
// import "@fontsource/poppins";
import { ReduxProvider } from "@/store/provider";
import dynamic from "next/dynamic";
import { PHProvider } from "./providers";
import { Montserrat, Inter, Red_Hat_Display, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--red-hat-display",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--poppins",
});

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

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
    <html
      className={`${poppins.variable} ${montserrat.variable} ${redHatDisplay.variable} ${inter.variable}`}
      lang="en"
    >
      <PHProvider>
        <ReduxProvider>
          <body>
            {children}
            <PostHogPageView />
          </body>
        </ReduxProvider>
      </PHProvider>
    </html>
  );
}
