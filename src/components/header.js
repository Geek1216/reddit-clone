import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Layout, Button, Form, Checkbox, Input, Modal, Dropdown, Menu } from 'antd';
import { UserOutlined, LockOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';

import { loginWithEmail, signupWithEmail, logout } from '../actions';

class Header extends React.Component {
  state = {
    loginVisible: false,
    signupVisible: false,
  };

  handleLogIn = async (values) => {
    try {
      await this.props.loginWithEmail(values.email, values.password);
      this.setState({ loginVisible: false });
    } catch (e) {
      alert(e);
    }
  }

  handleSignup = async (values) => {
    try {
      await this.props.signupWithEmail(values.email, values.password);
      this.setState({ signupVisible: false });
    } catch (e) {
      alert(e);
    }
  }

  toggleLoginModal = () => {
    this.setState({ loginVisible: !this.state.loginVisible });
  }

  toggleSignupModal = () => {
    this.setState({ signupVisible: !this.state.signupVisible });
  }

  handleClickMenu = ({ key }) => {
    switch (key) {
      case 'logout':
        this.props.logout();
        break;
      default:
    }
  }

  render() {
    const { loading, loggedIn, error, user } = this.props;
    const { loginVisible, signupVisible } = this.state;

    return (
      <Layout.Header className="app-header">
        <Link to="/">
          <h3 className="logo">LOGO</h3>
        </Link>
        <div className="flex-fill" />
          <Input placeholder="Search" size="large" prefix={<SearchOutlined />} />
        <div className="flex-fill" />
        {loggedIn ? (
          <Dropdown overlay={
            <Menu onClick={this.handleClickMenu}>
              <Menu.Item key="view-profile">View Profile</Menu.Item>
              <Menu.Item key="logout">Log Out</Menu.Item>
            </Menu>
          }>
            <a href="#" onClick={e => e.preventDefault()}>
              {user.firstName} <DownOutlined />
            </a>
          </Dropdown>
        ) : (
          <>
            <Button type="primary" ghost onClick={this.toggleLoginModal}>LOG IN</Button>
            <Button type="primary" onClick={this.toggleSignupModal}>SIGN UP</Button>
          </>
        )}

        <Modal
          title="Log In"
          centered
          visible={loginVisible}
          footer={null}
          onCancel={this.toggleLoginModal}
          width={400}
        >
          <Form
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.handleLogIn}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input type="email" prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="forgot-password" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button" loading={loading}>
                Log In
              </Button>
              <br />
              <br />
              New to Reddit? <a href="" onClick="">register now!</a>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Sign Up"
          centered
          visible={signupVisible}
          footer={null}
          onCancel={this.toggleSignupModal}
          width={400}
        >
          <Form
            className="signup-form"
            initialValues={{ remember: true }}
            onFinish={this.handleSignup}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input type="email" prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              
              <Input type="password"  prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: 'Input the confirm password!' }]}
            >
              <Input type="password"  prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="signup-button" loading={loading}>
                Sign Up
              </Button>
              <br />
              <br />
              Already a redditor? <a href="">Log In</a>
            </Form.Item>
          </Form>
        </Modal>

      </Layout.Header>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
  loggedIn: state.user.loggedIn,
  error: state.user.error,
  user: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loginWithEmail,
  signupWithEmail,
  logout,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
