"use client";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const path = usePathname();
  return (
    <div>
      <ThemeProvider theme={theme}>
        {path === "/" ? (
          <>
            {children}
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
