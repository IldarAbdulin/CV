import { links } from './links';
import { HomePage, ProjectsPage } from '../pages';
import SingleProject from '../components/app/projects/SingleProject';

interface IRoutesChilder {
  path: string;
  element: React.ReactElement;
}

export interface IPublicRoutes {
  children: IRoutesChilder[];
}

export const publicRoutes: IPublicRoutes[] = [
  {
    children: [
      {
        path: links.home,
        element: <HomePage />,
      },
      {
        path: links.projects,
        element: <ProjectsPage />,
      },
      {
        path: links.projectsSingle,
        element: <SingleProject />,
      },
    ],
  },
];
