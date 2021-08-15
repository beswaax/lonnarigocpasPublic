import React from "react";
import Contact from "../src/components/contact/ContactPageContact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title key="title">Contact | Lonnarigo & Company CPAs Toronto</title>{" "}
      </Head>
      <Contact />
    </div>
  );
}
