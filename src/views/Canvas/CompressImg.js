import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import logoImg from './imgs/logo.png';

export default observer(() => {
  const [rawImgSize] = useState(new Blob([logoImg]).size);
  const [compressImgSize, setCompressImgSize] = useState(0);
  useEffect(() => {
    const rawImg = document.getElementById('rawImg');

    const compressImg = document.getElementById('compressImg');
    const canvas = document.getElementById('canvas-compress');
    const ctx = canvas.getContext('2d');

    const compressradix = 0.0000001; // 压缩系数
    const scale = 0.5; // 图片尺寸缩放倍数
    ctx.drawImage(rawImg, 0, 0, rawImg.width * scale, rawImg.height * scale);
    // qualityArgument表示导出的图片质量，只要导出为jpg和webp格式的时候此参数才有效果，默认值是0.92
    compressImg.src = canvas.toDataURL('image/jpg', compressradix);

    canvas.toBlob((blob) => {
      setCompressImgSize(blob.size);
    }, 'image/jpg', compressradix);
  }, []);

  return (
    <div>
      {/* 默认width: 300, height: 150 */}
      <div>
        <h2>案例二：压缩图片</h2>
        <div style={{ display: 'flex' }}>
          <div>
            <h3>原图</h3>
            <h4>
              大小：
              {rawImgSize}
              B
            </h4>

            <img
              src={logoImg}
              alt=""
              id="rawImg"
              style={{ width: 200 }}
            ></img>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <h3>缩略图</h3>
              <h4>
                大小：
                {compressImgSize}
                B
              </h4>
              <img src="" alt="" id="compressImg"></img>
            </div>
            <div style={{ marginTop: 16 }}>
              <h3>canvas画布</h3>
              <h4> </h4>
              <canvas
                id="canvas-compress"
                width="100"
                height="100"
                style={{ border: '1px solid red' }}
              ></canvas>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
});
