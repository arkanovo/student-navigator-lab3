"use strict";
(() => {
  function emit(name, params) {
    if (!window.TOP100_PROJECT_ID) return;
    const eventData = Object.assign({ page_path: location.pathname }, params);
    const send = () => {
      if (window.top100Counter && typeof window.top100Counter.trackEvent === "function") {
        window.top100Counter.trackEvent(name, eventData);
      }
    };
    try {
      if (window.top100Counter) send();
      else (window._top100q = window._top100q || []).push(send);
    } catch (error) { /* Внешняя аналитика не должна мешать работе сайта. */ }
  }
  document.addEventListener("click", event => {
    const link = event.target.closest("[data-top100-event]");
    if (link) emit(link.dataset.top100Event, { target_path: link.getAttribute("href") });
  });
  const checklist = document.querySelector(".checklist");
  if (!checklist) return;
  let completeSent = false;
  checklist.addEventListener("change", () => {
    const boxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
    if (!completeSent && boxes.length > 0 && boxes.every(box => box.checked)) {
      completeSent = true;
      emit("checklist_complete", { item_count: boxes.length });
    }
  });
})();
