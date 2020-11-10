import React from 'react';
import { Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg';

import { PostItem } from '../../components';
import { TEST_POSTS } from '../../testdata';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class PostDetailRoute extends React.Component {
  constructor(props) {
    super(props);

    try {
      const { id: postId } = props.match.params;
      const post = TEST_POSTS.filter(({ id }) => id === Number(postId))[0];
      this.state = { post };
    } catch (e) {
      this.state = {};
      console.log(e);
    }
  }

  render() {
    const { post } = this.state;

    return post ? (
      <div className="page page--post-detail container">
        <PostItem data={post} />
        <div className="editor">
          <Editor />
        </div>
        <div>
          <Button type="primary" size="large" className="add-comment">Comment</Button>
        </div>
      </div>
    ) : (
      <div className="page page--post-detail container">
        <h6>Post does not exist!</h6>
      </div>
    );
  }
}

