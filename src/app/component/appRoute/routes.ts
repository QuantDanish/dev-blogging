import { Error, NotFound } from 'Components/';
import { IRouteConfig } from 'Types/';
import {
  Home,
  BlogContainer,
  Login,
  SignUp,
  AuthContainer,
  Editor,
  Profile,
} from '../../page';

const routes: IRouteConfig[] = [
  {
    id: '/home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    id: '/blog/:id',
    path: '/blog/:id',
    component: BlogContainer,
    exact: true,
  },
  {
    id: '/editor',
    path: '/editor',
    component: Editor,
    exact: true,
  },
  {
    id: '/profile',
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    id: '/error',
    path: '/error',
    component: Error,
    exact: true,
  },

  {
    id: '/auth',
    path: '/auth',
    component: AuthContainer,
    children: [
      {
        id: '/auth/sign-up',
        path: '/auth/sign-up',
        component: SignUp,
        exact: true,
      },
      {
        id: '/auth/login',
        path: '/auth/login',
        component: Login,
        exact: true,
      },
    ],
  },
  {
    id: 'not-found',
    path: '',
    component: NotFound,
  },
];

export default routes;
