import React from 'react';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { PostItem } from '../../components';
import { TEST_POSTS } from '../../testdata';

class HomeRoute extends React.Component {
  render() {
    return (
      <div className='page page--home container'>
        <div className='create-post'>
          <Input placeholder="Create Post" size="large" suffix={<PlusOutlined />} onClick={this.createPost}/>
        </div>
        <div>
          {TEST_POSTS.map(post => <PostItem key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}

export default HomeRoute;
