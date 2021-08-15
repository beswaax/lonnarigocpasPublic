import React from "react";
import { Box, Typography } from "@material-ui/core";

import PageHeader from "../../src/components/headers/PageHeader";
import Content1 from "../../src/components/content/ServicesContent1";
import Content2 from "../../src/components/content/ServicesContent2";
import Content3 from "../../src/components/content/ServicesContent3";
import Content6 from "../../src/components/content/ServicesContent6";

import Head from "next/head";

const contents = [
  {
    id: 1,
    title: "Accounting Compliance & Year-End Services",
    contentLogos: {
      header: "SOME OF OUR CLIENTS",
      logo1: "/assets/companieslogos/1.png",
      logo2: "/assets/companieslogos/2.png",
      logo3: "/assets/companieslogos/3.png",
      logo4: "/assets/companieslogos/4.png",
      logo5: "/assets/companieslogos/5.png",
      logo6: "/assets/companieslogos/6.png",
    },
    content1Alt: {
      "header-p1": "Fulfil your annual filing obligations with minimum hassle",
      description:
        "For complete peace of mind, leave compliance to the experts. We’ll make sure you’re up to date with your obligations and help you plan ahead to ensure nothing falls through the cracks. Your business will have a dedicated team assigned to it, so you won’t be speaking to a new person every time you call. Plus, our advice is always free!",
      "col1-header": "Charged hourly",
      "col2-header": "Qualified",
      "col3-header": "Experienced",
      image: "/assets/tax2.jpg",
    },
    content1: {
      content1Title:
        "Fulfil your annual filing obligations with minimum hassle",
      content1Desc:
        "For complete peace of mind, leave compliance to the experts. We’ll make sure you’re up to date with your obligations and help you plan ahead to ensure nothing falls through the cracks. Your business will have a dedicated team assigned to it, so you won’t be speaking to a new person every time you call. Plus, our advice is always free!",
      content1Advantages: [
        "Company accounts",
        "Chief Risk Officer",
        "Corporation Tax",
        "Income Tax ",
      ],
    },
    content2: {
      content2Title: "Canadian Chartered Accountants",
      content2Desc:
        "As your registered tax agent on ROS, we will deal with your registrations, queries, and main filing obligations. We prepare your year-end accounts, then file your corporation tax return (Revenue) and B1 annual return (CRO). For directors of the business, we prepare and submit the F11 income tax return. We also assist with setting up payroll and adding new employees, as well as general tax and accounting advice.",
    },
    content3: {
      title:
        "We take time to nurture your business because if you grow, we grow!",
      description:
        "Every accounting need is different. We’ll take an in-depth look at your organization, learn about your goals, and develop customized, best-fit solutions to help your business get there.",
      advantages: [
        "Company accounts",
        "Corporation tax return",
        "Annual return",
        "VAT returns",
        "Annual return of trading details",
        "ESL – VIES return",
        "Overall financial performance",
      ],
      advantages2: [
        "Technologies and systems",
        "Financial management and profitability",
        "Efficiency and processes",
        "Strategy",
        "Advice and support",
        "Meetings and calls",
        "Recommendations for other service providers",
      ],
    },
    content4: {
      "header-p1": "Sit Back And Relax!",
      "header-p2": "We File On Time.",
      "header-p3": "Every Time.",
      "header-p4": "What we can help you achieve",
      description:
        "We take a proactive approach to financial management and encourage you to file as early as possible. It’s easier to prepare the accounts while details are still fresh, plus knowing your tax liability allows you to plan ahead. If your books are up to date, you should be able to file in the month following your year-end.",
      description2:
        "Avoid penalties and interest | Business plans | Pitching for funding | Investment pitch training | Accelerator applications",
      "primary-action": "Action",
      image: "/assets/2.jpg",
    },

    content6: {
      "header-p1": "Work with an accountant that understands your business",
      button1: "Contact Us",
    },
  },
  {
    id: 2,
    title: "Bookkeeping Services",
    content1Alt: {
      "header-p1": "Fulfil your annual filing obligations with minimum hassle",
      description:
        "For complete peace of mind, leave compliance to the experts. We’ll make sure you’re up to date with your obligations and help you plan ahead to ensure nothing falls through the cracks. Your business will have a dedicated team assigned to it, so you won’t be speaking to a new person every time you call. Plus, our advice is always free!",
      "col1-header": "Charged hourly",
      "col2-header": "Qualified",
      "col3-header": "Experienced",
      image: "/assets/tax2.jpg",
    },
    contentLogos: {
      header: "SOME OF OUR CLIENTS",
      logo1: "/assets/companieslogos/1.png",
      logo2: "/assets/companieslogos/2.png",
      logo3: "/assets/companieslogos/3.png",
      logo4: "/assets/companieslogos/4.png",
      logo5: "/assets/companieslogos/5.png",
      logo6: "/assets/companieslogos/6.png",
    },
    content1: {
      content1Title: "Reliable bookkeeping services at an affordable price",
      content1Desc:
        "Outsourcing your bookkeeping is typically five times more cost-effective than employing an in-house bookkeeper. With experience using popular accounting software such as Xero, Quickbooks, and Sage, our bookkeeping service will make transaction processing simple, timely, and affordable for your business.",
      content1Advantages: [
        "Charged hourly",
        "Qualified",
        "Accountable",
        "Experienced",
      ],
    },
    content2: {
      content2Title: "Real business value",
      content2Desc:
        "We provide businesses with a full range of bookkeeping services in a very straightforward and efficient manner. Our bookkeepers will manage invoice entry, bank reconciliations, VAT return filing, payroll processing, expenses claims, credit control, and much more! A typical business requires just five hours a month or two hours a week, depending on the size of the business. Our expert bookkeepers can work on-site at your business, or from our offices in Toronto.",
    },
    content3: {
      title:
        "Real-time data will allow you to make better decisions as you grow your business.",
      description:
        "Every accounting need is different. We’ll take an in-depth look at your organization, learn about your goals, and develop customized, best-fit cloud solutions to help your business get there.",
      advantages: [
        "Transactions reconciled with bank statements/bank feeds",
        "All invoices entered",
        "VAT returns filed with ROS",
        "Review of receivables",
        "All bills entered",
        "Books locked at the end of the period",
      ],
      advantages2: [
        "Expense claims entered",
        "Review of payables",
        "Month-end journals handled (depreciation, etc.)",
        "Sales Tax returns across Canada",
        "VAT reports published",
        "Payroll run and filed with ROS",
      ],
    },

    content4: {
      "header-p1": "Qualified Bookkeepers",
      "header-p2": "Certified With Xero",
      "header-p3": "And Other Software",
      "header-p4": "What we can help you achieve",
      description:
        "By outsourcing your bookkeeping, you will save both time and money. You don’t have to employ someone, there is no fixed contract length, you know the cost upfront, and won’t get the shock of hidden fees.",
      description2:
        "Real-time data | Cash flow optimisation | Credit control | Running payroll | Strealimed processes",
      image: "/assets/2.jpg",
    },
    content6: {
      "header-p1": "Work with an accountant that understands your business",
      button1: "Contact Us",
    },
  },
  {
    id: 3,
    title: "E-Commerce Taxation",
    contentLogos: {
      header: "SOME OF OUR CLIENTS",
      logo1: "/assets/companieslogos/1.png",
      logo2: "/assets/companieslogos/2.png",
      logo3: "/assets/companieslogos/3.png",
      logo4: "/assets/companieslogos/4.png",
      logo5: "/assets/companieslogos/5.png",
      logo6: "/assets/companieslogos/6.png",
    },
    content1: {
      content1Title: "We have extensive experience with e-Commerce businesses.",
      content1Desc:
        "Our team has extensive experience with Amazon and Shopify businesses as well as many other eCommerce platforms such as Paypal, Transferwise and Stripe. Our experts will take time to analyse your workflows in order to develop customised bookkeeping processes to keep track of your revenue, expenses, and taxes efficiently and accurately. ",
      content1Advantages: [
        "Customized Solutions",
        "Insightful Reporting",
        "Monitored results",
        "+15 years experience",
      ],
    },
    content2: {
      content2Title: "Real solutions for your Online Business",
      content2Desc:
        "Our team handles tax payments and filings, payroll, expenditures and income, and inventory levels so that our clients can concentrate on increasing their online customer base. Our ultimate goal is to develop accounting solutions and tax planning to minimize your taxes, and circumvent financial obstacles. Our highly experienced team of financial experts will provide regular financial reports to keep you informed of expenses and revenues in order to evaluate the performance of your business and help you make the necessary adjustments to keep your business profitable and growing.",
    },
    content3: {
      title: "Tailored accounting solutions for your E-Commerce business.",
      description:
        "We believe that keeping track of every detail of your financial transactions will assist you in making better and well-informed business decisions in order to drive your business toward a better and more prosperous future.",
      advantages: [
        "Complete business accounting",
        "Tax returns – income, sales tax, payroll",
        "Strategic business advice",
        "Audits through CRA",
        "Financing for capital",
        "Planning and preparation for taxation",
      ],
      advantages2: [
        "CFO for hire (In-house CFO)",
        "Business planning & new startups",
        "Quickbooks & other technology implementation",
        "Training and consultation for digital accounting tools",
        "Point-of-sale systems integrations",
        "Inventory valuation",
      ],
    },
    content6: {
      "header-p1": "Work with an accountant that understands your business",
      button1: "Contact Us",
    },
  },
  {
    id: 4,
    title: "Personal Tax",
    contentLogos: {
      header: "SOME OF OUR CLIENTS",
      logo1: "/assets/companieslogos/1.png",
      logo2: "/assets/companieslogos/2.png",
      logo3: "/assets/companieslogos/3.png",
      logo4: "/assets/companieslogos/4.png",
      logo5: "/assets/companieslogos/5.png",
      logo6: "/assets/companieslogos/6.png",
    },
    content1: {
      content1Title:
        "Assistance in the completion and filing of your personal taxes or T1 tax returns.",
      content1Desc:
        "Our team of expert tax professionals provide their services to individuals looking for assistance in the completion and filing of their personal taxes or T1 tax returns. We provide advice and guidance in determining the tax slips needed to complete personal tax returns. As your personal tax accountants, we identify deductions that you are eligible to claim and apply the appropriate tax credits to ensure you will not be paying more taxes than you have to.",
      content1Advantages: [
        "Save money",
        "Better returns",
        "+8000 Tax Returns Filed",
        "20+ years experience",
      ],
    },
    content2: {
      content2Title: "Filing Your T1 Tax Return",
      content2Desc:
        "As your personal tax accounts, we will ensure that your T1 tax return is filed on time. For individual taxpayers, your returns must be filed by April 30th but if you or your spouse are self-employed, you can file your tax returns by June 15th. However, you have to pay any tax owing to the CRA by April 30th. It’s important to note that the penalty and interest for not filing your tax return within the deadline can be significant. You can rely on our team of tax professionals to be informed about the latest tax rules and changes and accurately prepare your T1 personal tax return on time with the aid of error-free software.",
    },
    content3: {
      title:
        "We utilize our detailed knowledge to help you maximize your tax refund.",
      description:
        "Our tax experts will also advise you on strategies and tax planning to help you minimize your future tax liability. As a result, the anxiety and uncertainty you may normally experience when completing and filing your T1 tax return will no longer be an issue.",
      advantages: [
        "Employment Income",
        "Income from Self-Employment",
        "Commision",
        "Pension & Annuities",
        "Business Interests",
        "Professional Endeavors",
        "Investment Income",
        "Rental Income",
        "RRSPs",
        "Foreign Assets",
        "Other Sources of Income",
      ],
      advantages2: [
        "Employment Expenses",
        "Capital & Non-Capital Losses",
        "Business Investment Losses",
        "Tuition Fees & Student Loans",
        "Rental Property Expenses",
        "Membership Dues",
        "Child Care/Caregiver Expenses",
        "Adoption Expenses",
        "Moving Expenses",
        "Medical Expenses",
        "Other Expenses & Credits",
      ],
    },

    content4: {
      "header-p1": "Qualified Bookkeepers",
      "header-p2": "Certified With Xero",
      "header-p3": "And Other Software",
      "header-p4": "What we can help you achieve",
      description:
        "By outsourcing your bookkeeping, you will save both time and money. You don’t have to employ someone, there is no fixed contract length, you know the cost upfront, and won’t get the shock of hidden fees.",
      description2:
        "Real-time data | Cash flow optimisation | Credit control | Running payroll | Strealimed processes",
      image: "/assets/2.jpg",
    },
    content6: {
      "header-p1": "Work with an accountant that understands your business",
      button1: "Contact Us",
    },
  },
  {
    id: 5,
    title: "Corporate Taxation",
    contentLogos: {
      header: "SOME OF OUR CLIENTS",
      logo1: "/assets/companieslogos/1.png",
      logo2: "/assets/companieslogos/2.png",
      logo3: "/assets/companieslogos/3.png",
      logo4: "/assets/companieslogos/4.png",
      logo5: "/assets/companieslogos/5.png",
      logo6: "/assets/companieslogos/6.png",
    },
    content1: {
      content1Title: "Experienced Corporate Tax Accountants",
      content1Desc:
        "As a business owner, it can be overwhelming to think of all of the taxes that can be applied to your business. Our team has expertise across the full range of direct and indirect taxes which can provide sustainable planning opportunities to help your business minimise the cost and administrative impact of these taxes, in order to meet its compliance requirements and strategic goals.",
      content1Advantages: [
        "Strategic advice",
        "Investigative Accounting",
        "Real Solutions",
        "Achieve goals",
      ],
    },
    content2: {
      content2Title: "Corporate Tax Compliance",
      content2Desc:
        "The tax laws in Canada are full of complex intricacies and are constantly changing and this can make tax compliance quite challenging for Canadian businesses, or foreign companies with operations in Canada. Our tax professionals will ensure your returns are free of errors and submitted in a timely fashion. Proactive tax planning is critical in ensuring you’re able to take complete advantage of tax legislation.",
    },
    content3: {
      title:
        "Whether you’re running a Fortune 500 company or just starting your first business, you can depend on us.",
      description:
        "We understand that the dynamic realm of corporate taxation is ever-evolving and for this reason, we ensure our team stays up-to-date with extensive ongoing training as well as continued professional development.",
      advantages: [
        "Corporate income taxes",
        "GST/HST",
        "Tax Planning",
        "Business Advice",
      ],
      advantages2: [
        "Business Tax Considerations",
        "Provincial Taxation",
        "Owner Tax Planning",
        "Not-For-Profit Compliance",
      ],
    },
    content6: {
      "header-p1": "Work with an accountant that understands your business",
      button1: "Contact Us",
    },
  },
  {
    id: 6,
    title: "Real Estate Taxation",

    contentLogos: {
      header: "SOME OF OUR CLIENTS",
      logo1: "/assets/companieslogos/1.png",
      logo2: "/assets/companieslogos/2.png",
      logo3: "/assets/companieslogos/3.png",
      logo4: "/assets/companieslogos/4.png",
      logo5: "/assets/companieslogos/5.png",
      logo6: "/assets/companieslogos/6.png",
    },
    content1: {
      content1Title: "Specialised Real Estate Taxation Solutions",
      content1Desc:
        "We have particularly strong expertise in real estate taxation since we support a reporting service entitled Taxation of Real Estate in Canada. As a result, we have many real estate clients in all aspects of the real estate industry. We are frequently consulted on tax planning matters for real estate companies and are pleased to undertake a review of the corporate structure of a real estate group, as well as its tax planning strategies.",
      content1Advantages: [
        "Gather insights",
        "Improve systems",
        "Save money",
        "Achieve goals",
      ],
    },
    content2: {
      content2Title: "Financial services for real estate professional",
      content2Desc:
        "We provide financial services to real estate professionals who work in a fast-paced environment. We understand that you are always busy finding the right properties for your clients, while often neglecting to prioritize your own accounting and tax work. We cater to the needs of residential and commercial real estate professionals and provide you with tailored solutions for your business. Our highly experienced team of financial experts helps you manage your business and personal finances in order to devote more time to your buyers and sellers.",
    },
    content3: {
      title: "Advising on how to minimize capital tax and land transfer tax.",
      description:
        "Our expertise lies in identifying the best deals to address partnerships, tax liabilities, finance and management of your real estate portfolio to meet your specific needs.",
      advantages: [
        "Purchase Advice",
        "Finance Advice",
        "Selling Advice",
        "Mnimize taxes",
      ],
      advantages2: [
        "Real Estate Review",
        "Performance Evaluation",
        "Financial reports",
        "Tax Management",
      ],
    },
    content6: {
      "header-p1": "Work with an accountant that understands your business",
      button1: "Contact Us",
    },
  },
];

function getPostDataById(id) {
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === parseInt(id)) {
      return contents[i];
    }
  }
}

const About = ({ id }) => {
  const content = getPostDataById(id);
  console.log(content);

  if (content == undefined) {
    return (
      <Box py={50}>
        <Typography variant="h3" color="textSecondary" align="center">
          404 error
        </Typography>
      </Box>
    );
  }

  return (
    <section>
      <Head>
        <title key="title">Services | Lewis & Company Vancouver</title>{" "}
      </Head>
      <PageHeader title={content.title} />
      <Content1 content={content.content1} />
      <Content3 content={content.content3} />
      <Content2 content={content.content2} logos={content.contentLogos} />
      <Content6 content={content.content6} />
    </section>
  );
};

export default About;

About.getInitialProps = async ({ query }) => {
  const id = query.id;
  return { id };
};
