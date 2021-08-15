import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import Link from "../../Link";
import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "90%",
    height: "356px",
    borderRadius: 1,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    transition: "transform 0.3s ease-in",
    "&:hover": {
      transform: "scale3d(1.02, 1.02, 1.02)",
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  c: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
  },
}));

export default function Team(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Meet the Partners",
    persons: [
      {
        url: 1,
        image: "/assets/expert/1.jpg",
        name: "Elliot Anton",
        job: "CPA, CA",
        email: "elliot@lonnarigocpa.com",
        tel: "647-287-3346 ext:21",
      },
      {
        url: 2,
        image: "/assets/expert/2.jpg",
        name: "Charles Flannery",
        job: "CPA, Tax Advisor",
        email: "charles@lonnarigocpa.com",
        tel: "647-287-3346 ext:22",
      },
      {
        url: 3,
        image: "/assets/expert/18.jpg",
        name: "Bryan Evan",
        job: "CPA, Tax Advisor",
        email: "bryan@lonnarigocpa.com",
        tel: "647-287-3346 ext:22",
      },
    ],
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={13} pb={13}>
          <Box mb={9} textAlign="center">
            <Container maxWidth="sm">
              <Typography
                className={classes.title}
                variant="h4"
                component="h2"
                gutterBottom={true}
              >
                {content["header-p1"]}{" "}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={9} alignItems="center" justify="center">
            {content.persons.map((person) => (
              <Grid item xs={12} md={4} sm={6} key={person.url}>
                <Avatar
                  alt="image of accountant part of the team"
                  variant="rounded"
                  src={person.image}
                  component={Link}
                  href={`accountants/${person.url}`}
                  className={classes.avatar}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom={true}
                    className={classes.title}
                  >
                    {person.name}
                  </Typography>
                </Box>
                <Box pb={1}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="span"
                  >
                    {person.job}
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item>
                      <EmailOutlined className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="a"
                        href={`mailto:${person.email}`}
                        className={classes.emailAndPhone}
                      >
                        {person.email}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <PhoneOutlined className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="a"
                        className={classes.emailAndPhone}
                        href={"tel:+4915901954867"}
                      >
                        {person.tel}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
