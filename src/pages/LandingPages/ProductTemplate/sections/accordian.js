/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionIcon from "@mui/icons-material/Description";
import routes from "../../../../routes"; // Adjust the path to your routes file
import productList from "../ProductList.json"; // Adjust the path to your JSON file

const EquipmentAccordion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imageSrc, setImageSrc] = useState(""); // State to hold the dynamic imageSrc

  // Extract the product ID from the URL (assuming the URL ends with the product ID)
  useEffect(() => {
    const pathParts = location.pathname.split("/"); // Split the URL by "/"
    const productId = pathParts[pathParts.length - 1]; // Get the last part as the product ID

    // Find the product in the productList based on the extracted ID
    const foundProduct = productList.find((product) => product.id === productId);

    // If product is found, set the imageSrc
    if (foundProduct) {
      setImageSrc(foundProduct.imageSrc);
    }
  }, [location.pathname]); // Run this effect whenever the URL changes

  const renderAccordion = (data) => {
    return data.map((item, index) => {
      // Check if the item has collapse (nested items)
      if (item.collapse) {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ fontSize: "17px" }}>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
                {renderAccordion(item.collapse)} {/* Recursive call for nested items */}
              </ul>
            </AccordionDetails>
          </Accordion>
        );
      }

      // If it's a product with no collapse and no dropdown, skip rendering
      if (item.route) {
        return (
          <li
            key={index}
            onClick={() => navigate(item.route)}
            style={{
              cursor: "pointer",
              padding: "5px 0",
              color: "blue",
              textDecoration: "none",
            }}
          >
            <Typography style={{ fontSize: "15px" }}>{item.name}</Typography>
          </li>
        );
      }

      // If the item doesn't have collapse or route (indicating a heading without any nested items), skip it
      return null;
    });
  };

  return (
    <div>
      {renderAccordion([routes[0]])}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Dynamically render image */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Product Image"
            style={{ width: "100%", maxWidth: "600px", height: "auto" }}
          />
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* <Button
          variant="contained"
          color="primary"
          startIcon={<DescriptionIcon />}
          onClick={() => window.open("https://drive.google.com", "_blank")}
          sx={{ color: "#fff" }}
        >
          DOCUMENTS
        </Button> */}
      </div>
    </div>
  );
};

export default EquipmentAccordion;
