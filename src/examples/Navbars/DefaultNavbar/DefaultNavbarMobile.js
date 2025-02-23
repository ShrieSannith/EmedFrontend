/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";

import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, IconButton, InputBase, Box, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));
  const products = [
    "PPGI/EPOXY Modular OT",
    "Stainless Steel Modular OT",
    "Medical Gas Pipeline",
    "OT Table",
    "LED OT Light",
    "Anesthesia Workstation",
    "Surgical Diathermy",
    "Vessel Sealer",
    "Autoclave / Suction Machine",
    "Patient Monitor",
    "BiPAP/CPAP Machine",
    "ICU Ventilator",
    "ICU/Transport Ventilator",
    "Defibrillator",
    "Infusion Pump",
    "Syringe Pump",
    "ECG Machine",
    "Mobile / Stationary X-rays",
    "High Frequency X-rays",
    "C-Arm Machine",
    "CR – Computed Radiography",
    "DR – Digital Radiography",
    "Patient Monitor Accessories",
    "Surgical Diathermy Accessories",
    "Ventilator Circuits",
    "Bains Circuit",
    "ECG Cable/Electrodes",
    "O2 Flow Meter",
    "O2 Regulator",
    "O2/N2O Cylinders",
    "Suction Jars",
    "Chest Stand",
    "Lead Apron",
    "Lead Shield",
    "Lead Partition",
    "Thyroid Collar",
    "Flow Sensors",
    "O2 Sensors",
    "Printer Rollers",
    "Printer Circuit Boards",
    "Switches",
    "Transducers",
    "Electrodes",
    "Lead-acid Batteries",
    "NICD/NIMH Batteries",
    "Lithium-ion Batteries",
    "General Surgical Instruments",
    "Orthopedic Surgical Instruments",
    "Paper Roll",
    "Keypad",
  ];
  const handleSearchChange = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the list based on search term (case insensitive)
    const filtered = products.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

    setFilteredSuggestions(filtered);
    setOpenSuggestions(value.length > 0); // Show suggestions if there's a search term
  };

  const handleSuggestionClick = (suggestion) => {
    // Replace whitespaces with hyphens and convert to lowercase
    const formattedSuggestion = suggestion.replace(/\s+/g, "-").toLowerCase();

    setSearchTerm(suggestion);
    setOpenSuggestions(false);

    // Navigate with the formatted suggestion
    navigate(`/products/${formattedSuggestion}`); // Modify based on your routing logic
  };

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MKBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                    >
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel={el.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        {/* <InputBase
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            padding: "0px 10px",
            width: "200px",
            fontSize: "15px",
          }}
        /> */}

        {openSuggestions && filteredSuggestions.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 3,
              maxHeight: "200px", // Set max height for vertical scrolling
              zIndex: 1,
              display: "flex",
              flexDirection: "column", // Arrange suggestions vertically
              overflowY: "auto", // Enable vertical scrolling
              overflowX: "hidden", // Enable horizontal scrolling
              padding: "5px", // Add padding for spacing
              color: "white", //
            }}
          >
            {filteredSuggestions.map((suggestion, index) => (
              <MenuItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                sx={{
                  fontSize: "14px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginBottom: "5px", // Add margin for spacing between items
                }}
              >
                {suggestion}
              </MenuItem>
            ))}
          </Box>
        )}
      </Box>
      <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
        <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
          {renderNavbarItems}
        </MKBox>
      </Collapse>
    </>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";
// import PropTypes from "prop-types";
// import Collapse from "@mui/material/Collapse";
// import MuiLink from "@mui/material/Link";
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
// import SearchIcon from "@mui/icons-material/Search";
// import { AppBar, Toolbar, IconButton, InputBase, Box, MenuItem } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function DefaultNavbarMobile({ routes, open }) {
//   const [collapse, setCollapse] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openSuggestions, setOpenSuggestions] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [isInputFocused, setIsInputFocused] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.visualViewport) {
//         if (isInputFocused) {
//           window.scrollTo(0, 0);
//           document.documentElement.style.setProperty(
//             "--viewport-height",
//             `${window.visualViewport.height}px`
//           );
//         }
//       }
//     };

