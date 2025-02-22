/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import emailjs from "emailjs-com"; // Import EmailJS
import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PhoneInput from "react-phone-number-input";
import "react-phone-input-2/lib/style.css";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

// Import the product list JSON
import productList from "../ProductList.json"; // Replace with the actual path

function Contact() {
  const location = useLocation(); // Get the current location object
  const [product, setProduct] = useState({
    name: "Default Product Name",
    bgImage: "default-image-url.jpg",
  });
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    clientName: "",
    requirement: "Buy",
    additionalInfo: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Extract the last part of the URL (the product ID)
    const pathSegments = location.pathname.split("/");
    const productId = pathSegments[pathSegments.length - 1];

    // Find the product in the productList by matching the product ID
    const matchedProduct = productList.find((item) => item.id === productId);

    if (matchedProduct) {
      setProduct({
        name: matchedProduct.name,
        bgImage: matchedProduct.imageSrc,
      });
    } else {
      setProduct({
        name: "Product Not Found",
        bgImage: "default-image-url.jpg",
      });
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.clientName || !phone) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      clientName: formData.clientName,
      phoneNumber: phone,
      requirement: formData.requirement,
      productName: product.name,
      additionalInfo: formData.additionalInfo || "No additional info provided",
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_PRODUCT_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setFormData({ clientName: "", requirement: "Buy", additionalInfo: "" });
          setPhone("");
        },
        (error) => {
          setStatusMessage("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: `url(${product.bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  {/* Additional content can be added here */}
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post" onSubmit={handleSubmit}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1} sx={{ fontSize: "25px" }}>
                      {product.name}
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2} sx={{ fontSize: "17px" }}>
                      Enquiry Form
                    </MKTypography>
                  </MKBox>

                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid item xs={12} pr={1} mb={4} mt={-6}>
                      <FormLabel id="requirement-label" sx={{ fontSize: "17px" }}>
                        Requirement
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="requirement-label"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="Buy" control={<Radio />} label="Buy Product" />
                        <FormControlLabel value="Rent" control={<Radio />} label="Rent Product" />
                        <FormControlLabel value="Service" control={<Radio />} label="Service" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                      </RadioGroup>
                    </Grid>
                    <Grid container spacing={3} pr={1} mb={6} mt={-2}>
                      <Grid item xs={12} sm={6}>
                        <MKInput
                          variant="standard"
                          label="Client Name"
                          name="clientName"
                          value={formData.clientName}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} style={{ marginTop: "-20px" }}>
                        <label style={{ fontSize: "12px", color: "gray" }}>Phone</label>
                        <PhoneInput
                          country={"in"}
                          value={phone}
                          onChange={setPhone}
                          inputStyle={{ width: "100%", fontSize: "14px" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item xs={12} pr={1} mb={6} mt={-3}>
                      <MKInput
                        variant="standard"
                        label="Your message"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        multiline
                        rows={2}
                      />
                    </Grid>

                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="info"
                        sx={{ fontSize: "10px" }}
                      >
                        Send
                      </MKButton>
                    </Grid>

                    {statusMessage && (
                      <MKTypography color="info" mt={2} textAlign="center">
                        {statusMessage}
                      </MKTypography>
                    )}
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
