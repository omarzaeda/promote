/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Input, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../Atoms/CustomButton";

export default function Footer() {
  const Links = [
    {
      title: "Pages",
      icon: "/icons/pages-sm-icon.svg",
      links: [
        {
          link: "Home",
          href: "/",
        },
        {
          link: "About",
          href: "/about",
        },
        {
          link: "Blog",
          href: "/blog",
        },
        {
          link: "Pricing Single",
          href: "/pricing",
        },
        {
          link: "Contact",
          href: "/contac",
        },
        {
          link: "Services",
          href: "/services",
        },
      ],
    },
    {
      title: "Uitility Pages",
      icon: "/icons/pen-sm-icon.svg",
      links: [
        {
          link: "Styleguide",
          href: "",
        },
        {
          link: "404 Not Found",
          href: "",
        },
        {
          link: "Password Protected",
          href: "",
        },
        {
          link: "Licenses",
          href: "",
        },
        {
          link: "Changelog",
          href: "",
        },
      ],
    },
    {
      title: "Follows",
      icon: "/icons/announcement-sm-icon.svg",
      links: [
        {
          link: "Facebook",
          href: "https://www.facebook.com",
        },
        {
          link: "Twitter",
          href: "https://twitter.com",
        },
        {
          link: "Instagram",
          href: "https://instagram.com",
        },
        {
          link: "LinkedIn",
          href: "https://linkedin.com",
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        py: { xs: "80px", md: "190px" },
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          gap: "90px",
          mx: "auto",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "secondary.main2",
            p: { xs: "25px", md: "50px" },
            maxWidth: { xs: "100%", md: "400px" },
            width: "100%",
            height: "652px",
          }}
        >
          <Link href="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: 800,
                mb: "13px",
              }}
            >
              <Image
                className="lg:w-[71px] lg:h-[71px] xl:w-[81px] xl:h-[81px]"
                src="/icons/logo.svg"
                width={50}
                height={50}
                alt=""
              />
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "37px" },
                  color: "white",
                  fontWeight: 800,
                }}
                variant="h4"
              >
                Promote
              </Typography>
            </Box>
          </Link>
          <Image
            className="lg:h-[200px]"
            src="/images/footer-announcement.png"
            width={287}
            height={200}
            alt=""
          />
          <Typography variant="h5" sx={{ color: "white", pb: "3px" }}>
            Subscribe now
          </Typography>
          <Typography variant="p" sx={{ color: "#D0D0D0" }}>
            Industry's standard from dummy and make a type book.
          </Typography>
          <Input
            placeholder="Enter Your Email..."
            sx={{
              mt: "18px",
              py: "18px",
              px: "26px",
              color: "white",
              fontSize: "18px",
              bgcolor: "#5B5B61",
              width: "100%",
              mb: "18px",
            }}
          />
          <CustomButton variant="primary" size="full">
            Subscribe
          </CustomButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              pb: "50px",
              borderBottom: "1px solid #727274",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: "40px", md: "60px", xl: "110px" },
              flexWrap: { xs: "wrap", lg: "nowrap" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image
                  src="/icons/phone-sm-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                />
                <Typography variant="h5" sx={{ color: "white" }}>
                  Get in touch with
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "secondary.main2",
                  px: "32px",
                  py: "12px",
                  my: "17px",
                  borderRadius: "6px",
                  width: "fit-content",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: { xs: "16px" },
                  }}
                  variant="h5"
                >
                  +1 917 000 1212
                </Typography>
              </Box>
              <Link href="mailto:nextlevel@marketing.com">
                <Typography sx={{ color: "white" }} variant="p">
                  nextlevel@marketing.com
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                color: "white",
                maxWidth: "297px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image
                  src="/icons/location-sm-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <Typography variant="h5" sx={{ color: "white" }}>
                  Location
                </Typography>
              </Box>
              <Typography variant="p" sx={{ color: "white", my: "20px" }}>
                10 Suna House 65 Rivington Street London EC2A 3QQ
              </Typography>
              <Link href="">
                <Typography
                  variant="p"
                  sx={{
                    color: "primary.main",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  location
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              py: "50px",
              borderBottom: "1px solid #727274",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: { xs: "50px" },
            }}
          >
            {Links.map((link) => (
              <Box key={link}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Image src={link.icon} alt="" width={25} height={25} />
                  <Typography variant="h5" sx={{ color: "white" }}>
                    {link.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "30px",
                    gap: "10px",
                  }}
                >
                  {link.links.map((li) => (
                    <Link key={li} href={li.href}>
                      <Typography
                        key={li}
                        sx={{
                          color: "white",
                          "&:hover": {
                            opacity: "70%",
                          },
                        }}
                        variant="li"
                      >
                        {li.link}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              py: "30px",
              width: "100%",
              textAlign: { xs: "left", md: "center" },
            }}
          >
            Copyright © Nextlevel | Designed by VictorFlow - Powered by Webflow
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
