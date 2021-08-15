import React from "react";
import IndividualJob from "../../src/components/IndividualJob";
import Contact from "../../src/components/contact/JobContact";
import ContactDetails from "../../src/components/contact/ContactBasic";
import Head from "next/head";
import { Box, Typography } from "@material-ui/core";

const jobs = [
  {
    url: 2,
    jobPosition: "Intern Accountant",
    jobLocation: "Toronto, ON",
    jobType: "Full time",
    shift: "40 hour week",
    schedule: "Monday to Friday",
    firstTextBlockTitle: "About the job",
    textBlock: [
      "We have a career opportunity for a Intern Accountant to join our Personal Taxation department.",
      "The ideal candidate is energetic, enjoys working in a fast-paced environment, and has recently graduated University and has a Bachelor's in Accounting. This is a perfect opportunity for an individual looking to start their career with a growing accounting firm in downtown Toronto.",
      "We offer an open, collaborative work environment and are involved in a variety of accounting projects across Canada.",
      "As part of our team, you will have the opportunity to experience accounting on many levels. You will work closely with colleagues and senior management on projects throughout all phases.",
      "The ideal candidate has co-op or internship experience at an accounting firm. The characteristics we look for is being self-motivated, hard-working, and people who form collaborative relationships with colleagues and clients.",
      "We are willing to train the right individual with formal accounting education.",
      "A resume and transcript are required when applying.",
    ],
    secondTextBlockTitle: "Skills",
    skills: [
      "Adaptable: can pivot to meet project and client needs and is able to focus on multiple projects at one time.",
      "Entrepreneurial: ambitious, client-focused, and quality driven.",
      "Proactive: takes initiative, analytical, innovative, and is a natural problem solver.",
      "Team-player: builds positive relationships with colleagues, clients, and acts as an ambassador for us in the field.",
      "Maintains and strengthens existing client relationships, fostering new business opportunities from our existing work.",
      "High level of proficiency with accounting software like Xero.",
    ],
    thirdTextBlockTitle: "Responsabilities",
    responsabilities: [
      "Support preparation of agents’ commission statement",
      "Support agents’ commission calculation",
      "Investigate/resolve queries related to agent commission payments by delivering excellent customer service",
      "Payable Reconciliation (Vendors, Clients)",
      "Assist in beta-testing new design software",
      "Posting commission receipts from Paymode, Pegasus, TACC, TIESS and other vendors",
      "Monitor daily bank transactions to ensure all various receipts, credit card merchant transaction, BSP receipt/payments matches what is posted in TRAMS",
      "Processing Merchant transactions",
      "Merchant Reconciliation",
      "Investigating any unclaimed commissions and liaising with agents",
      "Advise management on weekly basis of any ongoing issue",
      "To consistently deliver excellent Customer Service to all internal and external customers",
      "Any other adhoc projects that maybe required",
    ],
    fourthTextBlockTitle: "Qualifications",
    qualifications: [
      "Bachelor’s degree in Accounting",
      "Knowledge and understanding of relevant standards and codes.",
      "Regularly updates their own technical knowledge and skills and stays current in accounting and best practices.",
      "Strong attention to detail and accuracy of work.",
      "Excellent written and verbal communication skills.",
    ],
    fifthTextBlockTitle: "Benefits",
    benefits: [
      "Casual dress",
      "Company events",
      "Disability insurance",
      "Employee assistance program",
      "Paid time off",
      "Bonus pay",
    ],
    sixthTextBlockTitle: "Help",
    sixthTextBlock:
      "We are committed to promoting diversity and employment equity.Applicants requiring accommodation at any stage in the recruitment process can contact Human Resources.",
  },
  {
    url: 3,
    jobPosition: "Junior Accountant",
    jobLocation: "Toronto, ON",
    jobType: "Full time",
    shift: "40 hour week",
    schedule: "Monday to Friday",
    firstTextBlockTitle: "About the job",
    textBlock: [
      "We have a career opportunity for a Junior Accountant to join our Real Estate Taxation department. This role focuses on the building sciences aspects of accounting.",
      "The ideal candidate is energetic, enjoys working in a fast-paced environment, and has recently graduated University and has a Bachelor's in Accounting. This is a perfect opportunity for an individual looking to start their career with a growing accounting firm in downtown Toronto.",
      "We offer an open, collaborative work environment and are involved in a variety of accounting projects across Canada.",
      "As part of our team, you will have the opportunity to experience accounting on many levels. You will work closely with colleagues and senior management on projects throughout all phases.",
      "The ideal candidate has co-op or internship experience at an accounting firm. The characteristics we look for is being self-motivated, hard-working, and people who form collaborative relationships with colleagues and clients.",
      "We are willing to train the right individual with formal accounting education.",
      "A resume and transcript are required when applying.",
    ],
    secondTextBlockTitle: "Skills",
    skills: [
      "Adaptable: can pivot to meet project and client needs and is able to focus on multiple projects at one time.",
      "Entrepreneurial: ambitious, client-focused, and quality driven.",
      "Proactive: takes initiative, analytical, innovative, and is a natural problem solver.",
      "Team-player: builds positive relationships with colleagues, clients, and acts as an ambassador for us in the field.",
      "Maintains and strengthens existing client relationships, fostering new business opportunities from our existing work.",
      "High level of proficiency with accounting software like Xero.",
    ],
    thirdTextBlockTitle: "Responsabilities",
    responsabilities: [
      "Support preparation of agents’ commission statement",
      "Support agents’ commission calculation",
      "Investigate/resolve queries related to agent commission payments by delivering excellent customer service",
      "Payable Reconciliation (Vendors, Clients)",
      "Assist in beta-testing new design software",
      "Posting commission receipts from Paymode, Pegasus, TACC, TIESS and other vendors",
      "Monitor daily bank transactions to ensure all various receipts, credit card merchant transaction, BSP receipt/payments matches what is posted in TRAMS",
      "Processing Merchant transactions",
      "Merchant Reconciliation",
      "Investigating any unclaimed commissions and liaising with agents",
      "Advise management on weekly basis of any ongoing issue",
      "To consistently deliver excellent Customer Service to all internal and external customers",
      "Any other adhoc projects that maybe required",
    ],
    fourthTextBlockTitle: "Qualifications",
    qualifications: [
      "Bachelor’s degree in Accounting",
      "Previous work experience. (2 years desired)",
      "Knowledge and understanding of relevant standards and codes.",
      "Regularly updates their own technical knowledge and skills and stays current in accounting and best practices.",
      "Strong attention to detail and accuracy of work.",
      "Excellent written and verbal communication skills.",
    ],
    fifthTextBlockTitle: "Benefits",
    benefits: [
      "Casual dress",
      "Company events",
      "Disability insurance",
      "Employee assistance program",
      "Paid time off",
      "RRSP match",
      "Tuition reimbursement",
      "Vision care",
      "Wellness program",
      "Work from home",
      "Bonus pay",
      "Overtime pay",
    ],
    sixthTextBlockTitle: "Help",
    sixthTextBlock:
      "We are committed to promoting diversity and employment equity.Applicants requiring accommodation at any stage in the recruitment process can contact Human Resources.",
  },
  {
    url: 1,
    jobPosition: "Receptionist",
    jobLocation: "Toronto, ON",
    jobType: "Full time",
    shift: "40 hour week",
    schedule: "Monday to Friday",
    firstTextBlockTitle: "About the job",
    textBlock: [
      "We have a career opportunity for a receptionist to join our Toronto department.",
      "The ideal candidate is energetic, enjoys working in a fast-paced environment. This is a perfect opportunity for an individual looking to advance their career with a growing accounting firm in downtown Toronto.",
      "We offer an open, collaborative work environment and are involved in a variety of accounting projects across Canada.",
      "The characteristics we look for is being self-motivated, hard-working, and people who form collaborative relationships with colleagues and clients.",
      "A resume and transcript are required when applying.",
    ],
    secondTextBlockTitle: "Skills",
    skills: [
      "Entrepreneurial: ambitious, client-focused, and quality driven.",
      "Proactive: takes initiative, analytical, innovative, and is a natural problem solver.",
      "Team-player: builds positive relationships with colleagues, clients, and acts as an ambassador for us in the field.",
      "Maintains and strengthens existing client relationships, fostering new business opportunities from our existing work.",
    ],
    thirdTextBlockTitle: "Responsabilities",
    responsabilities: [
      "Managing the front desk of the campus while providing excellent customer service",
      "Supporting the administrative functions of the campus to enhance the student experience",
      "Ensuring campus supplies and equipment are kept stocked and in good working order",
      "Acting in a manner that upholds the College standards",
    ],
    fourthTextBlockTitle: "Qualifications",
    qualifications: [
      "High school graduation with basic training in office practices and customer service.",
      "A minimum of one years’ experience in a similar position.",
      "An equivalent combination of education and experience will be considered. ",
      "Strong attention to detail and accuracy of work.",
      "Excellent written and verbal communication skills.",
    ],
    fifthTextBlockTitle: "Benefits",
    benefits: [
      "Casual dress",
      "Company events",
      "Disability insurance",
      "Paid time off",
      "Tuition reimbursement",
      "Vision care",
      "Wellness program",
      "Bonus pay",
      "Overtime pay",
    ],
    sixthTextBlockTitle: "Help",
    sixthTextBlock:
      "We are committed to promoting diversity and employment equity.Applicants requiring accommodation at any stage in the recruitment process can contact Human Resources.",
  },
  {
    url: 4,
    jobPosition: "Senior Accountant",
    jobLocation: "Toronto, ON",
    jobType: "Full time",
    shift: "40 hour week",
    schedule: "Monday to Friday",
    firstTextBlockTitle: "About the job",
    textBlock: [
      "We have a career opportunity for a Senior Accountant to join our Toronto department.",
      "The ideal candidate is energetic, enjoys working in a fast-paced environment, and has recently graduated University and has a Master's in Accounting. This is a perfect opportunity for an individual looking to advance their career with a growing accounting firm in downtown Toronto.",
      "We offer an open, collaborative work environment and are involved in a variety of accounting projects across Canada.",
      "As part of our team, you will have the opportunity to experience accounting on many levels. You will work closely with colleagues and senior management on projects throughout all phases.",
      "The ideal candidate has co-op or internship experience at an accounting firm. The characteristics we look for is being self-motivated, hard-working, and people who form collaborative relationships with colleagues and clients.",
      "A resume and transcript are required when applying.",
    ],
    secondTextBlockTitle: "Skills",
    skills: [
      "Adaptable: can pivot to meet project and client needs and is able to focus on multiple projects at one time.",
      "Entrepreneurial: ambitious, client-focused, and quality driven.",
      "Proactive: takes initiative, analytical, innovative, and is a natural problem solver.",
      "Team-player: builds positive relationships with colleagues, clients, and acts as an ambassador for us in the field.",
      "Maintains and strengthens existing client relationships, fostering new business opportunities from our existing work.",
      "High level of proficiency with accounting software like Xero.",
    ],
    thirdTextBlockTitle: "Responsabilities",
    responsabilities: [
      "Support preparation of agents’ commission statement",
      "Support agents’ commission calculation",
      "Investigate/resolve queries related to agent commission payments by delivering excellent customer service",
      "Payable Reconciliation (Vendors, Clients)",
      "Assist in beta-testing new design software",
      "Posting commission receipts from Paymode, Pegasus, TACC, TIESS and other vendors",
      "Monitor daily bank transactions to ensure all various receipts, credit card merchant transaction, BSP receipt/payments matches what is posted in TRAMS",
      "Processing Merchant transactions",
      "Merchant Reconciliation",
      "Investigating any unclaimed commissions and liaising with agents",
      "Advise management on weekly basis of any ongoing issue",
      "To consistently deliver excellent Customer Service to all internal and external customers",
      "Any other adhoc projects that maybe required",
    ],
    fourthTextBlockTitle: "Qualifications",
    qualifications: [
      "Master's degree in Accounting",
      "Previous work experience. (5 years desired)",
      "Knowledge and understanding of relevant standards and codes.",
      "Regularly updates their own technical knowledge and skills and stays current in accounting and best practices.",
      "Strong attention to detail and accuracy of work.",
      "Excellent written and verbal communication skills.",
    ],
    fifthTextBlockTitle: "Benefits",
    benefits: [
      "Casual dress",
      "Company events",
      "Disability insurance",
      "Employee assistance program",
      "Paid time off",
      "Tuition reimbursement",
      "Vision care",
      "Wellness program",
      "Work from home",
      "Bonus pay",
      "Overtime pay",
    ],
    sixthTextBlockTitle: "Help",
    sixthTextBlock:
      "We are committed to promoting diversity and employment equity.Applicants requiring accommodation at any stage in the recruitment process can contact Human Resources.",
  },
];

function getPostDataById(id) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].url === parseInt(id)) {
      return jobs[i];
    }
  }
}

const Job = ({ id }) => {
  const job = getPostDataById(id);

  if (job == undefined) {
    return (
      <Box py={50}>
        <Typography variant="h3" color="textSecondary" align="center">
          404 error
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {" "}
      <Head>
        <title key="title">Careers | Lonnarigo & Company CPAs Toronto</title>{" "}
      </Head>
      <IndividualJob job={job} />
      <Contact />
      <ContactDetails />
    </>
  );
};

export default Job;

Job.getInitialProps = async ({ query }) => {
  const id = query.id;
  return { id };
};
