import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const ExperienceSewingStack = ({ t }: IExperience) => {
  return (
    <>
      <p className="text-lg leading-relaxed">{t.experience.tech}:</p>
      <ul className="ml-9 list-disc pl-5 space-y-1 text-lg">
        <li>{t.experience.build}: Vite</li>
        <li>{t.experience.stack}: React, JavaScript</li>
        <li>{t.experience.api}: GraphQL</li>
        <li>{t.experience.UI}: MUI, styled-components</li>
        <li>{t.experience.tracking}: Jira</li>
        <li>
          {t.experience.utilities}: react-toastify, react-dropzone{' '}
          {t.experience.utilitiesOthers}
        </li>
      </ul>
    </>
  );
};

export default ExperienceSewingStack;
