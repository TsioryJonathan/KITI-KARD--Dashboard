import React from "react";

export const Footer = () => {
  return (
    <footer className="py-4 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} KITI'KARD. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
