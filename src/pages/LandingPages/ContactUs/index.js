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
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon"; // Import the Icon component
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// // Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";
const bgImage =
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="bold" color="info" mb={2} sx={{ fontSize: "15px" }}>
                <Icon fontSize="small" style={{ verticalAlign: "middle", marginRight: "8px" }}>
                  phone
                </Icon>
                +91 87783 38998
                <br />
                <Icon fontSize="small" style={{ verticalAlign: "middle", marginRight: "8px" }}>
                  phone
                </Icon>
                +91 9790759552
                <br />
                <Icon fontSize="small" style={{ verticalAlign: "middle", marginRight: "8px" }}>
                  email
                </Icon>
                emedbss@gmail.com
                <br />
                <Icon fontSize="small" style={{ verticalAlign: "middle", marginRight: "8px" }}>
                  room
                </Icon>
                # 100 C, V.O.C. Street, Injambakkam, Chennai – 600 115. Tamilnadu, India.
                <br /> <br /> <br />
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Tell us your need"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6.8}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
          />
        </Grid>
      </Grid>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
