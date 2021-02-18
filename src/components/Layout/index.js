import React, { Component } from 'react';
import Routes from '@/router/Routes';
import {
  Button
} from 'antd';
import SideBar from './SideBar';
import styles from './index.module.less';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: true
    };
  }

  hideSidebar = () => {
    this.setState({
      sidebarVisible: false
    });
  }

  render() {
    const { sidebarVisible } = this.state;

    return (
      <div className={styles.layout}>

        {sidebarVisible && (<div className={styles['layout-sidebar']}>
          <h1 style={{ color: '#67C23A', margin: 16 }}>React作品集</h1>
          <h4
            style={{
              color: '#1890ff', margin: '0px 16px 8px', cursor: 'pointer'
            }}
            onClick={() => window.open('https://kongkong99.github.io/sample-reels/#/3d-wordCloud', '_blank')}
          >
            Vue作品集连接
          </h4>
          <Button
            type="primary"
            style={{ margin: '8px 16px' }}
            onClick={this.hideSidebar}
          >
            隐藏左侧导航栏
          </Button>
          <SideBar></SideBar>
        </div>)}

        <div className={styles['layout-content']}>
          <div style={{ display: 'inline-block' }}>
            <Routes></Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
