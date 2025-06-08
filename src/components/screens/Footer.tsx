import { footerLinks } from '@/constants/footer-links';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-[100%] h-[5vh] flex items-center bg-gray-800 text-white">
      <div className="w-[95%] m-auto flex items-center justify-center gap-3">
        {footerLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            className={link.className}
          >
            {link.title}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
