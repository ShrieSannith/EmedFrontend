/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data from "pages/Presentation/sections/data/designBlocksData";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data based on search query
  const filteredData = data.filter(
    ({ title, items }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      items.some(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderData = filteredData.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 6 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <MKBox
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Stack image and text vertically
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "300px", // Set fixed height
                    bgcolor: "white", // White background
                    borderRadius: "8px", // Optional: Rounded corners
                    boxShadow: 2, // Optional: Shadow for better visibility
                    overflow: "hidden", // Ensure image doesn't overflow
                    textAlign: "center", // Center text
                    padding: 2, // Add padding for text spacing
                  }}
                >
                  <img
                    src={image}
                    alt={name}
                    style={{
                      maxWidth: "100%", // Maintain aspect ratio
                      maxHeight: "100%", // Maintain aspect ratio
                      objectFit: "contain", // Ensure the entire image is visible
                    }}
                  />
                  <MKTypography variant="h6" fontWeight="medium" mt={1}>
                    {name} {/* Display the heading here */}
                  </MKTypography>
                  <MKTypography variant="body2" color="text.secondary">
                    {/* Optional: Display the count or any additional info */}
                  </MKTypography>
                </MKBox>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={0} py={1}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Top Products for Sale
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Look for the products you need!
          </MKTypography>

          {/* Search Box */}
          <TextField
            label="Search Products"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
      </Container>
      <Container sx={{ mt: 4 }}>{renderData}</Container>
    </MKBox>
  );
}

export default Products;
