import React from 'react';
import { IExperience } from '@/types/translate/translate-types';
import ExperienceSewingStack from './ExperienceSewingStack';
import ExperienceSewingAboutProject from './ExperienceSewingAboutProject';
import ExperienceSewingResponsibilities from './ExperienceSewingResponsibilities';

const ExperienceSewing = ({ t }: IExperience) => {
  return (
    <div className="mt-1 ml-2">
      <p className="text-lg leading-relaxed">
        {t.experience.projectName}: {t.experience.sewing.name}
      </p>
      <ExperienceSewingStack t={t} />
      <p className="text-lg leading-relaxed">
        {t.experience.sewing.about.project}:
      </p>
      <ExperienceSewingAboutProject t={t} />
      <p className="text-lg leading-relaxed">
        {t.experience.sewing.responsibilities.title}:
      </p>
      <ExperienceSewingResponsibilities t={t} />
    </div>
  );
};

export default ExperienceSewing;
