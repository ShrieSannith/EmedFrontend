/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React from "react";

// @mui material components
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKTypography from "components/MKTypography";
import { Grid, Typography, Link, Divider, Box, useMediaQuery } from "@mui/material";
//sections
import ImageHeader from "./sections/ImageHeader";
import Info from "./sections/Info";
import Accordion from "./sections/accordian";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function ProductTemplate() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const products = [
    "Anaesthesia Machine",
    "OT table",
    "OT Light",
    "Patient Monitor",
    "Pulseoxymeter",
    "Paper Roll",
    "ECG",
    "Ultrasound",
  ];
  return (
    <>
      {/* Fixed Navbar at the top */}
      <MKBox
        position="fixed"
        top="0"
        width="100%"
        sx={{
          zIndex: 9999, // Highest z-index
          position: "fixed", // Sticks navbar to the top
          top: 0, // Ensures it's at the top of the viewport
          width: "100%", // Stretches across the width
        }}
      >
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
          sx={{
            zIndex: 9999, // Highest z-index
            position: "fixed", // Sticks navbar to the top
            top: 0, // Ensures it's at the top of the viewport
            width: "100%", // Stretches across the width
          }}
        />
      </MKBox>
      {/* Main Content Area */}
      <br />
      <br />
      <br />
      <Box
        sx={{
          padding: 2,
          marginX: 5, // Adds margin to left and right
          maxWidth: "1200px", // Optional: restricts the width of the section
          mx: "auto", // Centers the section horizontally
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            color: "#007FFF", // Blue color
            fontWeight: "bold",
            fontFamily: "Brush Script ",
            marginBottom: 1,
          }}
        >
          Top Products
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        {/* Grid of Products */}
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid
              item
              xs={12} // Full width on extra-small screens
              sm={6} // Two items per row on small screens
              md={4} // Three items per row on medium screens
              lg={3} // Four items per row on large screens
              key={index}
            >
              <Link
                href="#"
                underline="hover"
                sx={{
                  fontSize: "0.875rem", // Small font size
                  textAlign: "center",
                  display: "block",
                  "&:hover": {
                    color: "#007FFF", // Change color to blue on hover
                  },
                }}
              >
                {product}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ImageHeader />
      <Box
        sx={{
          padding: "10px",
          marginLeft: "10px",
          display: "grid",
          gap: "5px",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 3fr", // Switch to block layout on mobile
        }}
      >
        <Grid item xs={12} sm={6} style={{ margin: "30px" }}>
          <Accordion />
        </Grid>
        <Grid item xs={12} sm={6} style={{ margin: "10px" }}>
          <Info />
        </Grid>
      </Box>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ProductTemplate;
