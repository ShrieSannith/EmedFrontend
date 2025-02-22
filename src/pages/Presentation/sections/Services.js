/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import customTheme from "../../../assets/theme/customTheme"; // Import the custom theme

//images
import Handshake from "./assets/handshake.jpg";
import Service from "./assets/service.avif";
import HospitalMaintenance from "./assets/Hospital_Maintenance.jpg";
import Training from "./assets/training.avif";
const InfoCard = ({ image, heading, buttonLabel, isVisible, delay, href }) => {
  return (
    <a
      href={href}
      style={{ textDecoration: "none", color: "inherit" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        sx={{
          position: "relative", // Position relative to allow absolute positioning of overlay
          maxWidth: "300px", // Set a fixed maxWidth for each card
          margin: "20px",
          backgroundColor: "transparent", // Make the card background transparent
          transition: `transform 0.5s ease-in-out ${delay}ms, opacity 0.5s ease-in-out ${delay}ms`,
          transform: isVisible ? "translateY(0)" : "translateY(30px)", // Slide up effect
          opacity: isVisible ? 1 : 0, // Fade in effect
          overflow: "hidden", // Hide overflowing content
          height: "300px", // Set a fixed height for the card
          padding: 0,
          border: "none", // Remove the card borders
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={heading}
          sx={{ objectFit: "cover" }} // Cover the card area completely
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 102, 178, 0.5)", // Blue overlay with 50% opacity
            color: "white",
            padding: "10px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white !important", fontSize: "23px" }}
          >
            {heading}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

const CardSection = () => {
  const cardData = [
    {
      image: Handshake,
      heading: "Equipment Sales",
      buttonLabel: "Learn More",
      href: "/equipment-sales", // Add href for navigation
    },
    {
      image: Service,
      heading: "Equipment Service",
      buttonLabel: "Learn More",
      href: "/equipment-service", // Add href for navigation
    },
    {
      image: HospitalMaintenance,
      heading: "Hospital Maintenance",
      buttonLabel: "Learn More",
      href: "/modular-ot-setup", // Add href for navigation
    },
    {
      image: Training,
      heading: "Practical Training",
      buttonLabel: "Learn More",
      href: "/industry-training", // Add href for navigation
    },
  ];

  const [visibleCards, setVisibleCards] = useState(new Array(cardData.length).fill(false));
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true;
            return newVisibleCards;
          });
          observer.unobserve(entry.target); // Stop observing once the card is visible
        }
      });
    });

    // Observe each card reference
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      {/* <Typography
        variant="h4"
        sx={{
          color: "#007FFF", // Blue color
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
          marginRight: "30px",
          fontFamily: "Brush Script ",
        }}
      >
        Services
      </Typography>
      <Box
        sx={{
          width: "80%", // Adjust width to match card contents
          height: "1px", // Thin line
          backgroundColor: "#007FFF", // Blue color for the line
          margin: "0 auto 0px auto", // Center and add space below
        }}
      ></Box>{" "} */}
      {/* Wrap CardSection in ThemeProvider */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xs: "column", // Column layout on extra-small screens
            md: "row", // Row layout on medium and larger screens
          },
          padding: {
            xs: "10px", // For extra-small screens
            sm: "10px", // For small screens
            md: "50px 100px 0px 100px", // For medium screens and larger
          },
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} // Center the card in the grid
            >
              <InfoCard
                image={card.image}
                heading={card.heading}
                buttonLabel={card.buttonLabel}
                isVisible={visibleCards[index]}
                delay={index * 200} // Add delay for staggered effect (200ms apart)
                // href={card.href} // Pass the href to InfoCard
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CardSection;
