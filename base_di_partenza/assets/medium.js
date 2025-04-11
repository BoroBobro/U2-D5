document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");
  const navButton = document.querySelector(".btn-dark"); 

  window.addEventListener("scroll", () => {
    const mainBottom = main.offsetTop + main.offsetHeight;
    if (window.scrollY > mainBottom) {
      nav.classList.add("scrolled");
      navButton.classList.add("scrolled-button"); 
    } else {
      nav.classList.remove("scrolled");
      navButton.classList.remove("scrolled-button"); 
}});
});

