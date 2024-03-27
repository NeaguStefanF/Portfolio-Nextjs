'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className=" list-disc pl-2">
        <li>JavaScript/TypeScript</li>
        <li>React/Next.js</li>
        <li>Nest.js/Node.js Express</li>
        <li>MongoDB/MySQL</li>
        <li>HTML5 CSS3 Tailwind</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className=" list-disc pl-2">
        <li>University Dunarea de Jos(CS and IT)</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className=" list-disc pl-2">
        <li>Freelancer as fullstack developer</li>
        <li>Programmer assistant in web development.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div
        className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4
      xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/about.jpg"
          alt="about me photo"
          width={500}
          height={500}
          className="mb-4 md:mb-0"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg ">
            I am a full stack web developer with a passion
            for creating interactive and responsive web
            application. I m specializing in
            JavaScript/Typescript, React, Next.js,
            Nest.js/Node.js, Express, MongoDB/MySQL, HTML,
            CSS, Tailwind, Git, Wordpress and always open to
            more. A quick learner and I am always looking to
            expand my knowledge and skill set. I am a team
            player and I am exited to work with others to
            create amazing applications.
          </p>
          <div className="flex flex-wrap flex-row gap-2 mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() =>
                handleTabChange('experience')
              }
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
