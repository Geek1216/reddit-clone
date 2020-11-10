import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CommentOutlined,
  GiftOutlined,
  ShareAltOutlined,
  SaveOutlined,
} from '@ant-design/icons';

export default class PostItem extends React.Component {
  state = {
    votes: 0,
  };

  handleLike = () =>{
    this.setState({ votes: this.state.votes + 1 });
  }

  handleDislike = () =>{
    this.setState({ votes: this.state.votes - 1 });
  }

  render() {
    const { data: { id, timestamp, content, image } } = this.props;
    const { votes } = this.state;

    return (
      <article className="postitem">
        <div className="postitem_vote">
          <ArrowUpOutlined onClick={this.handleLike} />
          <span className="vote-count">{votes}</span>
          <ArrowDownOutlined onClick={this.handleDislike} />
        </div>

        <div class="flex-fill">
          <Link to={`/post/${id}`} className="postitem_body">
            <div class="flex-fill">
              <p class="postitem_timestap">posted by {timestamp}</p>
              <p class="postitem_content">{content}</p>
            </div>
            {!!image && (
              <img className="postitem_thumb" src={image} alt="Post Thumbnail" />
            )}
          </Link>

          <div className="postitem_actions">
            <div><CommentOutlined /> Comments</div>
            <div><GiftOutlined /> Give Award</div>
            <div><ShareAltOutlined /> Share</div>
            <div><SaveOutlined /> Save</div>
          </div>
        </div>
      </article>
    );
  }
}

PostItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    timestamp: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  }),
};
