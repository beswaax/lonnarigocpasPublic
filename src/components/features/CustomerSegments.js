import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import BusinessIcon from "@material-ui/icons/Business";
import HouseIcon from "@material-ui/icons/House";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

import { Avatar, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: theme.spacing(1),
    color: theme.palette.darkBlue.main,
  },
  iconWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },

  section: {
    backgroundColor: theme.palette.grey[50],
  },
  icon: {
    color: theme.palette.primary.main,
    height: 100,
    width: 30,
  },

  gridContainer: {
    borderRadius: 6,
    padding: 45,
    backgroundColor: "white",
  },
}));

export default function Features(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    title: "We serve all customer segments",
    "col1-header": "Private customers",
    "col1-desc":
      "Everyone needs help with their taxes, that is why we provide our services to private customers as well.",
    "col2-header": "Commercial customers",
    "col2-desc":
      "Realization of new office buildings? Expansion of storage areas? We're happy to help you out with your legal issues.",
    "col3-header": "Public sector",
    "col3-desc":
      "Municipalities, churches, banks, public institutions, we are happy to be your strong partner!",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={4}>
            <Grid align="center" item xs={12} md={4}>
              <Box className={classes.gridContainer}>
                <Box pb={2}>
                  <Avatar className={classes.iconWrapper} variant="rounded">
                    <HouseIcon
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.darkBlue.main,
                      }}
                    />
                  </Avatar>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h4"
                  gutterBottom={true}
                >
                  {content["col1-header"]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {content["col1-desc"]}
                </Typography>
              </Box>
            </Grid>

            <Grid align="center" item xs={12} md={4}>
              <Box className={classes.gridContainer}>
                <Box pb={2}>
                  <Avatar className={classes.iconWrapper} variant="rounded">
                    <BusinessIcon
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.darkBlue.main,
                      }}
                    />
                  </Avatar>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["col2-header"]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {content["col2-desc"]}
                </Typography>
              </Box>
            </Grid>

            <Grid align="center" item xs={12} md={4}>
              <Box className={classes.gridContainer}>
                <Box pb={2}>
                  <Avatar className={classes.iconWrapper} variant="rounded">
                    <AccountBalanceIcon
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.darkBlue.main,
                      }}
                    />
                  </Avatar>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["col3-header"]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {content["col3-desc"]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
