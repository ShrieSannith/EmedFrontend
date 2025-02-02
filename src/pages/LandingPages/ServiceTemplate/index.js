/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { Typography, Box, useMediaQuery } from "@mui/material";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import HospitalMaintenance from "assets/images/HospitalMaintenance.jpg";

// Component
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import AccordianForms from "./AccordianForms";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
function Information() {
  const isMobile = useMediaQuery("(max-width:1000px)");
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
      <br />
      <br />
      <br />
      <Box
        sx={{
          padding: isMobile ? "0px" : "10px",
          marginLeft: "10px",
          display: "grid",
          gap: "5px",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 3fr", // Switch to block layout on mobile
        }}
      >
        <Grid item xs={12} sm={6} style={{ margin: "10px" }}>
          {" "}
          <AccordianForms
            style={{
              marginLeft: isMobile ? "auto" : "0px", // Center the element
              marginRight: isMobile ? "auto" : "0px", // Center the element
              width: isMobile ? "75%" : "auto", // Set width to 75% on mobile
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ margin: "10px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#007FFF", // Blue color
              fontWeight: "bold",
              textAlign: "start",
              marginBottom: "10px",
              marginRight: "30px",
              fontFamily: "Arial",
              marginLeft: "120px",
            }}
          >
            Services
          </Typography>
          <Box
            sx={{
              width: "78%", // Adjust width to match card contents
              height: "1px", // Thin line
              backgroundColor: "#007FFF", // Blue color for the line
              margin: "0 auto 0px auto", // Center and add space below
            }}
          ></Box>{" "}
          <MKBox component="section">
            {/* OT and MGPS*/}
            <Container>
              <Grid
                container
                spacing={10}
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: "-50px" }}
              >
                {/* OT Installation Services */}
                {/* OT Development and Installation */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="construction"
                      title={
                        <>
                          Modular
                          <br />
                          Operation Theatre
                        </>
                      }
                      description="Comprehensive solutions for the design and installation of Modular OTs."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We offer OT development and installation services, including design, construction, and integration of advanced setups while ensuring compliance."
                    />
                  </RotatingCard>
                </Grid>

                {/* MGPS Installation Services */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="construction"
                      title={
                        <>
                          MGPS
                          <br />
                          Installation Services
                        </>
                      }
                      description="Expert medical gas pipeline system installation for healthcare facilities."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We provide end-to-end MGPS installation services, ensuring optimal oxygen and gas flow to meet the needs of medical facilities."
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            </Container>
            <br />
            {/* Hospital Maintenance and NABH Calibration */}
            <Container>
              <Grid container spacing={10} justifyContent="center" alignItems="center">
                {/* Hospital Maintenance */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="vaccines"
                      title={
                        <>
                          Hospital
                          <br />
                          Maintenance
                        </>
                      }
                      description="We offer hospital maintenance and frequent checks to ensure smooth operations."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="
We provide comprehensive hospital maintenance services, handling technical issues, equipment servicing, facility repairs, and sanitation to ensure efficiency."
                    />
                  </RotatingCard>
                </Grid>

                {/* NABH Calibration */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="emergency"
                      title={
                        <>
                          NABH
                          <br />
                          Calibration
                        </>
                      }
                      description="We ensures medical equipment meets standards set by the Medical Board."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We ensure compliance with accreditation standards, guaranteeing accurate and safe healthcare delivery in line with regulatory requirements."
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            </Container>
            <br />
            {/*Equipment for rent and On site support */}
            <Container>
              <Grid container spacing={10} justifyContent="center" alignItems="center">
                {/* Rotating Card Section 1 */}
                <Grid
                  item
                  xs={12}
                  md={5}
                  spacing={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="biotech"
                      title={
                        <>
                          Equipment
                          <br />
                          For Rent
                        </>
                      }
                      description="We provide high-quality medical equipment for rent, offering flexible solutions for healthcare providers."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We provide equipment rental services, offering high-quality, well-maintained medical equipment on flexible terms to ensure operational efficiency without heavy upfront costs."
                    />
                  </RotatingCard>
                </Grid>

                {/* Rotating Card Section 2 */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="settings"
                      title={
                        <>
                          On-site
                          <br />
                          Support
                        </>
                      }
                      description="We ensure seamless operation, maintenance, and quick resolution of issues with your equipment."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We provide prompt onsite service support, ensuring quick maintenance, repairs, and troubleshooting to minimize downtime and keep operations running smoothly."
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            </Container>
            <br />

            {/* AMC and Training */}
            <Container>
              {/* AMC Medical Equipment */}
              <Grid container spacing={10} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="inventory"
                      title={
                        <>
                          AMC
                          <br />
                          Medical Equipment
                        </>
                      }
                      description="Annual Maintenance Contracts for reliable medical equipment service."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We offer comprehensive AMC services, providing prompt maintenance, regular checks, expert feedback, and consultation to ensure optimal performance and reliability."
                    />
                  </RotatingCard>
                </Grid>

                {/* Practical Training Programs */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="school"
                      title={
                        <>
                          Practical
                          <br />
                          Training Programs
                        </>
                      }
                      description="Hands-on training program to transform beginners to healthcare professionals."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We provide custom training programs to upskill staff in medical equipment operation, safety protocols, and compliance with industry standards."
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            </Container>
            <br />

            {/*Refurbushed and standby */}
            <Container>
              {/* Section 4: Final Row */}
              <Grid container spacing={10} justifyContent="center" alignItems="center">
                {/* Refurbished Equipment */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="autorenew"
                      title={
                        <>
                          Refurbished
                          <br />
                          Equipment
                        </>
                      }
                      description="High-quality refurbished medical equipment at affordable rates."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We offer well-tested refurbished equipment, providing an affordable alternative for clinics and hospitals while maintaining high quality standards."
                    />
                  </RotatingCard>
                </Grid>

                {/* Standby Support */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="support_agent"
                      title={
                        <>
                          Standby
                          <br />
                          Support
                        </>
                      }
                      description="Quick and reliable standby support during emergencies."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="We promise 24/7 standby support services, addressing equipment issues promptly to minimize downtime and ensure continuous operation during emergencies."
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            </Container>

            <br />
          </MKBox>{" "}
        </Grid>
      </Box>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Information;
