/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import routes from "../../../../routes"; // Adjust the path to your routes file

const EquipmentAccordion = () => {
  const navigate = useNavigate();

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
        <img
          src="https://www.penlon.com/app/uploads/2024/02/Prima_465-1920px.png"
          alt="Product Image"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DescriptionIcon />}
          onClick={() => window.open("https://drive.google.com", "_blank")}
          sx={{ color: "#fff" }}
        >
          DOCUMENTS
        </Button>
      </div>
    </div>
  );
};

export default EquipmentAccordion;
