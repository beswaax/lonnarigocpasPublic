import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import { Button, useMediaQuery } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },

  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  button: {
    border: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    borderRadius: 0,

    "&:hover": {
      textDecoration: "none",
    },
  },
  gridContainer: {
    border: "0.6px solid lightgray",
    borderRadius: 7,
    padding: 20,
    textDecoration: "none",
    backgroundColor: theme.palette.grey[50],
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 18,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
  position: {
    fontWeight: 700,
  },
  subtitle: {},
  link: {
    textDecoration: "none",
    color: [theme.palette.text.secondary],
    "&:hover": {
      textDecoration: "none",
      color: [theme.palette.primary.main],
    },
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    header: "Let's find an open position.",
    description:
      "We're committed to promoting diversity and employment equity.",
    button: "ABOUT THE COMPANY",
  };

  const jobs = [
    {
      url: 3,
      jobPosition: "Junior Accountant",
      jobLocation: "Toronto, ON",
      jobType: "Full time",
    },
    {
      url: 4,
      jobPosition: "Senior Accountant",
      jobLocation: "Toronto, ON",
      jobType: "Full time",
    },
    {
      url: 1,
      jobPosition: "Receptionist",
      jobLocation: "Toronto, ON",
      jobType: "Full time",
    },
    {
      url: 2,
      jobPosition: "Intern Accountant",
      jobLocation: "Toronto, ON",
      jobType: "Full time",
    },
  ];
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="md" data-aos="fade-up">
        <Box pt={13} pb={matchesXS ? 10 : 12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item>
              <Box pt={matchesXS ? 0 : 8}>
                <Typography
                  align="center"
                  variant="h4"
                  component="h3"
                  gutterBottom={true}
                >
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="span"
                  >
                    {content.header}
                  </Typography>
                </Typography>

                <Typography
                  align="center"
                  variant="h6"
                  color="textSecondary"
                  paragraph={true}
                >
                  {content.description}{" "}
                </Typography>
              </Box>
              <Box align="center" pt={0}>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  className={classes.button}
                  disableRipple
                  disableTouchRipple
                  color="primary"
                >
                  {content.button}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="lg" data-aos="fade-up">
        <Box pb={10}>
          <Grid container direction="column">
            {jobs.map((job) => {
              return (
                <Box pb={2} key={job.url}>
                  <Grid
                    component={Link}
                    href={`/career/${job.url}`}
                    item
                    className={classes.gridContainer}
                    container
                    direction="row"
                    justify="space-between"
                  >
                    <Grid item>
                      <Box>
                        <Typography
                          className={classes.position}
                          variant="h6"
                          color="textPrimary"
                        >
                          {job.jobPosition}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          className={classes.subtitle}
                        >
                          {job.jobLocation} / {job.jobType}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box pt={2}>
                        <ArrowForwardIosIcon />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
