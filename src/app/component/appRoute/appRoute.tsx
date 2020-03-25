import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import BlogComponent from '../blog/blog';
import Login from '../auth/login/login';
import SignUp from '../auth/sign-up/singUp';
import Editor from '../editor/editor';
import Error from '../../shared/component/error';
import NotFound from '../../shared/component/notFound';
import Profile from '../profile/profile';



const AppRoute : React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/:id" component={BlogComponent}  />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/editor" component={Editor} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/error" component={Error} />
      <Route component={NotFound} />

    </Switch>
  )
}

export default AppRoute;
