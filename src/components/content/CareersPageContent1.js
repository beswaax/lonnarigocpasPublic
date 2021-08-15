import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Would you like to work with us?",
    description:
      "Lonnarigo CPA, P.C. is growing its team. We are looking for individuals who are excited to learn and can work in a fast paced environment, whose work ethic demonstrates these traits and forms collaborative relationships within our team and with clients.",
    description2:
      "As part of our team, you will have the opportunity to work closely with senior accountants and experience accounting from many aspects.",
    image: "/assets/want-to-work.svg",
  };

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={13} pb={matchesXS ? 10 : 12}>
          <Grid container spacing={6} data-aos="fade-up">
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box pt={matchesXS ? 0 : 8}>
                <Typography variant="h4" component="h3" gutterBottom={true}>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="span"
                  >
                    {content["header-p1"]}{" "}
                  </Typography>
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph={true}
                >
                  {content["description"]}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph={true}
                >
                  {content["description2"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box>
                <Image src={content.image} width={500} height={250} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
