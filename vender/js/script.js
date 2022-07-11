// Container Relax
var swiper = new Swiper(".container_carousel-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".container__relax-button__next",
    prevEl: ".container__relax-button__prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
  },
});

const images = document.querySelectorAll(
  ".container__relax-card__content-image img"
);
const btnLeft = document.querySelector(
  ".container__relax-gallery__control-left"
);
const btnRight = document.querySelector(
  ".container__relax-gallery__control-right"
);
const btnClose = document.querySelector(".container__relax-gallery__icon");
const gallery = document.querySelector(".container__relax-gallery");
const galleryImg = document.querySelector(
  ".container__relax-gallery__inner-img"
);

var currentIndex = 0;

function galleryShow() {
  if (currentIndex == 0) {
    btnLeft.classList.add("hide");
  } else {
    btnLeft.classList.remove("hide");
  }

  if (currentIndex == images.length - 1) {
    btnRight.classList.add("hide");
  } else {
    btnRight.classList.remove("hide");
  }

  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}

images.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    galleryShow();
  });
});

btnClose.addEventListener("click", () => {
  gallery.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryShow();
  }
});

btnRight.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    galleryShow();
  }
});

// Container Design

var swiper = new Swiper(".container__carousel-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".container__design-button__next",
    prevEl: ".container__design-button__prev",
  },
});

const imagesDesign = document.querySelectorAll(
  ".container__design-card__content-image img"
);
const btnLeftDesign = document.querySelector(
  ".container__design-gallery__control-left"
);
const btnRightDesign = document.querySelector(
  ".container__design-gallery__control-right"
);
const btnCloseDesign = document.querySelector(
  ".container__design-gallery__icon"
);
const galleryDesign = document.querySelector(".container__design-gallery");
const galleryImgDesign = document.querySelector(
  ".container__design-gallery__inner-img"
);

var currentIndex = 0;

function galleryShowDesign() {
  if (currentIndex == 0) {
    btnLeftDesign.classList.add("hide");
  } else {
    btnLeftDesign.classList.remove("hide");
  }

  if (currentIndex == imagesDesign.length - 1) {
    btnRightDesign.classList.add("hide");
  } else {
    btnRightDesign.classList.remove("hide");
  }

  galleryImgDesign.src = imagesDesign[currentIndex].src;
  galleryDesign.classList.add("show");
}

imagesDesign.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    galleryShowDesign();
  });
});

btnCloseDesign.addEventListener("click", () => {
  galleryDesign.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    galleryDesign.classList.remove("show");
  }
});

btnLeftDesign.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryShowDesign();
  }
});

btnRightDesign.addEventListener("click", () => {
  if (currentIndex < imagesDesign.length - 1) {
    currentIndex++;
    galleryShowDesign();
  }
});

// Container Law
var swiper = new Swiper(".container__carousel-3", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".container__carousel-button__next",
    prevEl: ".container__carousel-button__prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 1,
    },
    980: {
      slidesPerView: 3,
    },
  },
});

const imagesLaw = document.querySelectorAll(
  ".container__law-card__content-image img"
);
const btnLeftLaw = document.querySelector(
  ".container__law-gallery__control-left"
);
const btnRightLaw = document.querySelector(
  ".container__law-gallery__control-right"
);
const btnCloseLaw = document.querySelector(".container__law-gallery__icon");
const galleryLaw = document.querySelector(".container__law-gallery");
const galleryImgLaw = document.querySelector(
  ".container__law-gallery__inner-img"
);

var currentIndex = 0;

function galleryShowLaw() {
  if (currentIndex == 0) {
    btnLeftLaw.classList.add("hide");
  } else {
    btnLeftLaw.classList.remove("hide");
  }

  if (currentIndex == imagesLaw.length - 1) {
    btnRightLaw.classList.add("hide");
  } else {
    btnRightLaw.classList.remove("hide");
  }

  galleryImgLaw.src = imagesLaw[currentIndex].src;
  galleryLaw.classList.add("show");
}

imagesLaw.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    galleryShowLaw();
  });
});

btnCloseLaw.addEventListener("click", () => {
  galleryLaw.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    galleryLaw.classList.remove("show");
  }
});

btnLeftLaw.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryShowLaw();
  }
});

btnRightLaw.addEventListener("click", () => {
  if (currentIndex < imagesLaw.length - 1) {
    currentIndex++;
    galleryShowLaw();
  }
});
