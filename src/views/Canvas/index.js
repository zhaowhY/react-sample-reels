import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import ChangeColor from './ChangeColor';
import CompressImg from './CompressImg';
import styles from './index.module.less';

export default observer(() => {
  useEffect(() => {

  }, []);

  return (
    <div>
      <h2>
        <a href="http://www.w3school.com.cn" target="_blank" rel="noreferrer">Canvas基础知识连接</a>
      </h2>

      <div
        style={{ display: 'flex', flexWrap: 'wrap' }}
        className={styles.canvas__container}
      >
        <ChangeColor></ChangeColor>
        <CompressImg></CompressImg>
      </div>
    </div>
  );
});
