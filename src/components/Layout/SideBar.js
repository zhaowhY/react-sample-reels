import React, { Component } from 'react';
import {
  Menu
} from 'antd';
import { withRouter } from 'react-router-dom';
import { layoutRoutes } from '@/router';
import { externalLinks } from '@/router/modules';

import componentIcon from '@/assets/menu/component';

const { SubMenu } = Menu;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  menuSelect = ({ key }) => {
    const { history } = this.props;
    history.push(key);
  }

  formatImg = (icon) => {
    if (!icon || !icon.name) return;
    const { type = 'img', name } = icon;
    if (type === 'component') return componentIcon[name];
    if (type === 'img') {
      return (<img
        src={require(`@/assets/menu/image/${name}`).default}
        alt=""
        style={{
          height: 14, marginRight: 10, lineHeight: 19, marginBottom: 3
        }}
      ></img>);
    }
  }

  formatLayoutMenu = (routes) => routes.map((item) => {
    const {
      children, path, name, icon
    } = item;
    if ((children || []).length > 0) {
      return (
        <SubMenu
          key={path}
          icon={this.formatImg(icon)}
          title={name}
        >
          {this.formatLayoutMenu(children)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={path} icon={this.formatImg(icon)}>
        {name}
      </Menu.Item>
    );
  })

  skipToLink = ({ key: path }) => {
    window.open(path, '_blank');
  }

  render() {
    const { collapsed } = this.state;
    const { history: { location: { pathname } } } = this.props;
    return (
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={pathname}
          onSelect={this.menuSelect}
          inlineCollapsed={collapsed}
        >
          {this.formatLayoutMenu(layoutRoutes)}
        </Menu>

        <h2 style={{ color: '#67C23A', margin: 16, marginTop: 30 }}>外链项目</h2>
        <Menu
          mode="inline"
          onSelect={this.skipToLink}
          inlineCollapsed={collapsed}
        >
          {externalLinks.map((link) => (
            <Menu.Item key={link.path}>
              {link.name}
            </Menu.Item>
          ))}
        </Menu>

        <h3
          style={{
            color: '#67C23A', margin: 16, marginTop: 30, cursor: 'pointer'
          }}
          onClick={() => window.open('https://kongkong99.github.io/sample-reels/#/3d-wordCloud', '_blank')}
        >
          Vue项目连接
        </h3>
      </div>
    );
  }
}

export default withRouter(Sidebar);
