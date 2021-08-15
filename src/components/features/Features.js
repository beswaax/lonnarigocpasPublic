import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { Button, Card, CardContent, IconButton, Fade } from "@material-ui/core";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  root: {
    width: "100%",
    margin: "auto",
    backgroundImage:
      "linear-gradient(270deg, rgba(21, 26, 48, 0.79) 55%, rgba(45, 55, 72, 1) 96%), url('https://res.cloudinary.com/dpupj9evt/image/upload/v1625604217/2_hb4xlg.jpg')",
    // backgroundImage:
    //   "linear-gradient(to right, rgba(21, 26, 48, 0.79) 100%, rgba(21, 26, 48, 0.79) 100%, rgba(21, 26, 48, 0.07) 100%, rgba(21, 26, 48, 0) 100%, `url(${'/assets/dawn5.jpg'})`)",
    borderRadius: 20, // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: "77rem",
    marginLeft: "auto",
    overflow: "initial",
    display: "flex",
    // flexDirection: "column",
    alignItems: "left",
    paddingBottom: 50,
    paddingRight: 40,
    paddingTop: 50,
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
      paddingRight: 30,
      paddingTop: 30,
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: 10, // 16px
      paddingBottom: 0,
      background: [theme.palette.common.white],
      paddingRight: 0,
      paddingTop: 0,
      padding: 0,
      width: "100%",
    },
  },
  media: {
    padding: 40,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
    // height: 0,
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    position: "relative",
    marginLeft: 0,
    [theme.breakpoints.down("md")]: {
      padding: 40,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      width: "100%",
      //   marginTop: 0,
      //   transform: "translateX(-8px)",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30,
      paddingBottom: 30,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 0,
      padding: 0,
    },
    "&:after": {
      //   content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: 16,
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
}));

export default function Features() {
  const classes = useStyles();

  const features = [
    {
      badge: "Helping Businesses Succeed",
      title: "Corporate Taxation",
      url: "services/5",
      description:
        "From time to time, it is useful to take a fresh look at a corporate structure to determine whether every available tax-planning opportunity has been employed. This exercise is worthwhile every few years because circumstances and laws change, yielding new opportunities.",
      img: "hello",
      id: 0,
    },
    {
      badge: "All things E-Commerce Explained",
      title: "E-Commerce Taxation",
      url: "services/3",
      description:
        "We have developed an understanding of e-commerce technology and have spoken and written extensively on the tax issues involved in e-commerce. We can advise existing businesses as well as new ventures on the feasibility of setting up international structures. ",
      img: "hello",
      id: 1,
    },
    {
      badge: "Helping individuals with their taxes",
      title: "Personal Taxation",
      url: "services/4",
      description:
        "We frequently develop tax-planning strategies for high net worth families. We attempt to minimize their current taxes and develop a long-term strategic tax plan that will minimize their taxes on and after retirement.",
      img: "hello",
      id: 2,
    },
    {
      badge: "Accounting Services",
      title: "Accounting Compliance & Year-End Services",
      url: "services/1",
      description:
        "We take time to nurture your business because if you grow, we grow! We look at areas such as your profitability and accounting function, accounting compliance, and the directors’ own tax positions and strategies for the future",
      img: "hello",
      id: 3,
    },
    {
      badge: "Bookkeeping for Individuals & Businesses",
      title: "Bookkeeping Services On-Site Or Off-Site",
      url: "services/2",
      description:
        "Use our professional and confidential service to ensure you have accurate, up-to-date information at your fingertips. Real-time data will allow you to make better decisions as you grow your business.",
      img: "hello",
      id: 4,
    },
    {
      badge: "Solutions for Real Estate Professionals",
      title: "Real Estate Taxation",
      url: "services/6",
      description:
        "A successful real estate company needs more than just experienced agents. Like any business, the hub of the business requires excellent management and brokerage budgeting. Any licensed broker must able to identify market trends and ensure that their brokerage is running efficiently.",
      img: "hello",
      id: 5,
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(features[0]);
  const [zoomTrue, setZoomTrue] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const nextFeature = () => {
    if (currentFeature.id == features.length - 1) {
      setButtonDisabled(true);
      setZoomTrue(false);
      setCurrentFeature(features[0]);
      setTimeout(() => {
        setZoomTrue(true);
        setButtonDisabled(false);
      }, 400);
    } else {
      setButtonDisabled(true);
      setZoomTrue(false);
      setCurrentFeature(features[currentFeature.id + 1]);
      setTimeout(() => {
        setZoomTrue(true);
        setButtonDisabled(false);
      }, 400);
    }
  };

  const previousFeature = () => {
    if (currentFeature.id == 0) {
      setButtonDisabled(true);
      setZoomTrue(false);
      setCurrentFeature(features[features.length - 1]);
      setTimeout(() => {
        setZoomTrue(true);
        setButtonDisabled(false);
      }, 400);
    } else {
      setButtonDisabled(true);
      setZoomTrue(false);
      setCurrentFeature(features[currentFeature.id - 1]);
      setTimeout(() => {
        setZoomTrue(true);
        setButtonDisabled(false);
      }, 400);
    }
  };

  return (
    <section>
      <Container maxWidth="xl">
        <Box my={15}>
          <Card
            className={classes.root}
            style={
              {
                // backgroundImage: `url(${"/assets/dawn5.jpg"})`,
              }
            }
          >
            <CardContent>
              <Container className={classes.media}>
                <Box py={5}>
                  <Fade
                    in={zoomTrue}
                    timeout={{
                      appear: 500,
                      enter: 400,
                      exit: 400,
                    }}
                  >
                    <Container maxWidth="sm">
                      <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                        spacing={4}
                        spacing={2}
                      >
                        <Grid item>
                          <Box pb={0}>
                            <Typography
                              color="primary"
                              variant="body1"
                              component="span"
                            >
                              {currentFeature.badge}
                            </Typography>
                          </Box>
                          <Box pb={2}>
                            <Typography
                              variant="h4"
                              className={classes.title}
                              component="h3"
                            >
                              {currentFeature.title}
                            </Typography>
                          </Box>
                          <Box mb={2} className={classes.boxContainer}>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                              component="h3"
                            >
                              {currentFeature.description}
                            </Typography>
                          </Box>
                          <Button
                            disableRipple
                            disableTouchRipple
                            variant="outlined"
                            color="primary"
                            style={{ borderRadius: 0 }}
                            href={currentFeature.url}
                            align="left"
                          >
                            Learn More
                          </Button>{" "}
                        </Grid>
                        <Grid item>
                          <IconButton
                            disabled={buttonDisabled}
                            color="secondary"
                            disableRipple
                            disableTouchRipple
                            className={classes.button}
                            onClick={previousFeature}
                          >
                            <NavigateBeforeIcon />
                          </IconButton>
                          <IconButton
                            disabled={buttonDisabled}
                            color="secondary"
                            disableRipple
                            disableTouchRipple
                            className={classes.button}
                            onClick={nextFeature}
                          >
                            <NavigateNextIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Container>
                  </Fade>
                </Box>
              </Container>
            </CardContent>{" "}
          </Card>
        </Box>
      </Container>
    </section>
  );
}
