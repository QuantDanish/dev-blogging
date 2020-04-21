import SignUp from './sign-up';
import Login from './login';

export const authRoute = [
  {
    path: 'sign-up',
    component: SignUp,
    exact: true,
  },
  {
    path: 'login',
    component: Login,
    exact: true,
  },
];
