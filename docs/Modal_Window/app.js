"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".open-modal");
const btnClose = document.querySelector(".close-modal");

// 1. 🟥 Подсветка по открытию и сброс при закрытии
// 2. 🌘 Затемнение body вручную
// 3. 🖍 Изменение размеров модального окна
// 4. 🎹 Клавиша Escape и проверка
// 5. 🧼 Подготовка функции resetModalStyles()
// 6. 🔄 Переключение стиля кнопке закрытия

const Body = {
  darken() {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  },
  lighten() {
    document.body.style.backgroundColor = "";
  },
};

const Modal = {
  // helpers
  resetSize() {
    modal.style.width = modal.style.borderRadius = "";
  },
  isHidden() {
    return (
      modal.classList.contains("hidden") && overlay.classList.contains("hidden")
    );
  },
  isVisible() {
    return !this.isHidden();
  },
  // UI
  toggleVisibility() {
    modal.classList.toggle("hidden");
    modal.classList.toggle("modal-active");
  },
  resizeOnEnter(e) {
    e.preventDefault();
    if (e.key === "Enter" && modal.classList.contains("modal-active")) {
      modal.style.width = "40rem";
      modal.style.borderRadius = "1.5rem";
    }
  },
  closeOnEscape(e) {
    if (e.key === "Escape" && Modal.isVisible()) {
      Modal.toggleVisibility();
      Body.lighten();
    }
  },
  btnHighlight() {
    btnClose.classList.toggle("btn--highlight");
  },
};

btnOpen.addEventListener("click", () => {
  Modal.toggleVisibility();
  Modal.btnHighlight();
  Body.darken();
});

btnClose.addEventListener("click", () => {
  Modal.resetSize();
  Modal.toggleVisibility();
  Modal.btnHighlight();
  Body.lighten();
});

document.addEventListener("keydown", Modal.resizeOnEnter);
document.addEventListener("keydown", Modal.closeOnEscape);

const resetModalStyles = function () {
  Body.lighten();
  modal.removeAttribute("style");
};
