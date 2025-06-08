import { IIntroduction } from '@/types/translate/translate-types';
import React from 'react';

const Introduction = ({ t }: IIntroduction) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-2">
        {t.introduction.head.title}
      </h1>
      <p className="text-lg leading-relaxed">{t.introduction.description}</p>
    </section>
  );
};

export default Introduction;
