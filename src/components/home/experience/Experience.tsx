import React from 'react';
import { IExperience } from '@/types/translate/translate-types';
import ExperienceSewing from './sewing/ExperienceSewing';
import ExperienceStock from './stock/ExperienceStock';

const Experience = ({ t }: IExperience) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">{t.experience.head.title}</h2>
      <h5 className="text-2xl mt-3 text-indigo-900">
        Booster Technologies:{' '}
        <span className="text-gray-600 text-[20px]">
          ({t.experience.booster})
        </span>
      </h5>
      <ExperienceSewing t={t} />
      <ExperienceStock t={t} />
    </section>
  );
};

export default Experience;
