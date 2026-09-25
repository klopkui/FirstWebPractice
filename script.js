const header = document.querySelector(".main-header");

const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".main-header").querySelectorAll(".nav-link");
    const logo = link.closest(".main-header").querySelector(".logo-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

header.addEventListener("mouseover", handleHover.bind(0.5));
header.addEventListener("mouseout", handleHover.bind(1));
