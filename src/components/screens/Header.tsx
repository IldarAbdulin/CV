'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const { locale, setLocale } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as 'en' | 'ru');
  };

  return (
    <header className="fixed w-full h-[5vh] flex items-center bg-gray-800 z-50">
      <div className="w-[95%] m-auto flex items-center justify-between text-white">
        <h1 className="text-[23px]">Ildar Abdulin</h1>
        <select
          value={locale}
          onChange={handleChange}
          className="bg-gray-800 border-none text-[18px] text-white cursor-pointer outline-none hover:text-blue-200 px-1 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
