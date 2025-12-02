// flexisense.js

// 例如：实现 Mechanism 图片点击放大
document.querySelectorAll('.mechanism-img').forEach((img) => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
