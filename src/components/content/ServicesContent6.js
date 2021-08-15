import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useMediaQuery, useTheme } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage:
      "linear-gradient(90deg,rgba(21,26,48,.79) 8%,rgba(21,26,48,.79) 100%,rgba(21,26,48,.07) 95%,rgba(21,26,48,0)), url('https://res.cloudinary.com/dpupj9evt/image/upload/v1625604217/2_hb4xlg.jpg')",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  button: {
    border: `2px solid${theme.palette.common.white}`,
    color: theme.palette.common.white,
    borderRadius: 0,

    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Testimonials({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={15}>
          <Grid direction={matchesSM ? "column" : "row"} container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box mt={5} align={matchesSM ? "center" : "inherit"}>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  <Typography
                    color="primary"
                    variant="h3"
                    className={classes.title}
                    component="span"
                  >
                    {content["header-p1"]}
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                <Box pt={matchesSM ? 0 : 12} px={1} pb={matchesSM ? 3 : 0}>
                  <Button
                    component={Link}
                    disableRipple
                    disableTouchRipple
                    variant="contained"
                    href="/contact"
                    color="secondary"
                    className={classes.button}
                  >
                    {content.button1}{" "}
                    <ChevronRightIcon style={{ paddingLeft: 5 }} />
                  </Button>
                </Box>

                {/* <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
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
                </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
