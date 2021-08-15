import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import Testimonials from "../testimonials/Testimonials2";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.grey[900],
  },
  logo: {
    maxWidth: "8rem",
  },
}));

const ServicesContent1 = ({ content, logos }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Box py={20}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Container maxWidth="lg">
            <Box>
              <Grid item>
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.title}
                >
                  {content.content2Title}
                </Typography>
              </Grid>
            </Box>
            <Box py={5}>
              <Grid item>
                <Typography variant="h6" align="center" color="textSecondary">
                  {content.content2Desc}
                </Typography>
              </Grid>
            </Box>
          </Container>
          <Testimonials content={logos} />
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesContent1;
