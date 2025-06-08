import React from 'react';
import { IExperience } from '@/types/translate/translate-types';
import ExperienceStockStack from './ExperienceStockStack';
import ExperienceStockAboutProject from './ExperienceStockAboutProject';
import ExperienceStockAchievements from './ExperienceStockAchievements';

const ExperienceStock = ({ t }: IExperience) => {
  return (
    <div className="mt-2 ml-2">
      <p className="text-lg leading-relaxed">
        {t.experience.projectName}: {t.experience.stock.name}
      </p>
      <ExperienceStockStack t={t} />
      <p className="text-lg leading-relaxed">
        {t.experience.stock.about.project}:
      </p>
      <ExperienceStockAboutProject t={t} />
      <p className="text-lg leading-relaxed">
        {t.experience.stock.about.achievements.title}:
      </p>
      <ExperienceStockAchievements t={t} />
    </div>
  );
};

export default ExperienceStock;
