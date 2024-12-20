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
import * as React from "react";
import { useState } from "react";
import Icon from "@mui/material/Icon"; // Import the Icon component
// Material Kit 2 React components
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { InputAdornment, FormControl, Select, MenuItem } from "@mui/material";
import arrowdown from "../../../../assets/images/arrowdown.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
// Images
// import bgImage from "assets/images/examples/blog2.jpg";
const bgImage = "https://automensys.com/wp-content/uploads/2020/10/S6100-Anesthesia-Machine.jpeg";
function Contact() {
  const [service, setService] = React.useState("");
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const handleChange = (event) => {
    setService(event.target.value);
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
                  backgroundImage: `url(${bgImage})`, // Only the background image
                  backgroundSize: "cover", // Ensure the image covers the container
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox display="flex" color="white" p={1}></MKBox>
                  <MKBox mt={3}>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1} sx={{ fontSize: "25px" }}>
                      Anaesthesia Machine / Boyles Apparatus
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2} sx={{ fontSize: "17px" }}>
                      Enquiry Form
                    </MKTypography>
                  </MKBox>

                  <div style={{ marginLeft: "20px", marginTop: "-40px" }}>
                    <MKTypography variant="bold" color="info" mb={2} sx={{ fontSize: "17px" }}>
                      <Icon
                        fontSize="small"
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                      >
                        phone
                      </Icon>
                      +91 87783 38998
                      <br />
                      <Icon
                        fontSize="small"
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                      >
                        phone
                      </Icon>
                      +91 9790759552
                      <br />
                      <Icon
                        fontSize="small"
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                      >
                        email
                      </Icon>
                      emedbss@gmail.com
                      <br /> <br /> <br />
                    </MKTypography>
                  </div>

                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid item xs={12} pr={1} mb={4} mt={-6}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: "17px" }}>
                        Requirement
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="Buy" control={<Radio />} label="Buy Product" />
                        <FormControlLabel value="Rent" control={<Radio />} label="Rent Product" />
                        <FormControlLabel value="Service" control={<Radio />} label="Service" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                      </RadioGroup>
                    </Grid>
                    <Grid container>
                      <Grid container spacing={3} pr={1} mb={6} mt={-2}>
                        {/* Client Name Field */}
                        <Grid item xs={12} sm={6}>
                          <MKInput
                            variant="standard"
                            label="Client Name"
                            placeholder=""
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>

                        {/* Phone Number Field */}
                        <Grid item xs={12} sm={6} style={{ marginTop: "-20px" }}>
                          <div
                            style={{
                              width: "100%", // Allow container to take up full width
                              maxWidth: "310px", // Set maximum width for larger screens
                              margin: "0 auto", // Center the container if needed
                            }}
                          >
                            <label style={{ fontSize: "12px", color: "#E2DFD2" }}>Phone</label>
                            <PhoneInput
                              country={"in"}
                              value={phone}
                              onChange={(phone) => setPhone(phone)}
                              inputStyle={{
                                width: "100%", // Ensure the input takes up full width of its container
                                fontSize: "14px", // Adjust font size for better fit
                              }}
                              containerStyle={{
                                width: "100%", // Ensure the container takes up full width
                                padding: "0", // Remove extra padding if necessary
                                margin: "0", // Remove margin to keep it responsive
                              }}
                              dropdownStyle={{
                                height: "50px", // Control dropdown height
                              }}
                            />
                          </div>
                        </Grid>
                      </Grid>

                      {/* <Grid item xs={12} pr={1} mb={6}>
                        <FormControl variant="standard" fullWidth sx={{ m: 1 }}>
                          <InputLabel>Service Required</InputLabel>

                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={service}
                            onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Buy Product</MenuItem>
                            <MenuItem value={20}>Rent Product</MenuItem>
                            <MenuItem value={30}>Service</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid> */}
                      <Grid item xs={12} pr={1} mb={6} mt={-3}>
                        <MKInput
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={2}
                        />
                      </Grid>
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
                      <MKButton variant="gradient" color="info" sx={{ fontSize: "10px" }}>
                        Send
                      </MKButton>
                    </Grid>
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
