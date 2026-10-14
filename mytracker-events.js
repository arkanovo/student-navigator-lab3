"use strict";
(() => {
  function emit(goal, params) {
    const id = window.MYTRACKER_COUNTER_ID;
    if (!id) return;
    try {
      (window._tmr = window._tmr || []).push({
        id: String(id), type: "reachGoal", goal,
        params: Object.assign({ pagePath: location.pathname }, params)
      });
    } catch (error) { /* Ошибка внешнего счётчика не блокирует интерфейс. */ }
  }
  document.addEventListener("click", event => {
    const link = event.target.closest('[data-top100-event="study_cta_click"]');
    if (link) emit("studyCtaClick", { targetPath: link.getAttribute("href") });
  });
  const checklist = document.querySelector(".checklist");
  if (!checklist) return;
  let sent = false;
  checklist.addEventListener("change", () => {
    const boxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
    if (!sent && boxes.length && boxes.every(box => box.checked)) {
      sent = true;
      emit("checklistComplete", { itemCount: boxes.length });
    }
  });
})();
