// import './components/Homepage';
import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';

const Loading = () => <div style={{height: '1000px'}}></div>;

const HomepageContainer = Loadable({
    loader: () => import('./containers/Homepage'),
    loading: Loading
  });


const Router = () => (
    <div>
        <Route exact path='/' component={HomepageContainer} />
    </div>
);

export default Router;