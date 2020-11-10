import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import { Header } from '../components';
import HomeRoute from './home';
import PostDetailRoute from './post-detail';

const MainRoute = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Switch>
        <Route path="/" component={HomeRoute} exact />
        <Route path="/post/:id" component={PostDetailRoute} exact/>
        <Redirect to="/" />
      </Switch>
    </Layout.Content>
  </Layout>
)

export default MainRoute;
