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
      <h1>
        <a href="https://github.com/kongkong99/react-sample-reels/blob/main/src/views/Canvas/README.md" target="_blank" rel="noreferrer">Canvas基础知识连接</a>
      </h1>

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
