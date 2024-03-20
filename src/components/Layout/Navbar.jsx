"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {
  Button,
  FormControlLabel,
  Modal,
  Paper,
  Slide,
  Switch,
  styled,
} from "@mui/material";
import { CustomButton } from "../Atoms/CustomButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
const pages = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
  },
  {
    id: 4,
    name: "Pages",
    dropDownLinks: ["Case Study", "Services", "Services Single"],
    href: "/pages",
    dropDown: true,
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
  },
];
const icon = (
  <Paper sx={{ width: "100%", height: "100vh", left: 0, top: 0 }} elevation={4}>
    1
  </Paper>
);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  fontSize: "20px",
  gap: "20px",
  flexDirection: "column",
};
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const path = usePathname();
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  function handleClosee() {
    setAnchorEl(null);
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="lg" sx={{ p: { xs: "24px", md: "0px" } }}>
        <StyledToolbar>
          <Box sx={{ cursor: "pointer" }}>
            <Link href="/">
              <Box
                sx={{ display: "flex", alignItems: "center", fontWeight: 800 }}
              >
                <Image
                  className="lg:w-[71px] lg:h-[71px] xl:w-[81px] xl:h-[81px]"
                  src="/icons/logo.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <Typography
                  sx={{ fontSize: { xs: "24px", md: "30px" }, fontWeight: 800 }}
                  variant="h4"
                >
                  Promote
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {pages.map((link, i) => (
                  <Link key={link.id} href={link.href}>
                    <Typography key={i} variant="li">
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Modal>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex", gap: "20px" },
              justifyContent: "center",
            }}
          >
            {pages
              .filter((page) => !page.dropDown)
              .map((page) => (
                <a key={page.id} href={page.href}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "secondary.main",
                      textTransform: "capitalize",
                      fontSize: { xs: "14px", lg: "18px" },
                      "&:hover": {
                        opacity: "70%",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      {page.name}
                      {path === page.href && (
                        <Box sx={{ display: "flex" }}>
                          <Box
                            sx={{
                              width: "25px",
                              height: "3px",
                              borderRadius: "40px",
                              backgroundColor: "primary.blue",
                            }}
                          ></Box>
                          <Box
                            sx={{
                              width: "25px",
                              height: "3px",
                              borderRadius: "40px",
                              backgroundColor: "primary.main",
                            }}
                          ></Box>
                        </Box>
                      )}
                    </Box>
                  </Button>
                </a>
              ))}

            {pages
              .filter((page) => page.dropDown)
              .map((page) => (
                <Box
                  sx={{ position: "relative" }}
                  key={page.id}
                  onMouseEnter={() => setOpenMenu(true)}
                  onMouseLeave={() => setOpenMenu(false)}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "secondary.main",
                      textTransform: "capitalize",
                      fontSize: { xs: "14px", lg: "18px" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        position: "relative",
                      }}
                    >
                      {page.name}
                      <ExpandCircleDownIcon />
                    </Box>
                  </Button>
                  <Box
                    sx={{
                      width: 161,
                      py: "10px",
                      position: "absolute",
                      top: "60px",
                      left: "-35%",
                      backgroundColor: "secondary.offWhite",
                      zIndex: 1000,
                      borderRadius: "16px",
                    }}
                    display={openMenu ? "block" : "none"}
                  >
                    {page.dropDownLinks.map((link) => (
                      <Link key={link} href="/">
                        <Typography
                          sx={{
                            color: "secondary.main",
                            py: "12px",
                            px: "20px",
                            fontWeight: 600,
                            "&:hover": {
                              color: "primary.blue",
                              transition: "all 0.3s",
                            },
                            zIndex: 1000,
                          }}
                        >
                          {link}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>
              ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex", gap: "20px" } }}>
            <CustomButton className="max-lg:hidden" href="" variant="text">
              Login
            </CustomButton>
            <CustomButton>Get Started</CustomButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
