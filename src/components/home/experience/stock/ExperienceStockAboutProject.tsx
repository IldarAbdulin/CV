import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const ExperienceStockAboutProject = ({ t }: IExperience) => {
  return (
    <div className="ml-7">
      <p className="leading-relaxed text-lg ml-0.5">
        {t.experience.stock.about.description}
      </p>
      <ul className="list-none space-y-1 text-lg">
        <li className="pl-6 relative before:content-['🔹'] before:absolute before:left-0 before:top-0">
          {t.experience.stock.about.frontend}
        </li>
        <li className="pl-6 relative before:content-['🔹'] before:absolute before:left-0 before:top-0">
          {t.experience.stock.about.sso}
        </li>
        <li className="pl-6 relative before:content-['🔹'] before:absolute before:left-0 before:top-0">
          {t.experience.stock.about.roles}
        </li>
        <li className="pl-6 relative before:content-['📌'] before:absolute before:left-0 before:top-0">
          {t.experience.stock.about.info}
        </li>
      </ul>
      <p className="leading-relaxed text-lg ml-0.5">
        {t.experience.stock.about.tasks}
      </p>
    </div>
  );
};

export default ExperienceStockAboutProject;
