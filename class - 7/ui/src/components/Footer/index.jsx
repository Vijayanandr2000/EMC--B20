import React from "react";
import "./Footer.css";

import { Footers } from "../../utils/Constant/FooterLinks";

const Footer = () => {
  return (
    <footer>
      {Footers.map((footer) => {
        return (
          <section>
            <h1>{footer.title}</h1>

            <ul>
              {footer.items.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </section>
        );
      })}
    </footer>
  );
};

export default Footer;
