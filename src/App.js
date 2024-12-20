import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Layouts and components
import Presentation from "layouts/pages/presentation";
import ProductTemplate from "layouts/pages/landing-pages/product-template";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Function to recursively render routes from your routes config
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse); // Recursive for nested routes
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)} {/* Routes from routes config */}
        {/* Route for Presentation page */}
        <Route path="/presentation" element={<Presentation />} />
        {/* Catch-all route: redirects any unknown routes to /presentation */}
        <Route path="*" element={<Navigate to="/presentation" />} />
        {/* Route for ProductTemplate page with dynamic product name */}
        <Route path="/products/:productName" element={<ProductTemplate />} />
      </Routes>
    </ThemeProvider>
  );
}