//     window.visualViewport?.addEventListener("resize", handleResize);
//     return () => window.visualViewport?.removeEventListener("resize", handleResize);
//   }, [isInputFocused]);

//   const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));
//   const products = [
//     "PPGI/EPOXY Modular OT",
//     "Stainless Steel Modular OT",
//     "Medical Gas Pipeline",
//     "OT Table",
//     "LED OT Light",
//     "Anesthesia Workstation",
//     "Surgical Diathermy",
//     "Vessel Sealer",
//     "Autoclave / Suction Machine",
//     "Patient Monitor",
//     "BiPAP/CPAP Machine",
//     "ICU Ventilator",
//     "ICU/Transport Ventilator",
//     "Defibrillator",
//     "Infusion Pump",
//     "Syringe Pump",
//     "ECG Machine",
//     "Mobile / Stationary X-rays",
//     "High Frequency X-rays",
//     "C-Arm Machine",
//     "CR – Computed Radiography",
//     "DR – Digital Radiography",
//     "Patient Monitor Accessories",
//     "Surgical Diathermy Accessories",
//     "Ventilator Circuits",
//     "Bains Circuit",
//     "ECG Cable/Electrodes",
//     "O2 Flow Meter",
//     "O2 Regulator",
//     "O2/N2O Cylinders",
//     "Suction Jars",
//     "Chest Stand",
//     "Lead Apron",
//     "Lead Shield",
//     "Lead Partition",
//     "Thyroid Collar",
//     "Flow Sensors",
//     "O2 Sensors",
//     "Printer Rollers",
//     "Printer Circuit Boards",
//     "Switches",
//     "Transducers",
//     "Electrodes",
//     "Lead-acid Batteries",
//     "NICD/NIMH Batteries",
//     "Lithium-ion Batteries",
//     "General Surgical Instruments",
//     "Orthopedic Surgical Instruments",
//     "Paper Roll",
//     "Keypad",
//   ];
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setIsSearchActive(true);

//     const filtered = products.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
//     setFilteredSuggestions(filtered);
//     setOpenSuggestions(value.length > 0);
//   };

//   const handleClearSearch = () => {
//     setSearchTerm("");
//     setOpenSuggestions(false);
//   };
//   const handleSuggestionClick = (suggestion) => {
//     const formattedSuggestion = suggestion
//       .replace(/[^a-zA-Z0-9]+/g, "-")
//       .replace(/^-+|-+$/g, "")
//       .toLowerCase();
//     setSearchTerm(suggestion);
//     setOpenSuggestions(false);
//     navigate(`/products/${formattedSuggestion}`);
//   };

//   const handleInputFocus = () => {
//     setIsSearchActive(true);
//     setIsInputFocused(true);
//   };

//   const handleInputBlur = () => {
//     setIsInputFocused(false);
//     if (!searchTerm) {
//       setIsSearchActive(false);
//     }
//   };

//   const renderNavbarItems = routes.map(
//     ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
//       <DefaultNavbarDropdown
//         key={name}
//         name={name}
//         icon={icon}
//         collapseStatus={name === collapse}
//         onClick={() => handleSetCollapse(name)}
//         href={href}
//         route={route}
//         collapse={Boolean(navCollapse)}
//       >
//         <MKBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
//           {routeCollapses &&
//             routeCollapses.map((item) => (
//               <MKBox key={item.name} px={2}>
//                 {item.collapse ? (
//                   <>
//                     <MKTypography
//                       display="block"
//                       variant="button"
//                       fontWeight="bold"
//                       textTransform="capitalize"
//                       py={1}
//                       px={0.5}
//                     >
//                       {item.name}
//                     </MKTypography>
//                     {item.collapse.map((el) => (
//                       <MKTypography
//                         key={el.name}
//                         component={el.route ? Link : MuiLink}
//                         to={el.route ? el.route : ""}
//                         href={el.href ? el.href : ""}
//                         target={el.href ? "_blank" : ""}
//                         rel={el.href ? "noreferrer" : "noreferrer"}
//                         minWidth="11.25rem"
//                         display="block"
//                         variant="button"
//                         color="text"
//                         textTransform="capitalize"
//                         fontWeight="regular"
//                         py={0.625}
//                         px={2}
//                         sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
//                           borderRadius: borderRadius.md,
//                           cursor: "pointer",
//                           transition: "all 300ms linear",

