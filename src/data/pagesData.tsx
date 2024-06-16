import React from "react";
import {
  FeatureTemplates,
  FeatureShippingBox,
  FeatureSecurityLock,
  LogoCrateAndBarrel,
  LogoAllBirds,
  LogoBrooklinen,
  LogoDeathWishCoffee,
  LogoGymShark,
  LogoJungalow,
  LogoKylie,
  LogoLeesa,
  LogoRebeccaMinkoff,
  LogoUntuckit,
} from "./SVGElements";

export const features = [
  {
    img: <FeatureTemplates />,
    heading: "Customizable templates",
    paragraph: "Free website designs to launch your store quickly and easily.",
  },
  {
    img: <FeatureShippingBox />,
    heading: "All in one",
    paragraph:
      "Shopify takes care of everything from marketing and payments to secure transactions and shipping.",
  },
  {
    img: <FeatureSecurityLock />,
    heading: "A safe and efficient platform",
    paragraph: "Millions of users trust Shopify to manage their online stores.",
  },
];

export const partners = [
  <LogoAllBirds />,
  <LogoGymShark />,
  <LogoBrooklinen />,
  <LogoLeesa />,
  <LogoKylie />,
  <LogoCrateAndBarrel />,
  <LogoUntuckit />,
  <LogoDeathWishCoffee />,
  <LogoJungalow />,
  <LogoRebeccaMinkoff />,
];

export const faqs = [
  {
    question: "What is Shopify and how does it work?",
    answer: [
      {
        type: "paragraph",
        content:
          "Shopify is a complete commerce platform that lets you start, grow, and manage a business.",
      },
      { type: "paragraph", content: "With Shopify, you can:" },
      {
        type: "list",
        items: [
          "Create and customize an online store",
          "Sell in multiple places, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops",
          "Manage products, inventory, payments, and shipping",
        ],
      },
      {
        type: "paragraph",
        content:
          "Shopify is completely cloud-based and hosted, which means you don't have to worry about upgrading or maintaining software or web servers. This gives you the flexibility to access and run your business from almost anywhere, including your mobile device.",
      },
    ],
  },
  {
    question: "How much does Shopify cost?",
    answer: [
      {
        type: "paragraph",
        content: "Try Shopify free for 3 days, no credit card required.",
      },
      {
        type: "paragraph",
        content:
          "After your trial expires, choose a pricing plan that suits the size and stage of your business.",
      },
    ],
  },
  {
    question: "Can I use my own domain name with Shopify?",
    answer: [
      {
        type: "paragraph",
        content: "Yes, you can use your own domain name with Shopify.",
      },
      {
        type: "paragraph",
        content:
          "If you have an existing domain name, you can connect it to Shopify from your store's admin.",
      },
      {
        type: "paragraph",
        content:
          "If you don't have a domain name yet, you can either buy one through Shopify or a third-party provider.",
      },
    ],
  },
  {
    question: "Do I need to be a designer or developer to use Shopify?",
    answer: [
      {
        type: "paragraph",
        content:
          "No, you don't need to be a designer or developer to use Shopify.",
      },
      { type: "paragraph", content: "Signing up for Shopify allows you to:" },
      {
        type: "list",
        items: [
          "Customize the look and feel of your store with the online store builder and themes.",
          "Add features and functionality to your store with apps.",
        ],
      },
      {
        type: "paragraph",
        content:
          "If you need extra help, you can contact our support team, or visit the Shopify Expert Marketplace to search for and hire a certified Shopify expert.",
      },
    ],
  },
];

export const siteLinks = ["Terms of Service", "Privacy Policy", "Sitemap"];
