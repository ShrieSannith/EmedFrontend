/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function About() {
  const bgImage =
    "https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      //   sx={{
      //     backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
      //       `${linearGradient(
      //         rgba(gradients.dark.main, 0.8),
      //         rgba(gradients.dark.state, 0.8)
      //       )}, url(${bgImage})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //   }}
    >
      <Container>
        <Grid container item xs={12} lg={11} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="black" fontWeight="bold"></MKTypography>
          <MKTypography variant="h1" color="black" mb={1} sx={{ fontSize: "30px" }}>
            Who are we?
          </MKTypography>
          <br></br>
          <MKTypography
            variant="body1"
            color="black"
            opacity={0.8}
            mb={2}
            sx={{ fontSize: "17px" }}
          >
            <br />
            Established in the year 2003, we, “E-Med Bio Medical Services & Systems”, are one of
            most trusted dealers of a wide range of Medical Equipment. These products are widely
            appreciated in market for trouble free operation and low maintenance cost. Our range is
            procured from reputed organizations such as Siemens, Hewlett Packard and Servo, which
            manufacture these equipment by using latest technology. Further, the products are
            quality tested at our sophisticated quality control wing, before being offered to the
            customers. Apart from offering quality range of products, we also offer Breakdown
            Maintenance and Annual Maintenance Service of these equipment. Our services are known
            for being prompt, reliable and cost effective. <br /> <br />
            We are backed by a team of expert professionals, which enables us to render these
            services to the clients efficiently. Moreover, we are equipped with latest facilities
            that help us in carrying out repair and maintenance works. We have been successful in
            fulfilling the diverse requirements of clients based in India and the Indian
            Subcontinent by our quality range. <br /> <br />
            Our prestigious client list includes BRS Hospital, Nungambakkam, Chennai, BharathiRaja
            Hospitals, T. Nagar, Chennai, Pallava Hospital, Ashok Nagar, Chennai, Pallavaram
            Children Hospital, Pallavaram, Chennai, and others. <br /> <br />
            Our organization has progressed to a great extent under the able leadership of the
            mentor, ‘Mr. Nithya Kumar’, who holds vast experience in this domain. He has motivated
            us to take tough challenges and acquire outstanding results. Owing to his support and
            motivation, we have established our distinct identity in the market.
          </MKTypography>
          <MKTypography
            component="a"
            href="/pages/landing-pages/about-us"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Leatn More <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default About;
