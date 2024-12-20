/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Info() {
  const bgImage = "https://cdn.dotmed.com/images/listingpics2/3/7/3/0/3730503.jpg";

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
            <MKTypography
              variant="body1"
              color="black"
              opacity={0.8}
              mb={2}
              sx={{ fontSize: "17px" }}
            >
              <br />
              This Anaesthesia Machine is offered to the esteemed customers at highly competitive
              prices. These machines are ideally used in medical sectors such as hospitals and
              others, thus, are highly demanded in the market. Our range of machines is manufactured
              by employing the most modern technology and machinery. The Anaesthesia Machine offered
              by us is widely acknowledged by the clients for its efficient functioning, rugged
            </MKTypography>

            {/* Adding headers, subheaders, and bullet points */}
            <MKTypography variant="h5" color="black" fontWeight="bold" mb={1}>
              Benefits of Using the Anaesthesia Machine
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              opacity={0.8}
              mb={2}
              sx={{ fontSize: "17px" }}
            >
              The Anaesthesia Machine is a valuable asset for any medical facility, providing
              numerous benefits such as:
            </MKTypography>
            <ul style={{ fontSize: "15px" }}>
              <li>Ensures patient safety during anaesthesia administration</li>
              <li>Reduces the risk of human error in anaesthesia dosage</li>
              <li>Improves operational efficiency in medical procedures</li>
              <li>Supports a wide range of anaesthesia techniques and methods</li>
            </ul>
            <br />
            <MKTypography variant="h5" color="black" fontWeight="bold" mb={1}>
              Benefits of Using the Anaesthesia Machine
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              opacity={0.8}
              mb={2}
              sx={{ fontSize: "17px" }}
            >
              The Anaesthesia Machine is a valuable asset for any medical facility, providing
              numerous benefits such as:
            </MKTypography>
            <ul style={{ fontSize: "15px" }}>
              <li>Ensures patient safety during anaesthesia administration</li>
              <li>Reduces the risk of human error in anaesthesia dosage</li>
              <li>Improves operational efficiency in medical procedures</li>
              <li>Supports a wide range of anaesthesia techniques and methods</li>
            </ul>
          </Grid>

          {/* Image Section on the Top Right */}
          {/* <Grid item xs={12} md={5}>
            <div style={{ position: "relative", top: 0, right: 0 }}>
              <img
                src={bgImage}
                alt="Anaesthesia Machine"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Info;
