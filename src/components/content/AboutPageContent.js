import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
}));

const AboutPageContent = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    firstTextBlock: {
      title: "Who we are",
      text: "For years, Lonnarigo CPA, P.C. has been providing quality, personalized financial guidance to local individuals and businesses. Our expertise ranges from basic tax management and accounting services to more in-depth services such as financial statements, and financial planning. By combining our expertise, experience and the team mentality of our staff, we assure that every client receives the close analysis and attention they deserve.",
    },
    secondTextBlock: {
      title: "Our mission",
      text: "Our mission is to help clients maintain financial viability in the present, while taking a proactive approach to achieve future goals. This requires open communication to reach an understanding of our clients' needs through research and sound analysis. Lonnarigo CPA, P.C. is dedicated to meeting these goals with high standards of excellence and professionalism. We have been a staple of the area's business community for years, and pride ourselves on the level of esteem we have earned.",
    },
    thirdTextBlock: {
      title: "Why Us",
      text: "Our job starts by getting to know about you, your business and your individual needs. Working with our clients, we develop an understanding their situation, enabling us to support and guide them in achieving their financial goals. We approach our accounting service engagements with a mindset of growth and a sense of ownership. Working with companies ranging from manufacturing start-ups to third-generation family run companies we are able to offer innovative solutions and practices well suited to the needs of your business.",
    },
  };

  return (
    <Container maxWidth="lg">
      <Box mt={10} mb={0}>
        <Grid container direction="column" justify="space-between">
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            data-aos="fade-up"
          >
            <Hidden mdUp>
              <Grid item sm={12} md={5}>
                <Box my={2}>
                  <Image src={"/assets/fourth.svg"} width={400} height={400} />
                </Box>
              </Grid>
            </Hidden>

            <Grid item sm={12} md={6}>
              <Box py={matchesSM ? 2 : 7} pb={6}>
                <Typography className={classes.title} variant="h4">
                  {content.firstTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.firstTextBlock.text}
                </Typography>
              </Box>
            </Grid>

            <Hidden smDown>
              <Grid item sm={12} md={5}>
                <Box>
                  <Image src={"/assets/fourth.svg"} width={400} height={400} />
                </Box>
              </Grid>
            </Hidden>
          </Grid>

          <Grid
            item
            container
            direction="row"
            justify="space-between"
            data-aos="fade-up"
          >
            <Grid item sm>
              <Box pr={3} py={matchesXS ? 2 : 5}>
                <Typography variant="h4" className={classes.title}>
                  {content.secondTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.secondTextBlock.text}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm>
              <Box py={matchesXS ? 2 : 5} pr={3}>
                <Typography className={classes.title} variant="h4">
                  {content.thirdTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.thirdTextBlock.text}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPageContent;
