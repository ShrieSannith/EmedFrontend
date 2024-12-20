import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const QuickEnquiryForm = () => {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, phone });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2c2c2c",
        color: "white",
        width: "100%",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "1200px", // Set maxWidth to 1300px
        margin: "0 auto", // Center align horizontally
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          spacing={2}
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" }, // Inline for laptops
          }}
        >
          {/* Quick Enquiry Heading */}
          <Grid item>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
              Quick Enquiry
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff", fontSize: "12px" }}>
              We will contact you shortly.
            </Typography>
          </Grid>

          {/* Name Input */}
          <Grid item xs={12} sm={6} md={2.5}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputProps={{
                style: {
                  height: "56px", // Fixed height to match other inputs
                  color: "#fff",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "56px", // Ensures consistent height for the input container
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#1976D2" },
                },
                input: {
                  padding: "12px", // Adjust padding to vertically center text
                  color: "#fff",
                },
              }}
            />
          </Grid>

          {/* Phone Input */}
          <Grid item xs={12} sm={6} md={3}>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                height: "56px",
                backgroundColor: "#2c2c2c",
                color: "#fff",
                border: "1px solid #555",
                borderRadius: "4px",
              }}
              buttonStyle={{
                backgroundColor: "#2c2c2c",
                // borderRight: "1px solid #555",
              }}
              placeholder=""
            />
          </Grid>

          {/* Dropdown (Alternative Method) */}
          <Grid item xs={12} sm={6} md={3}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "56px",
                color: "#fff",
                backgroundColor: "#2c2c2c",
                border: "1px solid #555",
                borderRadius: "4px",
                padding: "8px",
              }}
            >
              <option value="" disabled>
                Select Service
              </option>
              <option value="Modular Operation Theatre">Modular Operation Theatre</option>
              <option value="Hospital Design">Medical Gas Pipeline System</option>
              <option value="Healthcare Equipment">Others</option>
            </select>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sm={6} md="auto">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                height: "56px",
                width: "150px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default QuickEnquiryForm;
