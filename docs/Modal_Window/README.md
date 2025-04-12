# 🪟 Modal Window — Vanilla JavaScript Practice Project

This small project demonstrates how to build and control a modal window using **plain JavaScript**, focusing on:

- DOM manipulation
- CSS class control (`classList`)
- Event handling (click & keyboard events)
- Inline style changes via `.style`
- Clean, modular architecture using objects and the Single Responsibility Principle (SRP)

---

## 📦 Project Structure

- `index.html`: Basic structure with a single "Open Modal" button, modal markup, and overlay.
- `style.css`: Contains minimal styling, including utility classes like `.hidden` and `.modal-active`.
- `app.js`: All logic is written in vanilla JS and follows modular, readable structure.

---

## 🎯 What This Project Covers

### ✅ Core Features Implemented:

1. **Open/Close Modal**

   - Toggle visibility using `classList.toggle()` for `.hidden` and `.modal-active`.

2. **Dim Background**

   - Background color changes via `document.body.style.backgroundColor` when modal is shown/hidden.

3. **Resize Modal on `Enter`**

   - On pressing the `Enter` key, modal's `width` and `border-radius` are dynamically updated.
   - Styles are reset on close.

4. **Close Modal on `Escape`**

   - Modal closes if it’s visible and `Escape` key is pressed.
   - Prevents undesired close via internal focus with `.preventDefault()`.

5. **Reset Styles Function**

   - `resetModalStyles()` prepares the modal for reuse by removing inline styles and custom classes.

6. **Dynamic Button Styling**
   - `btn--highlight` class toggled on `.close-modal` for visual feedback (optional).

---

## 🧠 Technical Notes

- All DOM interaction is centralized in well-scoped objects: `Modal` and `Body`.
- All functions follow **SRP** (Single Responsibility Principle).
- Keyboard listeners are handled via `document.addEventListener("keydown", handlerFn)`.
- No external libraries used — everything is done in **Vanilla JS**.

---

## 📁 To Run This Project

1. Clone the repo or download the files.
2. Open `index.html` in your browser.
3. Interact with the modal to test all behaviors.

---

## 🛠 Potential Extensions

- Animate modal transitions
- Trap focus inside modal for accessibility
- Add tests or linting (e.g., ESLint)

---

Made with focus and engineering ❤️  
**Andriy**
