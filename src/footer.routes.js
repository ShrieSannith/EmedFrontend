/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logo from "assets/images/logo_transparent.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "EMED BIOMEDICALS",
    image: "/logo_transparent.png",
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "Operation Theatre services", href: "https://www.creative-tim.com/templates/free" },
        { name: "Purchase Equipment", href: "https://www.creative-tim.com/templates/premium" },
        { name: "Other Services", href: "https://www.creative-tim.com/blog" },
      ],
    },
    // {
    //   name: "resources",
    //   items: [
    //     { name: "illustrations", href: "https://iradesign.io/" },
    //     { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
    //     { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
    //   ],
    // },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "Job Opportunities", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "Query Form", href: "https://services.creative-tim.com/" },
        { name: "AMC Issues", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  // copyright: (
  //   <MKTypography variant="button" fontWeight="regular">
  //     All rights reserved. Copyright &copy; {date} Material Kit by{" "}
  //     <MKTypography
  //       component="a"
  //       href="https://www.creative-tim.com"
  //       target="_blank"
  //       rel="noreferrer"
  //       variant="button"
  //       fontWeight="regular"
  //     >
  //       Creative Tim
  //     </MKTypography>
  //     .
  //   </MKTypography>
  // ),
};
