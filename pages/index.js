import React from "react";

import Header from "../src/components/headers/Header7";
import Content2 from "../src/components/content/Content1";
import Team from "../src/components/Team/Team2";
import Features from "../src/components/features/Features";
import CustomerSegments from "../src/components/features/CustomerSegments";
import Testimonials from "../src/components/testimonials/TestimonalsWithoutLogo";
import ContactDetails from "../src/components/content/ServicesContent6";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title key="title">Lonnarigo & Company CPAs Toronto</title>{" "}
      </Head>
      <Header />
      <CustomerSegments />
      <Content2 />
      <Features />
      <Testimonials />
      <Team />
      <ContactDetails
        content={{
          "header-p1": "Work with an accountant that understands your business",
          button1: "Contact Us",
        }}
      />
    </div>
  );
}
