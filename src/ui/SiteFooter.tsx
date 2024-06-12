import React from "react";
import { siteLinks } from "../data/pagesData";

export const SiteFooter = (): JSX.Element => (
  <footer className="bg-col-mint-cream pb-32 md:pb-40">
    <nav>
      <ul className="container flex justify-end">
        {siteLinks.map((link, i) => (
          <li key={i} className="ml-3 sm:ml-8 md:ml-12 lg:ml-28">
            <a
              className="bold-text transition-colors duration-150 ease-in-out hover:text-col-light-black active:text-col-silver"
              href="/"
            >
              <span className="underline hover:no-underline">{link}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);
