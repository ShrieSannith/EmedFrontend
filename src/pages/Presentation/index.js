/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

// @mui material components
import React, { useState } from "react"; // Add this line
import { CardMedia, CardContent, Typography } from "@mui/material";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { TextField, Button, Modal, Box } from "@mui/material";
import "../../App.css";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";

import Products from "pages/Presentation/sections/Products";

import Testimonials from "pages/Presentation/sections/Testimonials";

import CardSection from "pages/Presentation/sections/Services";
import MOTMGPS from "pages/Presentation/sections/MOTMGPS";
import Special from "pages/Presentation/sections/special";
import Quickapply from "pages/Presentation/sections/Quickapply";
// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import PhoneInput from "react-phone-input-2";
// Images
import bgImage from "assets/images/OT_generated_2.png";
import "../../App.css";

function Presentation() {
  const [phone, setPhone] = useState("");
  const [open, setOpen] = React.useState(false);
  const [clientName, setClientName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [service, setService] = React.useState("");
  const [additionalInfo, setAdditionalInfo] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen(); // Open modal on form submit
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to the server)
    console.log({ clientName, phoneNumber, service, additionalInfo });
    handleClose(); // Close the modal after submission
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 102, 178, 0.6), rgba(0, 50, 100, 0.4)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container maxWidth="xl" sx={{ mx: "auto" }}>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              style={{ zIndex: 1 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              EMED BIOMEDICALSS{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Excellence in Medical Electronic Devices
            </MKTypography>

            {/* New Form Section */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                width: "100%",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="bannerForms"
            >
              <TextField
                placeholder="Client Name"
                variant="outlined"
                size="small"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  marginRight: "10px",
                }}
              />
              {/* <TextField
                placeholder="Phone Number"
                type="text"
                variant="outlined"
                size="small"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  marginRight: "10px",
                }}
              /> */}
              <TextField
                placeholder="Service"
                type="text"
                variant="outlined"
                size="small"
                value={service}
                onChange={(e) => setService(e.target.value)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  marginRight: "10px",
                }}
              />
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#3457D5", color: "white", borderRadius: 0 }}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Container>
      </MKBox>

      {/* Modal for additional information */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <div style={{ maxWidth: "120px" }}>
            {" "}
            {/* Adjust max width here */}
            <label style={{ fontSize: "16px", fontWeight: "bold" }}>Phone</label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              style={{
                width: "10px", // Ensure the PhoneInput takes up the full width of its container
                fontSize: "14px", // Adjust font size for better fit
              }}
            />
          </div>
          <br />
          <MKTypography variant="h6" component="h2" gutterBottom>
            Tell us more
          </MKTypography>
          <form onSubmit={handleModalSubmit}>
            <TextField
              placeholder="Additional Information"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#3457D5", color: "white", borderRadius: 0 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Typography
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
          Top Services
        </Typography>
        <Box
          sx={{
            width: "80%", // Adjust width to match card contents
            height: "1px", // Thin line
            backgroundColor: "#007FFF", // Blue color for the line
            margin: "0 auto 0px auto", // Center and add space below
          }}
        ></Box>{" "}
        <MOTMGPS />
        {/* <Information /> */}
        {/* <Carousel /> */}
        <Quickapply />
        <CardSection />
        <Container sx={{ mt: 5 }}>
          {/* <BuiltByDevelopers /> */}
          <Special />
        </Container>
        <Products />
        <Testimonials></Testimonials>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
