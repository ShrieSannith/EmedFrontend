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
  const isMobile = useMediaQuery("(max-width:768px)");
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
          padding: "10px",
          marginLeft: "10px",
          display: "grid",
          gap: "5px",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 3fr", // Switch to block layout on mobile
        }}
      >
        <Grid item xs={12} sm={6} style={{ margin: "10px" }}>
          {" "}
          <AccordianForms />
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
          <MKBox component="section" py={2}>
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
                      description="Our hospital maintenance services provide reliable upkeep for medical facilities, focusing on equipment servicing, facility repairs, and sanitation."
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
                      description="NABH calibration ensures medical equipment meets standards set by the Medical Board."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="NABH calibration ensures compliance with accreditation standards for accurate and safe healthcare delivery."
                    />
                  </RotatingCard>
                </Grid>
              </Grid>
            </Container>
            <br />
            {/* OT and MGPS*/}
            <Container>
              <Grid container spacing={10} justifyContent="center" alignItems="center">
                {/* OT Installation Services */}
                {/* OT Development and Installation */}
                <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={HospitalMaintenance}
                      icon="construction"
                      title={
                        <>
                          OT Development
                          <br />
                          and Installation
                        </>
                      }
                      description="Comprehensive solutions for the design and installation of state-of-the-art OTs."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="Our OT development and installation services include the design, construction, and integration of advanced Operation Theatre setups. From planning layouts to installing high-tech medical equipment, we ensure functionality, hygiene standards, and compliance with healthcare regulations."
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
                      description="End-to-end MGPS installation services ensuring optimal oxygen and other gas flow in medical facilities."
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
                      description="Our equipment rental service offers healthcare providers access to a wide range of high-quality medical equipment on a short-term or long-term basis. This allows hospitals, clinics, and other healthcare facilities to meet their operational needs without the heavy upfront costs associated with purchasing equipment. From diagnostic tools to life-saving machines, we ensure that all rental equipment is well-maintained, regularly calibrated, and fully functional, helping healthcare providers focus on delivering exceptional patient care."
                      //   action={{
                      //     type: "internal",
                      //     route: "/sections/page-sections/page-headers",
                      //     label: "start with header",
                      //   }}
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
                          Service Support
                        </>
                      }
                      description="We offer reliable onsite service support to ensure seamless operation and maintenance of your equipment and systems."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="Our onsite service support provides prompt, professional assistance directly at your location, ensuring the smooth functioning of your equipment and systems. Whether it's routine maintenance, urgent repairs, or troubleshooting, our skilled technicians are available to address issues swiftly, minimizing downtime and disruptions. By offering personalized, on-the-spot service, we help organizations maintain operational efficiency, reduce equipment failure risks, and improve overall performance."
                      //   action={{
                      //     type: "internal",
                      //     route: "/sections/page-sections/page-headers",
                      //     label: "start with header",
                      //   }}
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
                      description="Comprehensive AMC services for regular maintenance and support to extend the life and reliability of medical equipment."
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
                      description="Custom training programs to upskill staff in medical equipment operation and safety protocols."
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
                      description="Well-tested refurbished equipment offering an economical alternative for clinics and hospitals."
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
                      description="Quick and reliable standby support for unexpected breakdowns."
                    />
                    <RotatingCardBack
                      image={HospitalMaintenance}
                      title="What do we offer?"
                      description="24/7 standby support services to address equipment issues and reduce downtime during emergencies."
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
