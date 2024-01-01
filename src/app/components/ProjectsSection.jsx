'use client';
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Hotel Cabin Reservation',
    description:
      'React React Router DOM React Query React Hook Form Styled Components React Icons React Hot Toast | supabase ',
    image: '/images/projects/hotel.png',
    tag: ['All', 'FullStack'],
    gitUrl: 'https://github.com/NeaguStefanF/Hotel-Cabins',
    previewUrl: 'https://hotel-cabins.vercel.app/',
  },

  {
    id: 2,
    title: 'Next.js Competitions (deploy in work)',
    description:
      'React.js(Next.js) Bootstrap Node.js, Express, Sendgrid, MongoDB',
    image: '/images/projects/fullstack.png',
    tag: ['All', 'FullStack'],
    gitUrl:
      'https://github.com/NeaguStefanF/NextjsNodeMultiUserEventsPlatform',
    previewUrl: 'javascript:;',
  },
  {
    id: 3,
    title: 'ProjectHub',
    description:
      'React React Router DOM React Query React Hook Form Styled Components React Icons React Hot Toast | supabase',
    image: '/images/projects/projecthub.png',
    tag: ['All', 'FullStack'],
    gitUrl: 'https://github.com/NeaguStefanF/ProjectHub',
    previewUrl:
      'https://project-hub-two.vercel.app/projects',
  },
  {
    id: 4,
    title: 'Pizza React',
    description:
      'React(React Router data loading, Redux, Redux Toolkit, thunks, Tailwind CSS)',
    image: '/images/projects/pizza.png',
    tag: ['All', 'FrontEnd'],
    gitUrl:
      'https://github.com/NeaguStefanF/Pizza-order-React',
    previewUrl: 'https://pizza-order-react.vercel.app/',
  },
  {
    id: 5,
    title: 'Travel React',
    description:
      'React(React Router, context API, memo, useMemo, useCallback)',
    image: '/images/projects/travel.png',
    tag: ['All', 'FrontEnd'],
    gitUrl:
      'https://github.com/NeaguStefanF/WorldTravel-React',
    previewUrl:
      'https://world-travel-react-weld.vercel.app/',
  },
  {
    id: 6,
    title: 'Movie React',
    description:
      'React(useEffect, data fetching, custom hooks)',
    image: '/images/projects/film.png',
    tag: ['All', 'FrontEnd'],
    gitUrl: 'https://github.com/NeaguStefanF/Movie-React',
    previewUrl: 'https://movie-react-snowy.vercel.app/',
  },
  {
    id: 7,
    title: 'Questions React',
    description: 'React(useReducer)',
    image: '/images/projects/quiz.png',
    tag: ['All', 'FrontEnd'],
    gitUrl: 'https://github.com/NeaguStefanF/React-Quiz',
    previewUrl: 'https://react-quiz-khaki.vercel.app/',
  },
  {
    id: 8,
    title: 'Food App',
    description: 'Vanilla Website: HTML5 CSS3 JavaScript',
    image: '/images/projects/vanilla.png',
    tag: ['All', 'Vanilla'],
    gitUrl:
      'https://github.com/NeaguStefanF/Vanilla-Food-App',
    previewUrl: 'https://vanilla-food-app.vercel.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap sm:flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === 'FrontEnd'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === 'FullStack'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Vanilla"
          isSelected={tag === 'Vanilla'}
        />
      </div>
      <ul
        ref={ref}
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{
              duration: 0.3,
              delay: index * 0.4,
            }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
