import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 120,
    borderBottomLeftRadius: 528,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 90,
  },
  cardMedia: {
    height: 512,
    borderTopLeftRadius: 800,
    borderBottomLeftRadius: 800,

    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  action: {
    textDecoration: "none",
    borderRadius: 0,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Content(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Your reliable tax consultants",
    description:
      "As a full-service accounting firm, we provide accounting and tax, business development and business advisory services for privately owned businesses and individual clients. We will assist you with every aspect of your accounting needs, whether its financial statement preparation, budgeting, or bookkeeping to more specialized areas such as business formation.",
    description2:
      "It is our belief the selection of a certified public accounting firm is one of the most important decisions a business or individual can make. We recognize that each client has unique goals and with this understanding, we are able to tailor our services to meet your specific needs.",
    "primary-action": "Learn More",
    image: "/assets/tax1.jpg",
    ...props.content,
  };
  // "Years of experience and profound know-how in tax and economic issues enable the high quality that characterizes our tax planning. You benefit from a professional partner for your tax issues and have the certainty that you have done everything right in terms of tax law.",
  return (
    <section>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box py={15}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a highway with skylines in the background"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                      component="span"
                    >
                      {content["header-p1"]}
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
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      className={classes.action}
                      href="/about"
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
