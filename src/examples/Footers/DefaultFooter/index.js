/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import image from "../../../assets/images/Prima-320.png";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer" py={2} sx={{ backgroundColor: "transparent" }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={3}>
              {/* Brand and Social Icons */}
              <Grid item xs={12} md={3} sx={{ mb: 3 }}>
                <MKBox>
                  <Link to={brand.route}>
                    <MKBox
                      component="img"
                      src={brand.image}
                      alt={brand.name}
                      maxWidth="5rem"
                      mb={2}
                    />
                  </Link>
                  <MKTypography variant="h6">{brand.name}</MKTypography>
                </MKBox>
                <MKBox display="flex" alignItems="center" mt={2}>
                  {socials.map(({ icon, link }, key) => (
                    <MKTypography
                      key={link}
                      component="a"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      variant="h5"
                      color="dark"
                      opacity={0.8}
                      mr={key === socials.length - 1 ? 0 : 2.5}
                    >
                      {icon}
                    </MKTypography>
                  ))}
                </MKBox>
              </Grid>

              {/* Menu Sections */}
              {menus.map(({ name: title, items }) => (
                <Grid key={title} item xs={6} md={3} sx={{ mb: 3 }}>
                  <MKTypography
                    display="block"
                    variant="button"
                    fontWeight="bold"
                    textTransform="capitalize"
                    mb={1}
                  >
                    {title}
                  </MKTypography>
                  <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                    {items.map(({ name, route, href }) => (
                      <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                        {href ? (
                          <MKTypography
                            component="a"
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {name}
                          </MKTypography>
                        ) : (
                          <MKTypography
                            component={Link}
                            to={route}
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {name}
                          </MKTypography>
                        )}
                      </MKBox>
                    ))}
                  </MKBox>
                </Grid>
              ))}
            </Grid>

            {/* Copyright Section */}
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
              {/* {copyright} */}
            </Grid>
          </Grid>

          {/* Right Side: Image and Embedded Google Map */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3, // Padding to add spacing between text and image
            }}
          >
            <MKBox component="div" width="100%" height="250px" borderRadius="8px" overflow="hidden">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124422.53284693889!2d80.17122658302421!3d12.958784568789378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d92ffd6c9cd%3A0x8655a118199a0c6!2sEMED%20BIOMEDICALSS!5e0!3m2!1sen!2sin!4v1730354436939!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124422.53284693889!2d80.17122658302421!3d12.958784568789378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d92ffd6c9cd%3A0x8655a118199a0c6!2sEMED%20BIOMEDICALSS!5e0!3m2!1sen!2sin!4v1730354436939!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      route: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node,
        link: PropTypes.string,
      })
    ).isRequired,
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            route: PropTypes.string,
            href: PropTypes.string,
          })
        ),
      })
    ).isRequired,
    copyright: PropTypes.node.isRequired,
  }).isRequired,
};

export default DefaultFooter;
