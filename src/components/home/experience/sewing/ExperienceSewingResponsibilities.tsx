import React from 'react';
import { IExperience } from '@/types/translate/translate-types';

const ExperienceSewingResponsibilities = ({ t }: IExperience) => {
  return (
    <div className="ml-7">
      <ul className="ml-2 list-disc pl-5 space-y-1 text-lg">
        <li>{t.experience.sewing.responsibilities.authentication}</li>
        <li>{t.experience.sewing.responsibilities.models}</li>
        <li>{t.experience.sewing.responsibilities.kanban}</li>
        <li>{t.experience.sewing.responsibilities.employees}</li>
        <ol className="list-decimal pl-8 space-y-1 text-lg">
          <li>{t.experience.sewing.responsibilities.roles}</li>
          <li>{t.experience.sewing.responsibilities.system}</li>
        </ol>
        <li>{t.experience.sewing.responsibilities.optimized}</li>
      </ul>
    </div>
  );
};

export default ExperienceSewingResponsibilities;
