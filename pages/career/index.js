import React from "react";

import PageHeader from "../../src/components/headers/PageHeader";
import Content1 from "../../src/components/content/CareersPageContent1";
import Content3 from "../../src/components/content/CareersPageContent3";
import Contact from "../../src/components/contact/ContactBasic";
import Head from "next/head";

const Careers = () => {
  return (
    <section>
      <Head>
        <title key="title">Careers | Lonnarigo & Company CPAs Toronto</title>{" "}
      </Head>
      <PageHeader
        title={"Careers"}
        background={"/assets/9.jpg"}
        description={
          "We were founded by leading professional accountants with a combined experience of 60 years in the field."
        }
      />
      <Content1 />
      <Content3 />
      <Contact />
    </section>
  );
};

export default Careers;
