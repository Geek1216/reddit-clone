import React, { useState } from 'react';
import {Layout, Input, Comment, Tooltip, Avatar } from 'antd';
import {PlusOutlined, ArrowUpOutlined, ArrowDownOutlined, CommentOutlined, GiftOutlined, ShareAltOutlined, SaveOutlined} from '@ant-design/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router';

class Blog extends React.Component {
  state = {
    likes :  0,
    dislikes : 0,
    action : null,
  };

  like = () =>{
    if((this.state.action == 'dislike') || (this.state.action == null) || (this.state.likes == 0) ){
      this.setState({likes: this.state.likes + 1});
      this.setState({dislikes: this.state.dislikes - 1});
      this.setState({action: 'like'});
      console.log("I am called here on likes");
    }
  }

  dislike = () =>{
    if((this.state.action == 'like') || (this.state.action == null) || (this.state.dislikes == 0) ){
      this.setState({dislikes: this.state.dislikes + 1});
      this.setState({likes: this.state.likes - 1});
      this.setState({action: 'dislike'});
      console.log("I am called here on dislikes");
    }
  }

  handleClick = () => {
    // Router.push('/blog');
    this.props.history.push('/blog')
  }

  render() {
    return (
      <article className='blog-article' onClick={()=>this.handleClick()}>
          <div className='side-vote'>
            <ArrowUpOutlined onClick={this.like} />
            <span className="vote-num">{(this.state.likes > this.state.dislikes) ? this.state.likes : - this.state.dislikes }</span>
            <ArrowDownOutlined onClick={this.dislike}/>
          </div>
          <div className='blog-content'>
            <h5>posted by several mins ago</h5>
            <h3>Here is the blog content</h3>
            <br />
            <br />

            <div className="blog-icons">
              <div><CommentOutlined /> Comments</div>
              <div><GiftOutlined /> Give Award</div>
              <div><ShareAltOutlined /> Share</div>
              <div><SaveOutlined /> Save</div>
              <div>...</div>
            </div>
          </div>
          <div>
            <img src="../../../blog.jpg"></img>
          </div>
        </article>
    );
  }
}

export default withRouter(Blog);
