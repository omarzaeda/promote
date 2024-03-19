"use client"
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FFDC60",
            blue: "#5956E8",
        },
        secondary: {
            main: '#292930',
            main2: "#3C3C45",
            darkGray: "#555555",
            offWhite: "#F6F6F6",
        },
    },
    typography: {
        fontFamily: "Nunito",
        h1: {
            fontSize: "45px",
            fontWeight: 600,
            color: "#292930"
        },
        h2: {
            fontSize: "40px",
            fontWeight: 600,
            color: "#292930"
        },
        h3: {
            fontSize: "35px",
            fontWeight: 600,
            color: "#292930"
        },
        h4: {
            fontSize: "30px",
            fontWeight: 600,
            color: "#292930"
        },
        h5: {
            fontSize: "25px",
            fontWeight: 600,
            color: "#292930"
        },
        h6: {
            fontSize: "20px",
            fontWeight: 600,
            color: "#292930"
        },
        p: {
            fontFamily: "Noto Sans",
            fontSize: "18px",
            color: "#555"
        },
        li: {
            fontFamily: "Noto Sans",
            fontSize: "18px",
            color: "#555"
        },
        ol: {
            fontFamily: "Noto Sans",
            fontSize: "18px",
            color: "#555"
        },
    },

});
