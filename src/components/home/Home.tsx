import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import en from '@/locale/en.json';
import ru from '@/locale/ru.json';
import Introduction from './introduction/Introduction';
import Experience from './experience/Experience';
import HardSkills from './hard-skills/HardSkills';
import Continuous from './continuous/Continuous';
import Languages from './languages/Languages';
import Education from './education/Education';

const translations = { en, ru };

const Home = () => {
  const { locale } = useLanguage();
  const t = translations[locale] || translations.en;
  return (
    <div className="max-w-4xl pt-14 pb-4 text-gray-800 space-y-6">
      <Introduction t={t} />
      <Experience t={t} />
      <Continuous t={t} />
      <HardSkills t={t} />
      <Languages t={t} />
      <Education t={t} />
    </div>
  );
};

export default Home;
