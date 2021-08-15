import React from "react";
import PageHeader from "../../src/components/headers/PageHeader";

import ContactDetails from "../../src/components/contact/Contact2";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxContainerGrey: {
    backgroundColor: theme.palette.grey[300],
    padding: 20,
  },
  title: {
    color: theme.palette.darkBlue.main,
    fontWeight: 600,
  },
  boxContainer: {
    backgroundColor: theme.palette.grey[100],
    padding: 20,
  },
  span: {
    fontWeight: 400,
    ...theme.typography.subtitle1,
    color: theme.palette.text.secondary,
  },
  title2: {
    fontWeight: 600,
    color: theme.palette.darkBlue.main,

    marginBottom: "0.5rem",
  },
  img: {
    height: 245,
    border: `15px solid ${theme.palette.primary.main}`,
  },
  gridContainer: {
    paddingBottom: 50,
  },
  aboutTitle: {
    fontWeight: 600,
    color: theme.palette.darkBlue.main,
  },
}));

const teams = [
  {
    img: "/assets/expert/1.jpg",
    name: "Elliot Anton",
    id: 1,
    position: "CPA, CA",
    experience: "30 Years",
    phone: "647-287-3346 ext:21",
    email: "elliot@lonnarigocpa.com",
    text: [
      {
        id: 0,
        title: "Personal Experience",
        desc: [
          "Partner, Lonnarigo & Company CPAs, 1994.",
          "Engaged in income tax consulting since 1988.",
          "Senior rulings officer in the Rulings Directorate at the Canada Customs and Revenue Agency head office in Ottawa for two years.",
          "Frequent presenter at Canadian Tax Foundation ON conferences.",
          "Lecturer for the Institute of Chartered Accountants of ON, Certified General Accountants of ON, Continuing Legal Education and the Canadian Tax Foundation.",
          "Author of several tax articles for the Institute of Chartered Accountants of Ontario.",
          "Served on the Taxation Committee of the Institute of Chartered Accountants for five years.",
        ],
      },
      {
        id: 1,
        title: "Education",
        desc: [
          "Institute of Chartered Accountants of Ontario",
          "Canadian Tax Foundation.",
          "Member of the Joint Taxation Committee of the Institute of Chartered Accountants of Ontario and the ON Bar Association for two years.",
        ],
      },
      {
        title: "Academic Background ",
        desc: [
          "Chartered Accountant (Ontario), 1988",
          "Bachelor of Commerce, University of Toronto, 1985.",
        ],
      },
      {
        title: "Languages",
        desc: ["French, English, German"],
      },
    ],
  },
  {
    img: "/assets/expert/2.jpg",
    name: "Charles Flannery",
    id: 2,
    position: "CPA, Tax Advisor",
    experience: "20 Years",
    phone: "647-287-3346 ext:22",
    email: "charles@lonnarigocpa.com",
    text: [
      {
        id: 0,
        title: "Personal Experience",
        desc: [
          "Partner, Lonnarigo & Company CPAs, 1994.",
          "Engaged in income tax consulting since 1981",
          "Presented at 1989 Canadian Tax Foundation ON conference.",
          "Served on the Taxation Committee of the Institute of Chartered Accountants for two years.",
        ],
      },
      {
        id: 1,
        title: "Education",
        desc: [
          "Institute of Chartered Accountants of Ontario",
          "Canadian Tax Foundation.",
        ],
      },
      {
        title: "Academic Background ",
        desc: [
          "Chartered Accountant (Ontario), 1980",
          "Bachelor of Commerce, University of Ontario, 1978.",
        ],
      },
      {
        title: "Languages",
        desc: ["French, English"],
      },
    ],
  },
  {
    img: "/assets/expert/18.jpg",
    name: "Bryan Evan",
    id: 3,
    position: "CPA, Tax Advisor",
    experience: "15 Years",
    phone: "647-287-3346 ext:22",
    email: "bryan@lonnarigocpa.com",
    text: [
      {
        id: 0,
        title: "Personal Experience",
        desc: [
          "Partner, Lonnarigo & Company CPAs, 2004.",
          "Engaged in income tax consulting since 1994",
          "Served on the Taxation Committee of the Institute of Chartered Accountants for one year.",
        ],
      },
      {
        id: 1,
        title: "Education",
        desc: [
          "Institute of Chartered Accountants of Ontario",
          "Canadian Tax Foundation.",
        ],
      },
      {
        title: "Academic Background ",
        desc: [
          "Chartered Accountant (Ontario), 1990",
          "Bachelor of Commerce, University of Ontario, 1988.",
        ],
      },
      {
        title: "Languages",
        desc: ["French, English, Spanish"],
      },
    ],
  },
];

function getPostDataById(id) {
  for (let i = 0; i < teams.length; i++) {
    if (teams[i].id === parseInt(id)) {
      return teams[i];
    }
  }
}
const SingleTeamPage = ({ id }) => {
  const classes = useStyles();
  const theme = useTheme();

  const content = getPostDataById(id);

  if (content == undefined) {
    return (
      <Box py={50}>
        <Typography variant="h3" color="textSecondary" align="center">
          404 error
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <Head>
        <title key="title">
          Accountants | Lonnarigo & Company CPAs Toronto
        </title>{" "}
      </Head>
      <PageHeader
        title={content.name}
        background={"/assets/8.jpg"}
        description={
          "Future-oriented companies use our services to ensure reliability and quality."
        }
      />

      <Box py={10}>
        <Container maxWidth="md">
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item md={6} xs={12} align="center">
              <Box className={classes.boxContainer}>
                <img src={content.img} className={classes.img} />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className={classes.boxContainerGrey}>
                <Typography
                  variant="h4"
                  className={classes.aboutTitle}
                  align="center"
                >
                  About
                </Typography>
              </Box>
              <Box className={classes.boxContainer}>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.title2}
                >
                  Name:{" "}
                  <span className={classes.span} variant="body1">
                    {content.name}
                  </span>
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.title2}
                >
                  Practice Area:{" "}
                  <span className={classes.span}>{content.position}</span>
                </Typography>{" "}
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.title2}
                >
                  Experience:{" "}
                  <span className={classes.span}>{content.experience}</span>
                </Typography>{" "}
                <Typography
                  className={classes.title2}
                  variant="h6"
                  color="textPrimary"
                >
                  Phone: <span className={classes.span}>{content.phone}</span>
                </Typography>{" "}
                <Typography
                  className={classes.title2}
                  variant="h6"
                  color="textPrimary"
                >
                  Email: <span className={classes.span}>{content.email}</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container direction="column">
            {content.text.map((currentText, i) => (
              <Grid item key={i}>
                <Box pb={1}>
                  <Typography variant="h5" className={classes.title}>
                    {" "}
                    {currentText.title}
                  </Typography>
                </Box>
                <Box pb={3} pl={4}>
                  <ul
                    style={{
                      listStyle: "initial",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {currentText.desc.map((desc, i) => (
                      <li key={i}>
                        <Typography variant="subtitle1" color="textSecondary">
                          {desc}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <ContactDetails />
    </div>
  );
};

export default SingleTeamPage;

SingleTeamPage.getInitialProps = async ({ query }) => {
  const id = query.id;
  return { id };
};
