import React from 'react';
import { IExperience } from '@/types/translate/translate-types';

const geeksLink = 'https://geeks.kg/';
const kslaLink = 'https://www.instagram.com/ksla.kg/';

const Education = ({ t }: IExperience) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">{t.education.title}</h2>
      <div className="flex flex-wrap items-center gap-1">
        <a
          href={kslaLink}
          target="_blank"
          className="text-blue-400 duration-150 hover:text-blue-600"
        >
          {t.education.kslaFull}
        </a>
        <p className="text-gray-600 leading-relaxed">
          ({t.education.kslaTime})
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-1">
        <p className="text-lg leading-relaxed">{t.education.frontend}</p>
        <a
          href={geeksLink}
          target="_blank"
          className="text-blue-400 duration-150 hover:text-blue-600"
        >
          Geeks
        </a>
        <p className="text-gray-600 leading-relaxed">({t.education.time})</p>
      </div>
    </section>
  );
};

export default Education;
