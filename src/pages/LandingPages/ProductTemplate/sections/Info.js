/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to read the URL
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Import the product list JSON (or fetch it if it's coming from an API)
import productList from "../ProductList.json"; // Replace with the actual path

function Info() {
  const location = useLocation(); // Get the current location object
  const [product, setProduct] = useState({
    name: "Default Product Name", // Default fallback name
    description: "No description available.", // Default fallback description
    bgImage: "https://cdn.dotmed.com/images/listingpics2/3/7/3/0/3730503.jpg", // Default image URL
  });

  useEffect(() => {
    // Extract 'id' from the URL
    const routeName = location.pathname.split("/").pop();

    // Find the matching product
    const matchedProduct = productList.find((item) => item.id === routeName);

    if (matchedProduct) {
      // Set the product info including description
      setProduct({
        name: matchedProduct.name,
        description: matchedProduct.description, // This is the HTML snippet
        bgImage:
          matchedProduct.imageSrc ||
          "https://cdn.dotmed.com/images/listingpics2/3/7/3/0/3730503.jpg", // Use the image from JSON
      });
    }
  }, [location.pathname]); // Depend on location.pathname to re-run the effect when the URL changes

  return (
    <MKBox display="flex" alignItems="center" borderRadius="xl" my={0} py={3}>
      <Container>
        {/* Main Grid Container */}
        <Grid container spacing={3}>
          {/* Text Section on the Left Side */}
          <Grid item xs={12} md={12}>
            <MKTypography variant="h1" color="black" mb={1} sx={{ fontSize: "30px" }}>
              About the Product
            </MKTypography>
            {/* Rendering the HTML content */}
            <MKTypography
              variant="body1"
              color="black"
              opacity={0.8}
              mb={2}
              sx={{ fontSize: "17px" }}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Info;
