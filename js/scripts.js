var hiddenNav = document.querySelector(".page-header__main-nav--no-js");
var nav = document.querySelector(".page-header__nav");
var toggleButton = document.querySelector(".page-header__toggle");

hiddenNav.classList.remove("page-header__main-nav--no-js");

toggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleButton.classList.toggle("page-header__toggle--closed");
  nav.classList.toggle("page-header__nav--open");
})