//                           "&:hover": {
//                             backgroundColor: grey[200],
//                             color: dark.main,
//                           },
//                         })}
//                       >
//                         {el.name}
//                       </MKTypography>
//                     ))}
//                   </>
//                 ) : (
//                   <MKBox
//                     key={item.key}
//                     display="block"
//                     component={item.route ? Link : MuiLink}
//                     to={item.route ? item.route : ""}
//                     href={item.href ? item.href : ""}
//                     target={item.href ? "_blank" : ""}
//                     rel={item.href ? "noreferrer" : "noreferrer"}
//                     sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
//                       borderRadius: borderRadius.md,
//                       cursor: "pointer",
//                       transition: "all 300ms linear",
//                       py: 1,
//                       px: 1.625,

//                       "&:hover": {
//                         backgroundColor: grey[200],
//                         color: dark.main,

//                         "& *": {
//                           color: dark.main,
//                         },
//                       },
//                     })}
//                   >
//                     <MKTypography
//                       display="block"
//                       variant="button"
//                       fontWeight="bold"
//                       textTransform="capitalize"
//                     >
//                       {item.name}
//                     </MKTypography>
//                     <MKTypography
//                       display="block"
//                       variant="button"
//                       color="text"
//                       fontWeight="regular"
//                       sx={{ transition: "all 300ms linear" }}
//                     >
//                       {item.description}
//                     </MKTypography>
//                   </MKBox>
//                 )}
//               </MKBox>
//             ))}
//         </MKBox>
//       </DefaultNavbarDropdown>
//     )
//   );

//   return (
//     <Collapse
//       in={Boolean(open)}
//       timeout="auto"
//       unmountOnExit
//       sx={{
//         position: "fixed",
//         top: "64px",
//         left: 0,
//         right: 0,
//         zIndex: 1200,
//         backgroundColor: "background.paper",
//         height: "var(--viewport-height, auto)",

//         overflowY: "auto",
//       }}
//     >
//       {" "}
//       <MKBox width="calc(100% + 0 rem)" my={1} ml={2} mr={2}>
//         {renderNavbarItems}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             position: "relative",
//             padding: "8px",
//           }}
//         >
//           <InputBase
//             value={searchTerm}
//             onChange={handleSearchChange}
//             onFocus={handleInputFocus}
//             onBlur={handleInputBlur}
//             placeholder="Search..."
//             sx={{
//               backgroundColor: "white",
//               borderRadius: 1,
//               padding: "12px",
//               flex: 1,
//               fontSize: "0.875rem",
//               boxShadow: 1,
//             }}
//           />
//           {searchTerm && (
//             <IconButton
//               onClick={handleClearSearch}
//               sx={{
//                 ml: 1,
//                 position: "absolute",
//                 right: "4px",
//               }}
//             >
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           )}

//           {openSuggestions && filteredSuggestions.length > 0 && (
//             <Box
//               sx={{
//                 position: "fixed",
//                 top: "120px",
//                 left: "22px",
//                 right: "20px",
//                 backgroundColor: "background.paper",
//                 borderRadius: 1,
//                 boxShadow: 3,
//                 maxHeight: "15vh",
//                 zIndex: 1300,
//                 overflowY: "auto",
//                 padding: "4px",
//               }}
//             >
//               {filteredSuggestions.map((suggestion, index) => (
//                 <MenuItem
//                   key={index}
//                   onClick={() => handleSuggestionClick(suggestion)}
//                   sx={{
//                     fontSize: "0.875rem",
//                     padding: "8px",
//                     marginBottom: "4px",
//                     minHeight: "auto",
//                   }}
//                 >
//                   {suggestion}
//                 </MenuItem>
//               ))}
//             </Box>
//           )}
//         </Box>
//       </MKBox>
//     </Collapse>
//   );
// }

// // Typechecking props for the DefaultNavbarMobile
// DefaultNavbarMobile.propTypes = {
//   routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
//   open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
// };

// export default DefaultNavbarMobile;
