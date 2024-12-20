import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
} from "@mui/material";
import MKTypography from "components/MKTypography";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ServiceAccordion() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const services = [
    "Hospital Maintenance",
    "NABH Calibration",
    "OT Development and Installation",
    "MGPS Installation Services",
    "Equipment For Rent",
    "On-site Service Support",
    "AMC Medical Equipment",
    "Practical Training Programs",
    "Refurbished Equipment",
    "Standby Support",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      {/* Accordion Container */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>SERVICES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {/* List of Services */}
            {services.map((service, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{service}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{`Details about ${service}`}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Request a Service Form */}
      <Box sx={{ mt: 4, p: 2, border: "1px solid #ddd", borderRadius: "8px", boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Request a Service
        </Typography>

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
        </MKTypography>
        <br />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 0, backgroundColor: "#fff", color: "black" }}
              />
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                id="service"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1, color: "#fff" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

export default ServiceAccordion;