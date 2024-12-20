// src/theme.js

import { createTheme } from "@mui/material/styles";

// Custom theme
const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200, // Custom tablet width
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#007bff", // Customize your primary color
    },
    secondary: {
      main: "#6c757d", // Customize your secondary color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h5: {
      fontWeight: 600,
    },
  },
});

export default customTheme;
