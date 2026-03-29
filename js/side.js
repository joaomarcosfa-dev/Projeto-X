const body = document.body;
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");
const menuBtn = document.querySelector(".menu-btn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  if (modeText) modeText.innerText = "Light Mode";
}

if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

if (modeSwitch) {
  modeSwitch.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");

    if (modeText) {
      modeText.innerText = isDark ? "Light Mode" : "Dark Mode";
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}