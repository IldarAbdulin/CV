import Marathone from '../assets/marathone.jpg';
import Aniflex from '../assets/aniflex.jpg';
import RickAndMorty from '../assets/rick-and-morty.jpg';
import Todo from '../assets/todo.jpg';

export interface IProjects {
  id: number;
  img: string;
  tech: string[];
  adaptiveVersion: string;
  code: string;
  name?: string;
  time?: string;
  disc?: string;
}

export const projects: IProjects[] = [
  {
    id: 1,
    img: Todo,
    tech: [
      'TypeScript, ',
      'React, ',
      'Vite, ',
      'CSS, ',
      'React-Router-Dom, ',
      'Firebase, ',
      'axios',
    ],
    time: '1 day',
    name: 'Todo',
    adaptiveVersion: 'yes',
    code: 'https://github.com/IldarAbdulin/Todo-Firebase',
    disc: 'This project by time I did about 5 hours, I did it myself, the tasks were stored in firebase, also there is a search engine, when you click on the button completed a put request is created, which changes the key completed in firebase from false to true and filtering of data by date of their addition, there are two routs to the main page and to the page with completed tasks, there is also a burger menu after clicking on which changes the state and opens a small menu for reference.',
  },
  {
    id: 2,
    img: Aniflex,
    name: 'Aniflex',
    tech: [
      'TypeScript, ',
      'React, ',
      'Redux, ',
      'Redux-Toolkit, ',
      'js-cookie, ',
      'React-Player, ',
      'React-Router-Dom, ',
      'Swiper, ',
      'Firebase, ',
      'axios',
      '',
    ],
    time: '2 week',
    adaptiveVersion: 'yes',
    code: 'https://github.com/IldarAbdulin/aniflex-app',
    disc: 'I developed this project entirely by myself, designed it in Figma, and found a good API. Initially, you land on the main page where you need to register or log into your account; otherwise, you won`t be able to access the anime viewing page. Registration is done entirely through Firebase, and I also used js-cookie to handle cookies, which live for three days in the application. The project is written in TypeScript, and I used Axios to communicate with the server. All requests went through Redux. The main page features a search function, a limited display of 8 animes, and pagination. On the anime page, you can choose an episode to watch easily with Anilibria`s voiceover. There`s also a page where you can see the release dates of new episodes and a random page that selects an anime randomly. Additionally, there is a theme switcher from dark to light mode, and the theme state is stored in LocalStorage.',
  },
  {
    id: 3,
    img: RickAndMorty,
    name: 'Rick And Morty',
    time: '1 week',
    tech: [
      'TypeScript, ',
      'Next, ',
      'Redux, ',
      'Redux-Toolkit, ',
      'Tailwind CSS, ',
      'Material UI, ',
      'axios',
      '',
    ],
    adaptiveVersion: 'no',
    code: 'https://github.com/IldarAbdulin/RickAndMorty',
    disc: 'I developed this project on my own, using the API. Initially you get to the main page, where there is filtering by name, specialty, gender and status, also there are absolutely all characters from the cartoon, when you click on a character you get to the page with his data. On the main page there are also two more routes to pages with locations and episodes, where the same logic as with the characters is located. There is pagination all queries were made with axios library, all queries were made through Redux',
  },
  {
    id: 4,
    img: Marathone,
    tech: [
      'JavaScript, ',
      'React, ',
      'SCSS, ',
      'Tailwind CSS, ',
      'React-Router-Dom',
    ],
    name: 'Marathone',
    time: '1 day',
    adaptiveVersion: 'no',
    code: 'https://github.com/IldarAbdulin/Marathon',
    disc: 'This project I did myself on design in figma, I did it when I studied on the 4th month in Geeks. In this project I used the library React-Router-Dom, then I only practiced with it, but I what it is. On time on the layout took not so much time, the layout itself is quite complex, from this you can conclude that I can layout wellThis project I did myself by design in figma, I did it when I was in my 4th month at Geeks. In this project I used React-Router-Dom library, at that time I was just practicing with it, but I already understood what it is and how it works. The layout took not so much time, the layout itself is quite complex, from this we can conclude that I can layout well',
  },
];
