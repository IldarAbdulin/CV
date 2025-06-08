import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const ExperienceSewingAboutProject = ({ t }: IExperience) => {
  return (
    <div className="ml-7">
      <p className="leading-relaxed text-lg ml-0.5">
        {t.experience.sewing.about.description}
      </p>
      <p className="text-lg">{t.experience.sewing.about.include}:</p>
      <ul className="ml-2 list-disc pl-5 space-y-1 text-lg">
        <li>{t.experience.sewing.about.model}</li>
        <li>{t.experience.sewing.about.generating}</li>
        <li>{t.experience.sewing.about.mobile}</li>
        <li>{t.experience.sewing.about.status}</li>
      </ul>
      <p className="text-lg">{t.experience.sewing.about.features}:</p>
      <ul className="ml-2 list-disc pl-5 space-y-1 text-lg">
        <li>{t.experience.sewing.about.statistics}</li>
        <li>{t.experience.sewing.about.warehouse}</li>
      </ul>
    </div>
  );
};

export default ExperienceSewingAboutProject;
