import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Hidden, Snackbar, useMediaQuery } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },

  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  container: {
    borderBottom: "0.6px solid lightgray",
  },
  contactWrapper: {
    backgroundColor: theme.palette.common.white,
  },
  iconWrapper: {
    backgroundColor: theme.palette.secondary.light,
  },
  icon: {
    color: theme.palette.common.white,
  },
  TextField: {
    marginBottom: "1rem",
    [`& fieldset`]: {
      borderRadius: 0,
    },
  },
  link: {
    textDecoration: "none",
    color: [theme.palette.text.secondary],
    "&:hover": {
      textDecoration: "none",
      color: [theme.palette.primary.main],
    },
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your Name")
    .min(2, "Enter a valid name")
    .required("Name is required"),

  message: yup
    .string("Enter your Message")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Message is required"),
});

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleClose = (event, reason) => {
    setAlert({ message: "", backgroundColor: "", open: false });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .get("http://localhost:3003/api/email/contactBasic", {
          params: {
            email: values.email,
            name: values.name,
            message: values.message,
          },
        })
        .then((res) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Message sent successfully",
            backgroundColor: theme.palette.success.main,
          });
        })
        .catch((error) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Something went wrong, please try again later.",
            backgroundColor: theme.palette.warning.main,
          });
          console.error(error);
        });
    },
  });

  const content = {
    header: "Let's talk about the future",
    title2: "Contact details",
    description2:
      "Our contact details. We read all your questions carefully and answer them.",
    description:
      "We're here to answer your questions and be as helpful as possible.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Send Message",
    contact1: "Address",
    "contact1-desc1": "195 Bedford Park Ave",
    "contact1-desc2": "Toronto ON",
    "contact1-desc3": "M5M 1J4",
    contact2: "Email",
    "contact2-desc": "info@lonnarigocpa.com",
    contact3: "Phone",
    "contact3-desc": "+1 647-287-3346",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Box
            pt={10}
            pb={6}
            display="flex"
            className={[classes.halfLg, classes.firstBox]}
          >
            <Container>
              <Box mb={4}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="h2"
                  gutterBottom={true}
                >
                  {content["header"]}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  paragraph={true}
                  className={classes.description}
                >
                  {content["description"]}
                </Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  className={classes.TextField}
                  variant="outlined"
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                  fullWidth
                  className={classes.TextField}
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  className={classes.TextField}
                  multiline
                  variant="outlined"
                  id="message"
                  name="message"
                  label="Message"
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  fullWidth
                />

                <Button
                  type="submit"
                  fullWidth
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  disableElevation
                  variant="raised"
                  color="primary"
                  style={{ borderRadius: 0 }}
                  variant="contained"
                >
                  {content["primary-action"]}
                </Button>
              </form>
            </Container>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={6}>
            <div
              style={{
                padding: 0,
                width: "100%",
                height: matchesXS ? "25rem" : matchesSM ? "30rem" : "45rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.279450975321!2d-79.41311078449986!3d43.72552127911884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b32e5ac6504a1%3A0x6655c752bc63d288!2s195%20Bedford%20Park%20Ave%2C%20Toronto%2C%20ON%20M5M%201J4%2C%20Canada!5e0!3m2!1sen!2sie!4v1626695514568!5m2!1sen!2sie"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                }}
                aria-hidden="false"
                loading="lazy"
              />{" "}
            </div>
          </Grid>
        </Hidden>
      </Grid>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={10}>
          <Grid container justify="center">
            <Grid item align="center">
              <Typography
                variant="h4"
                style={{ paddingBottom: "1rem" }}
                className={classes.title}
              >
                {content.title2}
              </Typography>
              <Typography
                variant="h6"
                className={classes.description}
                color="textSecondary"
              >
                {content.description2}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact1"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact1-desc1"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact1-desc2"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact1-desc3"]}
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact2"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <a
                      className={classes.link}
                      href="mailto:info@lonnarigocpa.com"
                    >
                      {content["contact2-desc"]}
                    </a>
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <PhoneIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact3"]} {content["contact4-desc"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <a href="tel:+4915901954867" className={classes.link}>
                      {content["contact3-desc"]}
                    </a>
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
