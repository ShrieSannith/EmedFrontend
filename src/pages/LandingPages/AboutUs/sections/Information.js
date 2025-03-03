/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

const medical1 = "/Anesthesia_Prima_320.webp";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={2} my={0}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            {/* <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="local_hospital
"
                title={
                  <>
                    What Does
                    <br />
                    Emed Stand for ?
                  </>
                }
                description="Know more about us!"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="Learn More about our Services and Products."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "About Us",
                }}
              />
            </RotatingCard> */}
            <img src={medical1} style={{ width: "300px" }}></img>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="E"
                  title="Essence"
                  description="Dedicated provider of sales, services and Modular Operation Theatre for hospitals across India, since 2003."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="M"
                  title="MOTO"
                  description="Minimizing Breakdowns, Maximizing Trust, Your Satisfaction is Our Priority!"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="E"
                  title="Excellence"
                  description="At EMED, we uphold the highest standards of excellence in every aspect of healthcare service and support."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="D"
                  title="Development"
                  description="Proudly delivering 10 successful OT theatres and 21 years of excellence in medical equipment sales and service."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
