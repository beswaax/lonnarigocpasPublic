import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
  },
}));

const ServicesContent1 = ({ content }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Box py={20}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Container maxWidth="lg">
            <Box>
              <Grid item>
                <Typography variant="h3" align="center">
                  {content.content1Title}
                </Typography>
              </Grid>
            </Box>
            <Box py={5}>
              <Grid item>
                <Typography variant="h6" align="center" color="textSecondary">
                  {content.content1Desc}
                </Typography>
              </Grid>
            </Box>
          </Container>
          <Box pt={2}>
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="center"
                spacing={10}
              >
                {content.content1Advantages.map((advantage, i) => (
                  <Grid item key={i} md={3} sm={6} xs={12}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="flex-start"
                    >
                      <Grid item>
                        {" "}
                        <CheckOutlinedIcon
                          style={{
                            fontSize: "3rem",
                            color: theme.palette.primary.dark,
                            border: `2px solid${theme.palette.primary.main}`,
                            borderRadius: 60,
                          }}
                          align="center"
                        />
                      </Grid>
                      <Grid item>
                        {" "}
                        <Typography
                          align="center"
                          variant="h6"
                          style={{ color: theme.palette.grey[800] }}
                        >
                          {advantage}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesContent1;
