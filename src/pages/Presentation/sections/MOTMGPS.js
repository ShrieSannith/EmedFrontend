/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import Slider from "react-slick";
import { Phone } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MOTSS from "../../../assets/images/ssOT.jpg";
import ModularOTSS from "../../../assets/images/pcgiOT.jpg";

import MGPS from "../../../assets/images/mgps1.jpg";
import Compressor from "../../../assets/images/compressor1.jpg";

function AppointmentForm() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the time interval between slides (5 seconds)
  };

  return (
    <Box sx={{ padding: { xs: 0, sm: 4 }, margin: { xs: 0, sm: 2 } }}>
      <Grid
        container
        item
        xs={11}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        {/* Left Side Carousel */}
        <Grid item xs={12} md={5}>
          <Slider {...settings}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "400px", // Fixed height
                  display: "flex", // Enables flexbox
                  justifyContent: "center", // Centers horizontally
                  alignItems: "center", // Centers vertically
                }}
              >
                <img
                  src={MOTSS}
                  style={{
                    width: "100%", // Fixed width (responsive within parent)
                    height: "100%", // Fixed height (resizes to parent container)
                    objectFit: "cover", // Crops the image to fit the dimensions
                    borderRadius: "8px",
                    maxWidth: "400px", // Max width for the image
                  }}
                  alt="Medical 1"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "400px", // Fixed height
                  display: "flex", // Enables flexbox
                  justifyContent: "center", // Centers horizontally
                  alignItems: "center", // Centers vertically
                }}
              >
                <img
                  src={ModularOTSS}
                  style={{
                    width: "100%", // Fixed width (responsive within parent)
                    height: "100%", // Fixed height (resizes to parent container)
                    objectFit: "cover", // Crops the image to fit the dimensions
                    borderRadius: "8px",
                    maxWidth: "400px", // Max width for the image
                  }}
                  alt="Medical 2"
                />
              </div>
            </div>
            {/* <div>
              <div
                style={{
                  width: "100%",
                  height: "400px", // Fixed height
                  display: "flex", // Enables flexbox
                  justifyContent: "center", // Centers horizontally
                  alignItems: "center", // Centers vertically
                }}
              >
                <img
                  src={Compressor}
                  style={{
                    width: "100%", // Fixed width (responsive within parent)
                    height: "100%", // Fixed height (resizes to parent container)
                    objectFit: "cover", // Crops the image to fit the dimensions
                    borderRadius: "8px",
                    maxWidth: "400px", // Max width for the image
                  }}
                  alt="Medical 3"
                />
              </div> 
            </div>*/}
          </Slider>
        </Grid>

        {/* Right Side Form */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2} padding={4} style={{ backgroundColor: "#f9f9f9" }}>
            {/* Section Title */}
            <Grid item xs={12}>
              <Typography variant="h4" align="center" sx={{ color: "#007FFF", textAlign: "start" }}>
                Modular Operation Theatre
              </Typography>
            </Grid>

            {/* Description */}

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "17px" }}>
                What We Offer:
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "15px" }}>
                We create state-of-the-art Modular OTs, fully equipped from scratch.
              </Typography>
              <Box component="ul" sx={{ paddingLeft: 2, fontSize: "15px" }}>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Pre-fabricated, antibacterial wall panels with smooth finishes for easy
                  maintenance and a hygienic environment.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Advanced HVAC systems ensuring proper air circulation and HEPA filtration to
                  maintain sterile conditions.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  High-intensity shadowless lights with customizable illumination settings for
                  enhanced visibility during surgeries.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Seamless integration of surgical equipment, monitors, and control systems for
                  accessibility and functionality.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Comprehensive maintenance services to ensure peak efficiency and minimize
                  downtime.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={11}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        {/* Left Side Carousel */}
        <Grid item xs={12} md={5}>
          <Slider {...settings}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "400px", // Fixed height
                  display: "flex", // Enables flexbox
                  justifyContent: "center", // Centers horizontally
                  alignItems: "center", // Centers vertically
                }}
              >
                <img
                  src={MGPS}
                  style={{
                    width: "100%", // Fixed width (responsive within parent)
                    height: "100%", // Fixed height (resizes to parent container)
                    objectFit: "cover", // Crops the image to fit the dimensions
                    borderRadius: "8px",
                    maxWidth: "400px", // Max width for the image
                  }}
                  alt="Medical 1"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "400px", // Fixed height
                  display: "flex", // Enables flexbox
                  justifyContent: "center", // Centers horizontally
                  alignItems: "center", // Centers vertically
                }}
              >
                <img
                  src={Compressor}
                  style={{
                    width: "100%", // Fixed width (responsive within parent)
                    height: "100%", // Fixed height (resizes to parent container)
                    objectFit: "cover", // Crops the image to fit the dimensions
                    borderRadius: "8px",
                    maxWidth: "400px", // Max width for the image
                  }}
                  alt="Medical 2"
                />
              </div>
            </div>
          </Slider>
        </Grid>
        {/* Right Side Form */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2} padding={4}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" sx={{ color: "#007FFF", textAlign: "start" }}>
                Medical Gas Pipeline System for Hospitals
              </Typography>
            </Grid>

            {/* Description */}

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "17px" }}>
                What We Offer:
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "15px" }}>
                We provide high-quality and reliable medical gas pipeline systems to hospitals,
                ensuring patient safety and operational efficiency.
              </Typography>
              <Box component="ul" sx={{ paddingLeft: 2, fontSize: "15px" }}>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Full installation of medical gas pipelines tailored to hospital needs.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Compliance with international medical gas standards and regulations.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Regular maintenance and safety checks to ensure system reliability.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Customizable solutions for diverse healthcare environments.
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontSize: "15px", marginBottom: 1 }}
                >
                  Emergency response and support for critical situations.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppointmentForm;
