import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const Continuous = ({ t }: IExperience) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">{t.learning.title}</h2>
      <p className="text-lg leading-relaxed">{t.learning.description}</p>
    </section>
  );
};

export default Continuous;
