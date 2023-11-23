import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex items-center justify-between">
        <Link
          href={'/'}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
