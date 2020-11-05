import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import HomeRoute from './home';
import { Header } from '../components';

const MainRoute = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Switch>
        <Route path="/" component={HomeRoute} />
        <Redirect to="/" />
      </Switch>
    </Layout.Content>
  </Layout>
)

export default MainRoute;
