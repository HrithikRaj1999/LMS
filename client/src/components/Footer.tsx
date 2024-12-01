import { FOOTER_LINKS } from "@/lib/constants";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 LMS. All Right Reserved</p>
      <div className="footer__links">
        {FOOTER_LINKS.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className="footer__link"
          >
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
