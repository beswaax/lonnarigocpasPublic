import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles((theme) => ({
  sectionbg: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(90deg,rgba(21,26,48,.79) 8%,rgba(21,26,48,.79) 100%,rgba(21,26,48,.07) 95%,rgba(21,26,48,0)), url('https://res.cloudinary.com/dpupj9evt/image/upload/v1625604217/2_hb4xlg.jpg')",
  },
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  section: {
    paddingTop: "5%",
    paddingBottom: "5%",
    transformStyle: "preserve-3d",
    backfaceisibility: "hidden",

    [theme.breakpoints.down("md")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "20%",
      paddingBottom: "20%",
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    maxWidth: "100%",
  },
  description: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  span: {
    color: theme.palette.primary.light,
    fontWeight: 500,
  },
}));

const PageHeader = ({ title, description, background }) => {
  const classes = useStyles();

  const content = {
    "header-p1": title,
    description: "Home",
  };

  return (
    <section className={classes.sectionbg}>
      <Container maxWidth="lg" className={classes.section}>
        <Box pt={6} pb={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box display="flex" height="100%" data-aos="fade-up">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      <Typography
                        className={classes.title}
                        variant="h3"
                        component="span"
                      >
                        {content["header-p1"]}
                      </Typography>
                    </Typography>
                    <Typography className={classes.description} variant="h6">
                      <Link href="/" style={{ color: "white" }}>
                        {content["description"]}
                      </Link>{" "}
                      /{" "}
                      <span className={classes.span}>
                        {content["header-p1"]}
                      </span>
                    </Typography>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default PageHeader;
