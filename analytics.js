"use strict";
(() => {
  const cfg = window.LIVEINTERNET;
  const slot = document.getElementById("li-counter");
  if (!slot || !cfg || !cfg.enabled || !cfg.site || location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
  const a = document.createElement("a");
  a.href = "https://www.liveinternet.ru/stat/" + cfg.site;
  a.target = "_blank"; a.rel = "noopener noreferrer";
  a.title = "LiveInternet: статистика посещений";
  const img = document.createElement("img");
  img.width = 88; img.height = 31;
  img.alt = "LiveInternet: просмотры и посетители за 24 часа";
  // Считающий запрос выполняется один раз на загрузку каждой HTML-страницы.
  img.src = "https://counter.yadro.ru/hit?t" + cfg.counterStyle +
    ";r" + encodeURIComponent(document.referrer) +
    ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth || 24) +
    ";u" + encodeURIComponent(location.href) +
    ";h" + encodeURIComponent(document.title.substring(0,150)) + ";" + Math.random();
  a.append(img); slot.replaceChildren(a);
})();
