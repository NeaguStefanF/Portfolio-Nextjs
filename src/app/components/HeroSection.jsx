'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  const pdfUrl = 'cv.pdf'; // Replace with the actual path to your PDF

  const handleDownloadClick = () => {
    // You can add additional tracking or analytics here if needed
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl 
      font-extrabold h-[140px]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <span className="inline-block w-full sm:w-auto">
              <TypeAnimation
                sequence={[
                  'Ștefan',
                  1000,
                  'Web Developer',
                  1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about crafting the digital world with
            code. Learning and building with React,
            Nest.js/Node.js, and more.
          </p>
          <div>
            <Link
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-600 to-blue-500  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-white hover:bg-slate-200"
              href="#contact"
            >
              Contact me
            </Link>

            {/* <a
              href={pdfUrl}
              download="CV.pdf"
              onClick={handleDownloadClick}
              className="relative mt-3 w-full sm:w-fit mr-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-6 py-3 transition-all w-full sm:w-fit ease-in duration-75 bg-white dark:bg-[#121212] rounded-full group-hover:bg-opacity-0">
                Download CV
              </span>
            </a> */}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="h-[450px]">
            <div
              className="rounded-full bg-[#181818] w-[250px] h-[250px]
           lg:w-[400px] lg:h-[400px] relative overflow-hidden"
            >
              <Image
                src="/images/profile-pic.png"
                alt="profile pic portfolio"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
