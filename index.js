const togglebutton=document.getElementById("toggle");
const targets = document.querySelectorAll(".block,.links, body");
togglebutton.addEventListener("click",()=>{
  const isDark = !document.body.classList.contains("darkmode");

  targets.forEach(el => {
    el.classList.toggle("darkmode", isDark);
  });

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  if (isDark) {
    document.querySelectorAll(".block,.links, body").forEach(el => {
      el.classList.add("darkmode");
    });
  }
});

  