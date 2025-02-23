/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

// @mui material components
import React, { useState } from "react"; // Add this line
import { CardMedia, CardContent, Typography } from "@mui/material";
import { AppBar, Toolbar, IconButton, InputBase, MenuItem } from "@mui/material";

// Import EmailJS
import emailjs from "@emailjs/browser";

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
// import Information from "pages/Presentation/sections/information";
// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// Images
import bgImage from "assets/images/OT_generated_2.png";
import "../../App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
function Presentation() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const [phone, setPhone] = useState("");
  const [open, setOpen] = React.useState(false);
  const [clientName, setClientName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [service, setService] = React.useState("");
  const [additionalInfo, setAdditionalInfo] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const products = [
    "PPGI/EPOXY Modular OT",
    "Stainless Steel Modular OT",
    "Medical Gas Pipeline",
    "OT Table",
    "LED OT Light",
    "Anesthesia Workstation",
    "Surgical Diathermy",
    "Vessel Sealer",
    "Autoclave / Suction Machine",
    "Patient Monitor",
    "BiPAP/CPAP Machine",
    "ICU Ventilator",
    "ICU/Transport Ventilator",
    "Defibrillator",
    "Infusion Pump",
    "Syringe Pump",
    "ECG Machine",
    "Mobile / Stationary X-rays",
    "High Frequency X-rays",
    "C-Arm Machine",
    "CR – Computed Radiography",
    "DR – Digital Radiography",
    "Patient Monitor Accessories",
    "Surgical Diathermy Accessories",
    "Ventilator Circuits",
    "Bains Circuit",
    "ECG Cable/Electrodes",
    "O2 Flow Meter",
    "O2 Regulator",
    "O2/N2O Cylinders",
    "Suction Jars",
    "Chest Stand",
    "Lead Apron",
    "Lead Shield",
    "Lead Partition",
    "Thyroid Collar",
    "Flow Sensors",
    "O2 Sensors",
    "Printer Rollers",
    "Printer Circuit Boards",
    "Switches",
    "Transducers",
    "Electrodes",
    "Lead-acid Batteries",
    "NICD/NIMH Batteries",
    "Lithium-ion Batteries",
    "General Surgical Instruments",
    "Orthopedic Surgical Instruments",
    "Paper Roll",
    "Keypad",
  ];
  const handleSearchChange = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the list based on search term (case insensitive)
    const filtered = products.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

    setFilteredSuggestions(filtered);
    setOpenSuggestions(value.length > 0); // Show suggestions if there's a search term
  };

  const handleSuggestionClick = (suggestion) => {
    // Replace whitespaces with hyphens and convert to lowercase
    const formattedSuggestion = suggestion
      .replace(/[^a-zA-Z0-9]+/g, "-") // Replace all non-alphanumeric characters with '-'
      .replace(/^-+|-+$/g, "") // Remove leading/trailing '-'
      .toLowerCase();

    setSearchTerm(suggestion);
    setOpenSuggestions(false);

    // Navigate with the formatted suggestion
    navigate(`/products/${formattedSuggestion}`); // Modify based on your routing logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service) {
      alert("Please select a service.");
      return;
    }
    handleOpen(); // Open modal on form submit
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!clientName || !phoneNumber) {
      alert("Name and Phone Number are mandatory.");
      return;
    }

    const templateParams = {
      clientName,
      phoneNumber,
      service,
      additionalInfo,
    };

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully", response.status, response.text);
      alert("Email sent successfully");
      handleClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
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
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  marginRight: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  width: "100%",
                  maxWidth: "400px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
                required
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option value="Hospital Maintenance">Hospital Maintenance</option>
                <option value="NABH Calibration Services">NABH Calibration Services</option>
                <option value="NABH Calibration Services">Equipment for Rent</option>
                {/* <optgroup label="Equipment for rent">
                  <option value="Ventilator">Ventilator</option>
                  <option value="Monitor">Monitor</option>
                  <option value="Syringe Infusion Pump">Syringe Infusion Pump</option>
                  <option value="Blanket Warmer">Blanket Warmer</option>
                  <option value="ECG Machine">ECG Machine</option>
                  <option value="Xray Portable">Xray Portable</option>w 
                </optgroup> */}
                <option value="On-site Service Support">On-site Service Support</option>
                <option value="AMC Medical Equipment">AMC Medical Equipment</option>
                <option value="Practical Training Programs">Practical Training Programs</option>
                <option value="MGPS Installation Services">MGPS Installation Services</option>
                <option value="Refurbished Equipment">Refurbished Equipment</option>
                <option value="Home Care Equipment">Home Care Equipment</option>
                <option value="Standby Support">Standby Support</option>
              </select>

              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#3457D5", color: "white", borderRadius: 0 }}
              >
                Send
              </Button>
            </form>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Translucent white
                width: "100%", // Ensures responsiveness
                maxWidth: "490px", // Limits max width
                minWidth: "200px", // Prevents it from being too small
                margin: "10px auto", // Centers it horizontally
                borderRadius: 0, // Square corners
                padding: "8px",
                boxShadow: 3,
                fontSize: "10px",

                // Responsive Styles
                "@media (max-width: 600px)": {
                  fontSize: "8px", // Adjust font size for smaller screens
                  padding: "6px", // Reduce padding on mobile
                },
              }}
            >
              <InputBase
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Products..."
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  padding: "0px 10px",
                  width: "100%",
                  fontSize: "12px",
                }}
              />

              {openSuggestions && filteredSuggestions.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    boxShadow: 3,
                    maxHeight: "200px", // Set max height for vertical scrolling
                    zIndex: 10, // Ensure it's above other elements
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    padding: "5px",
                    color: "black", // Fixed text color to be visible
                  }}
                >
                  {filteredSuggestions.map((suggestion, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      sx={{
                        fontSize: "14px",
                        padding: "8px 12px",
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#f0f0f0" }, // Highlight on hover
                        "&:last-child": { marginBottom: 0 }, // Avoid unnecessary bottom spacing
                      }}
                    >
                      {suggestion}
                    </MenuItem>
                  ))}
                </Box>
              )}
            </Box>
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
          <form
            onSubmit={handleModalSubmit}
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Name Field */}
            <div style={{ marginBottom: "16px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            {/* Phone Number Field */}
            <div style={{ marginBottom: "16px" }}>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Phone
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Enter phone number"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            {/* Tell Us More Field */}
            <div style={{ marginBottom: "16px" }}>
              <label
                htmlFor="additionalInfo"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Tell us more
              </label>
              <textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Tell us more about your requirements"
                rows="4"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#3457D5",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
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
        {/* <Quickapply /> */}
        <CardSection />
        <Container sx={{ mt: 5 }}>
          {/* <BuiltByDevelopers /> */}
          <Special />
        </Container>
        <Products />
        {/* <Testimonials></Testimonials> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
