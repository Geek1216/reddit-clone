import React from 'react';
import { Layout, Button } from 'antd';
import Blog from '../../components/blog';
import EditorComponent from '../../components/editor';
import { UserOutlined, AppleOutlined} from '@ant-design/icons';


class BlogDetailRoute extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <Layout.Content className='app-body'>
        <Blog />
        <div className="learn-more">
          <div className="learn-title">
            <UserOutlined /> &nbsp; <a href="#">u/Aspiration_Official .</a>  &nbsp; <span>PROMOTED</span>
          </div>
          <div className="learn-content">
           <p>TIL you can open an fossil fuel-free debit card with Aspiration and easily divest from big banks.</p>
           <div className="learn-bottom">
              <a href="#">www.aspiration.com</a> 
              <button>LEARN MORE</button>
           </div>
          </div>
          
          <div className="comment-editor">      
            <EditorComponent />
          </div>
          <div>
            <Button type="primary" size="large" style={{float: 'right'}}>Comment</Button>
          </div>
        </div>

      </Layout.Content>
    );
  }
}

export default BlogDetailRoute;
