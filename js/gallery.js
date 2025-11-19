// ======================= PROJECT IMAGE GALLERY JS =======================
// 可复用的图片画廊组件（支持全站共用）

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-gallery").forEach(function (gallery) {
      const mainImg = gallery.querySelector(".gallery-main-image");
      const thumbs = Array.from(gallery.querySelectorAll(".gallery-thumb"));
      const prevBtn = gallery.querySelector(".gallery-arrow-left");
      const nextBtn = gallery.querySelector(".gallery-arrow-right");
      let currentIndex = 0;

      if (!mainImg || thumbs.length === 0) return;

      // 保证每个缩略图有 data-full（若没有则使用缩略图本身）
      thumbs.forEach((t) => {
        if (!t.dataset.full || t.dataset.full.trim() === "") {
          const img = t.querySelector("img");
          if (img && img.src) t.dataset.full = img.src;
        }
      });

      function showImage(index) {
        if (index < 0) index = thumbs.length - 1;
        if (index >= thumbs.length) index = 0;
        currentIndex = index;

        const btn = thumbs[index];
        const fullSrc = btn.dataset.full;
        const altText = (btn.querySelector("img") && btn.querySelector("img").alt) || btn.title || "";

        // 将主图设为 data-full（保证完整图可见）
        mainImg.src = fullSrc;
        mainImg.alt = altText;

        thumbs.forEach((t) => t.classList.remove("is-active"));
        btn.classList.add("is-active");

        // 更新 gallery 的 data-current（可用于样式或外部脚本）
        gallery.dataset.current = index;
      }

      // 缩略图点击切换
      thumbs.forEach((btn, idx) => {
        btn.addEventListener("click", function () {
          showImage(idx);
        });

        // hover 时显示 title（浏览器默认 tooltip 依然可用）——也可以自定义
        btn.addEventListener("mouseenter", function () {
          // 可增加交互（目前保留浏览器默认 title）
        });
      });

      // 箭头切换
      if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
      if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

      // 双击放大查看（Lightbox）
      mainImg.addEventListener("dblclick", function () {
        const src = mainImg.src;
        const overlay = document.createElement("div");
        overlay.className = "lightbox";

        const img = document.createElement("img");
        img.src = src;
        img.alt = mainImg.alt || "";
        overlay.appendChild(img);

        overlay.addEventListener("click", function () {
          overlay.remove();
        });

        document.body.appendChild(overlay);
      });

      // 初始化显示第一张
      showImage(0);
    });
  });
})();