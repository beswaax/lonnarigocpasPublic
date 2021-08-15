import React from "react";
import { makeStyles } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import AboutPageContent from "../src/components/content/AboutPageContent";
import Testimonials from "../src/components/testimonials/TestimonalsWithoutLogo";
import TeamPartners from "../src/components/Team/Team2";
import TeamAllMembers from "../src/components/Team/TeamAllMembers";
import Head from "next/head";
import Contact2 from "../src/components/content/ServicesContent6";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const classes = useStyles();

  return (
    <section>
      <Head>
        <title key="title">About | Lonnarigo & Company CPAs Toronto</title>{" "}
      </Head>
      <PageHeader
        title={"About Us"}
        background={"/assets/8.jpg"}
        description={
          "The company at a glance. Find out more about us and our motivations."
        }
      />
      <AboutPageContent />
      <TeamPartners />
      <Testimonials />
      <TeamAllMembers />

      <Contact2
        content={{
          "header-p1": "Work with an accountant that understands your business",
          button1: "Contact Us",
        }}
      />
    </section>
  );
};

export default About;
