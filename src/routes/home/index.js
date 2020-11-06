import React from 'react';
import Blog from '../../components/blog';
import {Layout, Input, Comment, Tooltip, Avatar } from 'antd';
import {PlusOutlined, ArrowUpOutlined, ArrowDownOutlined, CommentOutlined, GiftOutlined, ShareAltOutlined, SaveOutlined} from '@ant-design/icons';

class HomeRoute extends React.Component {
  render() {
    return (
      <Layout.Content className='app-body'>
        <div className='create-post'>
          <Input placeholder="Create Post" size="large" suffix={<PlusOutlined />} onClick={this.createPost}/>
        </div>

        <div className='filter-tab'>

        </div>
        <Blog />
        <Blog />
        <Blog />

      </Layout.Content>
    );
  }
}

export default HomeRoute;
