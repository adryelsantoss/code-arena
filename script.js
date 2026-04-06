const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")
const enterButton = document.querySelector(".button-system")

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

enterButton.addEventListener("click", () => {
  document.querySelector("#classes").scrollIntoView({
    behavior: "smooth"
  })
});