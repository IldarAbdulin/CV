import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const HardSkills = ({ t }: IExperience) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">{t.skills.title}</h2>
      <ul className="list-disc pl-5 space-y-1 text-lg">
        <li>JavaScript, TypeScript</li>
        <li>React, Next.js</li>
        <li>Redux, React-Redux, Redux-Toolkit</li>
        <li>Git</li>
        <li>REST API, GraphQL</li>
        <li>Firebase</li>
        <li>npm, yarn</li>
        <li>
          React-Router-Dom, Tanstack Query, Tailwind CSS, MUI, framer-motion
        </li>
      </ul>
    </section>
  );
};

export default HardSkills;
