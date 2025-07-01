// Toggle dark/light mode and switch button icon
const toggleBtn = document.getElementById("toggleDark");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Donate button alert
document.getElementById("donateBtn").addEventListener("click", () => {
  alert("Thank you for choosing to donate blood! ❤️");
});
