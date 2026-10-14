"use strict";
(() => {
  const project = window.TOP100_PROJECT_ID;
  if (!project) return;
  (window._top100q = window._top100q || []).push(function () {
    try {
      window.top100Counter = new top100({
        project: String(project),
        element: "top100-widget",
        widgetColor: "0062b1",
        attributes_dataset: ["top100-block"],
        trackHashes: true
      });
    } catch (error) { /* Аналитика не блокирует основной сайт. */ }
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://st.top100.ru/top100/top100.js";
  document.head.append(script);
})();
