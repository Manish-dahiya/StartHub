import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local';

const workSans = localFont({
  src: [
    { path: "assets/fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    { path: "assets/fonts/WorkSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "assets/fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "assets/fonts/WorkSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "assets/fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "assets/fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "assets/fonts/WorkSans-Thin.ttf", weight: "200", style: "normal" },
    { path: "assets/fonts/WorkSans-ExtraLight.ttf", weight: "100", style: "normal" }
  ],
  variables: "--font-work-sans",
});

export const metadata = {
  title: "StartHub",
  description: "Find Your Startup Here",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${workSans.variable}`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
