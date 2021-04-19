import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import lazyLoad from './lazyLoad';

const imgArray = [];
for (let i = 0; i < 40; i++) {
  imgArray.push(`https://picsum.photos/200/${200 + i}`);
}

export default observer(() => {
  const imgContainerRef = useRef(null);
  useEffect(() => {
    lazyLoad(imgContainerRef.current);
  }, []);
  return (
    <div
      ref={imgContainerRef}
      style={{
        overflow: 'auto',
        height: '90vh',
        width: 700
      }}
    >
      {imgArray.map((imgurl, index) =>
        <div style={{ height: 250 }}>
          <span style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginRight: 64,
            verticalAlign: 'top'
          }}
          >
            第
            {index}
            个:
          </span>
          <img
            alt=""
            data-src={imgurl}
            style={{ width: 200 }}
            key={index}
          ></img>
        </div>)}
    </div>
  );
});
