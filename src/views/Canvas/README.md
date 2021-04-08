# Canvas知识总结
[官方文档连接](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)
## 绘制图形基本步骤
1. 获取画布并获取上下文
2. 创建起始点，画出路径，封闭路径
3. 在指定区域进行各类操作
```js
const canvas = document.getElementById('tutorial'); 
const ctx = canvas.getContext('2d'); // 注意：2d小写， 3d：webgl

// 缩放类
ctx.translate(75,75);

// 样式类
ctx.fillStyle = '#09F';

ctx.beginPath();
ctx.moveTo(130, 50); // 起点

// 绘制区域
ctx.lineTo(150, 75); 
ctx.arc(0,0,60,0,Math.PI*2,true);

ctx.closePath();

// 功能类
ctx.fillRect() // 填充绘制
ctx.stroke(); // 边框绘制
ctx.clip(); // 裁剪
ctx.clearRect(x, y, width, height) // 清除区域: 本质是将这个区域颜色设置为透明色，rgba(0,0,0,0)
```

## 绘制图形类
1. 绘制线 `lineTo(x, y)`
2. 绘制圆弧 `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
  - angle一般采用 `Math.PI * 度数`
  - `anticlockwis` true: 逆时针， false: 顺时针

## 样式类
1. 填充颜色 `fillStyle = color`
2. 轮廓颜色 `strokeStyle = color`
3. 设置整体透明度 `globalAlpha = 0.2`
4. 线条宽度 `lineWidth = value`
5. 略写，绘制线条末端样式、结合处样式、虚拟样式


## 文本类
1. 指定位置填充文本 `fillText(text, x, y [,maxWidth])`
2. 指定位置绘制边框文字 `strokeText(text, x, y [,maxWidth])`
3. 文本样式 `font = value`, 文本对其方式 `textAlign = value`, 基线对齐方式 `textBaseline`, 文本方向 `direction`

## 图像类
1. 图片元素 `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
  - image: 图片dom元素
  - sx, sy: 绘制位置
  - sWidth, sHeight: 绘制宽高, 比如原图片的一半高度，image.naturalWidth * 0.5
  - dx, dy ,dWidth, dHeight, 在原图片上面的裁切属性

## 变形类
1. 移动canvas的原点(0, 0) `translate(x, y)`
2. 旋转canvas `rotate(Math.PI)`
3. 缩放canvas `scale(x, y)`

## 功能类
1. 保存canvas当前的所有状态（字体颜色、粗细等等） `save()`
2. 恢复上一次save()的所有状态, `restore()`
3. 裁剪路径 `clip()`
  - 和普通图像相比的区别：只是一个遮罩，区域外canvas的内容不渲染
4. 判断坐标点是否在某个区域中 `ctx.isPointInPath((path, x, y, fillRule);)`
  - `path = new Path2D();  path.rect(50, 200, 200, 200); ctx.fill(path);`

## 事件类
1. canvas全局事件 `canvas.addEventListener('mouseover', callback)`

## 动画过程
1. 清空画布
2. 保存初始状态
3. 绘制新内容 （新的一帧）
4. 恢复初始状态
5. 开启下一帧
6. 相关函数`window.requestAnimationFrame(func)`, `setInterval()`, `setTimeout()`
```js
const ctx = document.getElementById('canvas').getContext('2d');
ctx.clearRect(0,0,300,300); // 清空画布

ctx.fillStyle = 'rgba(0,0,0,0.4)';
ctx.save(); // 保存初始状态

// 绘制此刻的内容

ctx.restore(); // 恢复初始状态

window.requestAnimationFrame(draw); // 开启下一帧
```

# 实战案类 [连接](https://kongkong99.github.io/react-sample-reels/#/canvas)
## 点击某个图形并改变其颜色
```js
const colorArr = ['red', 'blue', 'yellow', 'orange', 'pink'];
let idx = 0;
const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');
const path1 = new Path2D();
const path2 = new Path2D();
path1.rect(50, 50, 200, 200);
path2.rect(300, 50, 200, 200);
ctx.fill(path1);
ctx.fill(path2);

canvas.addEventListener('click', (e) => {
  const canvasInfo = canvas.getBoundingClientRect();
  console.log(ctx.isPointInPath(e.clientX - canvasInfo.left,
    e.clientY - canvasInfo.top));

  ctx.save();
  ctx.fillStyle = colorArr[idx % colorArr.length];
  idx++;
  ctx.fill(path1);
  ctx.restore();
});
```

## canvas压缩图片
```js
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
  console.log(blob)
}, 'image/jpg', compressradix);
```

