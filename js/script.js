const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

/*
classList. toggle("class") – добавить класс, если его нет, иначе удалить.28 мар. 2022 г.
*/
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
};

AOS.init();