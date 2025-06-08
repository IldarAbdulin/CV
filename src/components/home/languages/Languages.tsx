import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const Languages = ({ t }: IExperience) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">{t.languages.title}</h2>
      <p className="text-lg leading-relaxed">
        {t.languages.en}:{' '}
        <span className="text-gray-600">{t.languages.enLvl}</span>
      </p>
      <p className="text-lg leading-relaxed">
        {t.languages.ru}:{' '}
        <span className="text-gray-600">{t.languages.ruLvl}</span>
      </p>
    </section>
  );
};

export default Languages;
