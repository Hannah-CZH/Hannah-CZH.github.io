// flexisense.js

// 例如：实现 Mechanism 图片点击放大
document.querySelectorAll('.mechanism-img').forEach((img) => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});

// ================= Scroll Reveal 动画 =================

// 观察所有 .reveal 元素
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

// 绑定观察
revealElements.forEach(el => observer.observe(el));


// ================== 保留你原来的机制图片放大功能 ==================
document.querySelectorAll('.mechanism-img').forEach((img) => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});

/* ================= Scroll Reveal for entire page ================= */
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
},{
  threshold: 0.15
});

revealEls.forEach(el => io.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll('.reveal');

  const showElement = (entry) => {
    entry.target.classList.add('show');
  };

  const options = {
    threshold: 0.2,  // 触发浮现的距离阈值
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showElement(entry);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});
