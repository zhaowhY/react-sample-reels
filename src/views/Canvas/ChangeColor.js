import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

export default observer(() => {
  useEffect(() => {
    const colorArr = ['red', 'blue', 'yellow', 'orange', 'pink'];
    let idx = 0;
    const canvas = document.getElementById('canvas-changeColor');
    const ctx = canvas.getContext('2d');
    const path2Ds = [];
    for (let i = 0; i < 2; i++) {
      path2Ds.push(new Path2D());
    }
    path2Ds[0].rect(40, 50, 100, 100);
    path2Ds[1].rect(170, 50, 100, 100);
    path2Ds.forEach(item => {
      ctx.fill(item);
    });

    canvas.addEventListener('click', (e) => {
      const canvasInfo = canvas.getBoundingClientRect();
      const eleIdx = path2Ds.findIndex(item =>
        ctx.isPointInPath(item, e.clientX - canvasInfo.left,
          e.clientY - canvasInfo.top));

      if (eleIdx === -1) return;
      ctx.fillStyle = colorArr[idx % colorArr.length];
      idx++;
      ctx.fill(path2Ds[eleIdx]);
    });
  }, []);

  return (
    <div>
      {/* 默认width: 300, height: 150 */}
      <div>
        <h2>案例一：点击图形改变颜色</h2>
        <canvas
          id="canvas-changeColor"
          width="300"
          height="200"
          style={{ border: '1px solid red' }}
        ></canvas>
      </div>

    </div>
  );
});
