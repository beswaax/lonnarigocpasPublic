import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Hidden, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.secondary.main,
  },
  header: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  subtitle: {
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  adv: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  ulContainer: {
    listStyle: "square",
    color: theme.palette.primary.dark,
  },
}));

export default function Content({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Box py={matchesXS ? 10 : matchesSM ? 15 : 20}>
        <Container style={{ maxWidth: "72rem" }}>
          <Box pb={5}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4" className={classes.header}>
                  {content.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.subtitle}>
                  {content.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box pl={2}>
            <Grid container spacing={matchesSM ? 0 : 3}>
              <Grid item xs={12} sm={6}>
                <Box display="flex" height="100%" pt={1}>
                  <ul className={classes.ulContainer}>
                    {content.advantages.map((adv) => (
                      <li>
                        <Typography className={classes.adv} variant="body1">
                          {adv}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box pt={matchesXS ? 3 : 0}>
                  <ul className={classes.ulContainer}>
                    {content.advantages2.map((adv) => (
                      <li>
                        <Typography className={classes.adv} variant="body1">
                          {adv}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
