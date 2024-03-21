import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/components/theme";
import { usePathname } from "next/navigation";
import MainLayout from "@/components/Layout/MainLayout";

export const metadata = {
  title: {
    default: "Page - Promote Project",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="/icons/promote-faicon.png" rel="shortcut icon" type="image/x-icon"></link>
      <body className="relative">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
