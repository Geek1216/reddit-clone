import React from 'react';
import {Layout } from 'antd';

class BlogDetailRoute extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <Layout.Content className='app-body'>
        Here is the blog details page
      </Layout.Content>
    );
  }
}

export default BlogDetailRoute;
