import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(90deg,rgba(21,26,48,.79) 8%,rgba(21,26,48,.79) 100%,rgba(21,26,48,.07) 95%,rgba(21,26,48,0)), url('https://res.cloudinary.com/dpupj9evt/image/upload/v1626714715/15_yq91fh.jpg')",
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    fontWeight: 600,
    borderRadius: 0,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  secondaryAction: {
    borderRadius: 0,
    fontWeight: 500,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  span: {
    color: theme.palette.primary.dark,
  },
  img: {
    maxWidth: "100%",
    borderTopLeftRadius: 125,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    [theme.breakpoints.down("xs")]: {
      borderTopLeftRadius: 80,
      borderBottomRightRadius: 80,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  },
  title: {
    fontWeight: 900,
    color: theme.palette.common.white,
  },
  description: {
    fontWeight: 500,
    color: theme.palette.grey[300],
  },
  link: {
    border: "1px solid lightgray",
    padding: 8,
    borderRadius: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Accountants & Business Advisors",

    description:
      "At Lonnarigo CPA, we are dedicated to helping both businesses and individuals succeed financially through quality business management, tax and accounting services.",
    "primary-action": "Book Consultation",
    "secondary-action": "Learn More",
    image: "/assets/15.jpg",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box
          pt={matchesXS ? 12 : matchesSM ? 17 : matchesMD ? 23 : 31.6}
          pb={matchesXS ? 12 : matchesSM ? 17 : matchesMD ? 23 : 31.6}
        >
          <Grid
            direction={matchesSM ? "column" : "inherit"}
            justify={matchesSM ? "center" : "inherit"}
            alignItems={matchesSM ? "center" : "inherit"}
            container
            spacing={4}
          >
            <Grid item xs={12} md={12} data-aos="fade-up">
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography variant="h2" component="h2" gutterBottom={true}>
                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p1"]}{" "}
                        <span className={classes.span}>
                          {content["header-p2"]}
                        </span>
                      </Typography>

                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p3"]}{" "}
                      </Typography>
                    </Typography>

                    <Typography
                      className={classes.description}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {content["description"]}
                    </Typography>
                    <Box mt={3}>
                      <Button
                        disableRipple
                        disableTouchRipple
                        variant="outlined"
                        href="https://calendly.com/accountingservices-philly/60min"
                        target="_blank"
                        color="primary"
                        className={classes.primaryAction}
                      >
                        {content["primary-action"]}
                      </Button>
                      <Button
                        disableRipple
                        disableTouchRipple
                        variant="contained"
                        href="/about"
                        color="primary"
                        className={classes.secondaryAction}
                      >
                        {content["secondary-action"]}
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              {/* <Image
                src={content["image"]}
                alt="picture of buildings in a big city"
                className={classes.img}
                width={matchesSM ? 500 : 800}
                height={matchesSM ? 400 : 600}
              /> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
