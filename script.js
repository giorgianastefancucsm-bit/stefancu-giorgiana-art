// ===== Actualizare automat anul în footer =====
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// ===== Funcționalitate modal pentru carduri =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Închiderea modalului dacă dai click în afara lui
window.addEventListener("click", (event) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
