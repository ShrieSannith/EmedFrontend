/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

const bgImage = "/OT_Contact_Us.avif";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    // Prepare EmailJS template parameters
    const templateParams = {
      clientName: formData.fullName,
      phoneNumber: formData.email, // Email in place of phone since there's no phone field
      service: "Contact form query", // Fixed value as per request
      additionalInfo: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          setStatusMessage("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

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
        <Grid item xs={12} sm={10} md={7} lg={6} xl={4} ml="auto" mr="auto">
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
              <MKTypography variant="bold" color="info" mb={5} sx={{ fontSize: "15px" }}>
                <Icon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }}>
                  phone
                </Icon>{" "}
                +91 87783 38998
                <br />
                <Icon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }}>
                  email
                </Icon>{" "}
                emedbss@gmail.com
                <br />
                <Icon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }}>
                  map
                </Icon>{" "}
                100C, V.O.C. STREET, Injambakkam, Chennai - 600115
              </MKTypography>

              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
                mt={5}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you with?"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
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
              {statusMessage && (
                <MKTypography color="info" mt={2} textAlign="center">
                  {statusMessage}
                </MKTypography>
              )}
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
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
