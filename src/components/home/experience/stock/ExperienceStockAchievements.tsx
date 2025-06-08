import { IExperience } from '@/types/translate/translate-types';
import React from 'react';

const ExperienceStockAchievements = ({ t }: IExperience) => {
  return (
    <ul className="ml-9 list-disc pl-5 space-y-1 text-lg">
      <li>{t.experience.stock.about.achievements.optimize}</li>
      <li>{t.experience.stock.about.achievements.cleanCode}</li>
      <li>{t.experience.stock.about.achievements.communication}</li>
      <li>{t.experience.stock.about.achievements.beforehand}</li>
    </ul>
  );
};

export default ExperienceStockAchievements;
