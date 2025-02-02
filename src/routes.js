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

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items.
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define how many rows should be in a column.
*/

// @mui material components
import InfoIcon from "@mui/icons-material/Info";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import ProductsIcon from "@mui/icons-material/Category"; // Example icon for products
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Example icon for contact

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import ProductTemplatePage from "layouts/pages/landing-pages/product-template";
import ServicePage from "layouts/pages/services";
const routes = [
  {
    name: "Products",
    icon: <ProductsIcon />,
    dropdown: true,
    collapse: [
      {
        name: "OT Equipment",
        dropdown: true,
        collapse: [
          {
            name: "PPGI/EPOXY Modular OT",
            route: "/products/ppgi-epoxy-modular-ot",
            component: <ProductTemplatePage productName="PPGI/EPOXY Modular OT" />,
          },
          {
            name: "Stainless Steel Modular OT",
            route: "/products/stainless-steel-modular-ot",
            component: <ProductTemplatePage productName="Stainless Steel Modular OT" />,
          },
          {
            name: "Medical Gas Pipeline",
            route: "/products/medical-gas-pipeline",
            component: <ProductTemplatePage productName="Medical Gas Pipeline" />,
          },
          {
            name: "OT Table",
            route: "/products/ot-table",
            component: <ProductTemplatePage productName="OT Table" />,
          },
          {
            name: "LED OT Light",
            route: "/products/led-ot-light",
            component: <ProductTemplatePage productName="LED OT Light" />,
          },
          {
            name: "Anesthesia Workstation",
            route: "/products/anesthesia-workstation",
            component: <ProductTemplatePage productName="Anesthesia Workstation" />,
          },
          {
            name: "Surgical Diathermy",
            route: "/products/surgical-diathermy",
            component: <ProductTemplatePage productName="Surgical Diathermy" />,
          },
          {
            name: "Vessel Sealer",
            route: "/products/vessel-sealer",
            component: <ProductTemplatePage productName="Vessel Sealer" />,
          },
          {
            name: "Autoclave / Suction Machine",
            route: "/products/autoclave-suction-machine",
            component: <ProductTemplatePage productName="Autoclave / Suction Machine" />,
          },
        ],
      },
      {
        name: "ICU Equipment",
        dropdown: true,
        collapse: [
          {
            name: "Patient Monitor",
            route: "/products/patient-monitor",
            component: <ProductTemplatePage productName="Patient Monitor" />,
          },
          {
            name: "BiPAP/CPAP Machine",
            route: "/products/bipap-cpap-machine",
            component: <ProductTemplatePage productName="BiPAP/CPAP Machine" />,
          },
          {
            name: "ICU Ventilator",
            route: "/products/icu-ventilator",
            component: <ProductTemplatePage productName="ICU Ventilator" />,
          },
          {
            name: "ICU/Transport Ventilator",
            route: "/products/icu-transport-ventilator",
            component: <ProductTemplatePage productName="ICU/Transport Ventilator" />,
          },
          {
            name: "Defibrillator",
            route: "/products/defibrillator",
            component: <ProductTemplatePage productName="Defibrillator" />,
          },
          {
            name: "Infusion Pump",
            route: "/products/infusion-pump",
            component: <ProductTemplatePage productName="Infusion Pump" />,
          },
          {
            name: "Syringe Pump",
            route: "/products/syringe-pump",
            component: <ProductTemplatePage productName="Syringe Pump" />,
          },
          {
            name: "ECG Machine",
            route: "/products/ecg-machine",
            component: <ProductTemplatePage productName="ECG Machine" />,
          },
        ],
      },
      {
        name: "Radiology Equipment",
        dropdown: true,
        collapse: [
          {
            name: "Mobile / Stationary X-rays",
            route: "/products/mobile-stationary-x-rays",
            component: <ProductTemplatePage productName="Mobile / Stationary X-rays" />,
          },
          {
            name: "High Frequency X-rays",
            route: "/products/high-frequency-x-rays",
            component: <ProductTemplatePage productName="High Frequency X-rays" />,
          },
          {
            name: "C-Arm Machine",
            route: "/products/c-arm-machine",
            component: <ProductTemplatePage productName="C-Arm Machine" />,
          },
          {
            name: "CR – Computed Radiography",
            route: "/products/cr-computed-radiography",
            component: <ProductTemplatePage productName="CR – Computed Radiography" />,
          },
          {
            name: "DR – Digital Radiography",
            route: "/products/dr-digital-radiography",
            component: <ProductTemplatePage productName="DR – Digital Radiography" />,
          },
        ],
      },
      {
        name: "Biomedical Accessories",
        dropdown: true,
        collapse: [
          {
            name: "Patient Monitor Accessories",
            route: "/products/patient-monitor-accessories",
            component: <ProductTemplatePage productName="Patient Monitor Accessories" />,
          },
          {
            name: "Surgical Diathermy Accessories",
            route: "/products/surgical-diathermy-accessories",
            component: <ProductTemplatePage productName="Surgical Diathermy Accessories" />,
          },
          {
            name: "Ventilator Circuits",
            route: "/products/ventilator-circuits",
            component: <ProductTemplatePage productName="Ventilator Circuits" />,
          },
          {
            name: "Bains Circuit",
            route: "/products/bains-circuit",
            component: <ProductTemplatePage productName="Bains Circuit" />,
          },
          {
            name: "ECG Cable/Electrodes",
            route: "/products/ecg-cable-electrodes",
            component: <ProductTemplatePage productName="ECG Cable/Electrodes" />,
          },
        ],
      },
      {
        name: "MGPS Accessories",
        dropdown: true,
        collapse: [
          {
            name: "O2 Flow Meter",
            route: "/products/o2-flow-meter",
            component: <ProductTemplatePage productName="O2 Flow Meter" />,
          },
          {
            name: "O2 Regulator",
            route: "/products/o2-regulator",
            component: <ProductTemplatePage productName="O2 Regulator" />,
          },
          {
            name: "O2/N2O Cylinders",
            route: "/products/o2-n2o-cylinders",
            component: <ProductTemplatePage productName="O2/N2O Cylinders" />,
          },
          {
            name: "Suction Jars",
            route: "/products/suction-jars",
            component: <ProductTemplatePage productName="Suction Jars" />,
          },
        ],
      },
      {
        name: "Radiology Accessories",
        dropdown: true,
        collapse: [
          {
            name: "Chest Stand",
            route: "/products/chest-stand",
            component: <ProductTemplatePage productName="Chest Stand" />,
          },
          {
            name: "Lead Apron",
            route: "/products/lead-apron",
            component: <ProductTemplatePage productName="Lead Apron" />,
          },
          {
            name: "Lead Shield",
            route: "/products/lead-shield",
            component: <ProductTemplatePage productName="Lead Shield" />,
          },
          {
            name: "Lead Partition",
            route: "/products/lead-partition",
            component: <ProductTemplatePage productName="Lead Partition" />,
          },
          {
            name: "Thyroid Collar",
            route: "/products/thyroid-collar",
            component: <ProductTemplatePage productName="Thyroid Collar" />,
          },
        ],
      },
      {
        name: "Spares",
        dropdown: true,
        collapse: [
          {
            name: "Flow sensors",
            route: "/products/flow-sensors",
            component: <ProductTemplatePage productName="Flow sensors" />,
          },
          {
            name: "O2 sensors",
            route: "/products/o2-sensors",
            component: <ProductTemplatePage productName="O2 sensors" />,
          },
          {
            name: "Printer rollers",
            route: "/products/printer-rollers",
            component: <ProductTemplatePage productName="Printer rollers" />,
          },
          {
            name: "Printer Circuit boards",
            route: "/products/printer-circuit-boards",
            component: <ProductTemplatePage productName="Printer Circuit boards" />,
          },
          {
            name: "Switches",
            route: "/products/switches",
            component: <ProductTemplatePage productName="Switches" />,
          },
          {
            name: "Transducers",
            route: "/products/transducers",
            component: <ProductTemplatePage productName="Transducers" />,
          },
          {
            name: "Electrodes",
            route: "/products/electrodes",
            component: <ProductTemplatePage productName="Electrodes" />,
          },
        ],
      },
      {
        name: "Medical Battery",
        dropdown: true,
        collapse: [
          {
            name: "Lead-acid batteries",
            route: "/products/lead-acid-batteries",
            component: <ProductTemplatePage productName="Lead-acid batteries" />,
          },
          {
            name: "NICD/NIMH batteries",
            route: "/products/nicd-nimh-batteries",
            component: <ProductTemplatePage productName="NICD/NIMH batteries" />,
          },
          {
            name: "Lithium-ion batteries",
            route: "/products/lithium-ion-batteries",
            component: <ProductTemplatePage productName="Lithium-ion batteries" />,
          },
        ],
      },
      {
        name: "Surgical Instruments",
        dropdown: true,
        collapse: [
          {
            name: "General surgical instruments",
            route: "/products/general-surgical-instruments",
            component: <ProductTemplatePage productName="General surgical instruments" />,
          },
          {
            name: "Orthopedic surgical instruments",
            route: "/products/orthopedic-surgical-instruments",
            component: <ProductTemplatePage productName="Orthopedic surgical instruments" />,
          },
        ],
      },
      {
        name: "Paper roll",
        route: "/products/paper-roll",
        component: <ProductTemplatePage productName="Paper Roll" />,
      },
      {
        name: "Keypad",
        route: "/products/keypad",
        component: <ProductTemplatePage productName="Keypad" />,
      },
      {
        name: "Disposables",
        route: "/products/disposables",
        component: <ProductTemplatePage productName="Disposables" />,
      },
    ],
  },
  // {
  //   name: "Services",
  //   icon: <ViewDayIcon />,
  //   dropdown: true,
  //   collapse: [
  //     {
  //       name: "Hospital Maintenance",
  //       route: "/services/hospital-maintenance",
  //       component: <div>Hospital Maintenance</div>,
  //     },
  //     {
  //       name: "NABH Calibration Services",
  //       route: "/services/nabh-calibration",
  //       component: <div>NABH Calibration Services</div>,
  //     },

  //     {
  //       name: "Equipment for Rent",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "Ventilator",
  //           route: "/services/equipment-for-rent/ventilator",
  //           component: <div>Ventilator</div>,
  //         },
  //         {
  //           name: "Monitor",
  //           route: "/services/equipment-for-rent/monitor",
  //           component: <div>Monitor</div>,
  //         },
  //         {
  //           name: "Syringe Infusion Pump",
  //           route: "/services/equipment-for-rent/syringe-infusion-pump",
  //           component: <div>Syringe Infusion Pump</div>,
  //         },
  //         {
  //           name: "Blanket Warmer",
  //           route: "/services/equipment-for-rent/blanket-warmer",
  //           component: <div>Blanket Warmer</div>,
  //         },
  //         {
  //           name: "ECG Machine",
  //           route: "/services/equipment-for-rent/ecg-machine",
  //           component: <div>ECG Machine</div>,
  //         },
  //         {
  //           name: "Xray Portable",
  //           route: "/services/equipment-for-rent/xray-portable",
  //           component: <div>Xray Portable</div>,
  //         },
  //       ],
  //     },

  //     {
  //       name: "On-site Service Support",
  //       route: "/services/onsite-service-support",
  //       component: <div>On-site Service Support</div>,
  //     },
  //     {
  //       name: "AMC Medical Equipment",
  //       route: "/services/amc-medical-equipment",
  //       component: <div>AMC Medical Equipment</div>,
  //     },
  //     {
  //       name: "Practical Training Programs",
  //       route: "/services/practical-training-programs",
  //       component: <div>Practical Training Programs</div>,
  //     },
  //     {
  //       name: "MGPS Installation Services",
  //       route: "/services/mgps-installation",
  //       component: <div>MGPS Installation Services</div>,
  //     },
  //     {
  //       name: "Refurbished Equipment",
  //       route: "/services/refurbished-equipment",
  //       component: <div>Refurbished Equipment</div>,
  //     },
  //     {
  //       name: "Home Care Equipment",
  //       route: "/services/home-care-equipment",
  //       component: <div>Home Care Equipment</div>,
  //     },
  //     {
  //       name: "Standby Support",
  //       route: "/services/standby-support",
  //       component: <div>Standby Support</div>,
  //     },
  //   ],
  // },
  {
    name: "About us",
    icon: <InfoIcon />,
    dropdown: true,
    collapse: [
      {
        name: "About Us",
        icon: <InfoIcon />,
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
      },
      {
        name: "Contact Us",
        icon: <ContactMailIcon />,
        route: "/pages/landing-pages/contact-us",
        component: <ContactUs />,
      },
    ],
  },
  {
    name: "Services",
    icon: <ViewDayIcon />,
    route: "/pages/landing-pages/services",
    component: <ServicePage />,
  },
];

export default routes;
