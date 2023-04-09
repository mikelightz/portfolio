// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//Nav Hamburger svg
const buttonOne = document.querySelector(".button-one");

buttonOne.addEventListener("click", () => {
  const isOpened = buttonOne.getAttribute("aria-expanded");
  if (isOpened === "false") {
    buttonOne.setAttribute("aria-expanded", true);
    ul.classList.toggle("show");
  } else {
    buttonOne.setAttribute("aria-expanded", false);
    ul.classList.remove("show");
  }
});

// Scroll to top selection

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    const isOpened = buttonOne.getAttribute("aria-expanded");
    if (isOpened === "false") {
      buttonOne.setAttribute("aria-expanded", true);
      ul.classList.toggle("show");
    } else {
      buttonOne.setAttribute("aria-expanded", false);
      ul.classList.remove("show");
    }
  })
);
// Hamburger menu function

// Close hamburger menu when a link is clicked

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
