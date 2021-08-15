import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import Button from "@material-ui/core/Button";
import { useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },

  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  button: {
    borderRadius: 0,
    border: `1px solid${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    "&:hover": {
      textDecoration: "none",
    },
  },
  button2: {
    borderRadius: 0,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Testimonials(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Innovative Accounting in Toronto",
    description:
      "We pride ourselves on being client-focused, committed, innovative and reliable.",
    button1: "Book Consultation",
    button2: "Learn More",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Grid direction={matchesSM ? "column" : "row"} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box mt={5} align={matchesSM ? "center" : "inherit"}>
                <Typography variant="h4" component="h3" gutterBottom={true}>
                  <Typography
                    color="primary"
                    variant="h4"
                    className={classes.title}
                    component="span"
                  >
                    {content["header-p1"]}
                  </Typography>
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  paragraph={true}
                  className={classes.decription}
                >
                  {content["description"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                <Box pt={matchesSM ? 0 : 10} px={1} pb={matchesSM ? 3 : 0}>
                  <Button
                    disableRipple
                    disableTouchRipple
                    style={{ borderRadius: 0 }}
                    variant="contained"
                    href="https://calendly.com/accountingservices-philly/60min"
                    target="_blank"
                    color="primary"
                  >
                    {content.button1}
                  </Button>
                </Box>

                <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
                  <Button
                    disableRipple
                    disableTouchRipple
                    href="/about"
                    component={Link}
                    className={classes.button2}
                    variant="outlined"
                    color="textSecondary"
                  >
                    {content.button2}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
