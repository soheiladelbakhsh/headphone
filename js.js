caseTop = document.querySelector(".case-top");
homeTop = document.querySelector(".home-top");
productTop = document.querySelector(".product-top");
specsTop = document.querySelector(".specs-top");
specimg = document.querySelector(".spec-img");
console.log(caseTop, homeTop, productTop, specsTop);
pSpecs = document.querySelector(".p-specs");
headphonetopmain = document.querySelector(".headphone-top-main");
pcase = document.querySelector(".p-case");
styleheader = document.querySelector(".style-header");
header = document.getElementById("header");
onear = document.querySelector(".on-ear");
i = 0;
document.addEventListener("click", (e) => {
  //   console.log(e);
  //   console.log(this.scrollY);
  //   console.log(specimg.offsetTop);
  //   this.scrollY = specimg.offsetTop;
  // window.scrollBy(0, pSpecs.offsetTop);
});
specsTop.addEventListener("click", () => {
  window.scrollBy(0, pSpecs.offsetTop - this.scrollY - 100);
  homeTop.classList.add("unactive");
  specsTop.classList.add("active");
  productTop.classList.add("unactive");
  caseTop.classList.add("unactive");
  homeTop.classList.remove("active");
  productTop.classList.remove("active");
  caseTop.classList.remove("active");
  specsTop.classList.remove("unactive");
});
homeTop.addEventListener("click", () => {
  window.scrollBy(0, headphonetopmain.offsetTop - this.scrollY);
  specsTop.classList.add("unactive");
  homeTop.classList.add("active");
  productTop.classList.add("unactive");
  caseTop.classList.add("unactive");
  specsTop.classList.remove("active");
  productTop.classList.remove("active");
  caseTop.classList.remove("active");
  homeTop.classList.remove("unactive");
});
productTop.addEventListener("click", () => {
  window.scrollBy(0, styleheader.offsetTop - this.scrollY - 90);
  console.log(styleheader.offsetTop - this.scrollY);
  homeTop.classList.add("unactive");
  productTop.classList.add("active");
  specsTop.classList.add("unactive");
  caseTop.classList.add("unactive");
  homeTop.classList.remove("active");
  specsTop.classList.remove("active");
  caseTop.classList.remove("active");
  productTop.classList.remove("unactive");
});
caseTop.addEventListener("click", () => {
  window.scrollBy(0, pcase.offsetTop - this.scrollY - 90);
  console.log(pcase.offsetTop - this.scrollY);
  homeTop.classList.add("unactive");
  caseTop.classList.add("active");
  productTop.classList.add("unactive");
  specsTop.classList.add("unactive");
  homeTop.classList.remove("active");
  productTop.classList.remove("active");
  specsTop.classList.remove("active");
  caseTop.classList.remove("unactive");
});
window.addEventListener("scroll", function () {
  if (scrollY < pSpecs.offsetTop - 100) {
    specsTop.classList.add("unactive");
    homeTop.classList.add("active");
    productTop.classList.add("unactive");
    caseTop.classList.add("unactive");
    specsTop.classList.remove("active");
    productTop.classList.remove("active");
    caseTop.classList.remove("active");
    homeTop.classList.remove("unactive");
  } else if (
    scrollY >= pSpecs.offsetTop - 100 &&
    scrollY < pcase.offsetTop - 100
  ) {
    homeTop.classList.add("unactive");
    specsTop.classList.add("active");
    productTop.classList.add("unactive");
    caseTop.classList.add("unactive");
    homeTop.classList.remove("active");
    productTop.classList.remove("active");
    caseTop.classList.remove("active");
    specsTop.classList.remove("unactive");
  } else if (
    scrollY >= pcase.offsetTop - 100 &&
    scrollY < styleheader.offsetTop - 100
  ) {
    homeTop.classList.add("unactive");
    caseTop.classList.add("active");
    productTop.classList.add("unactive");
    specsTop.classList.add("unactive");
    homeTop.classList.remove("active");
    productTop.classList.remove("active");
    specsTop.classList.remove("active");
    caseTop.classList.remove("unactive");
  } else if (scrollY >= styleheader.offsetTop - 100) {
    homeTop.classList.add("unactive");
    productTop.classList.add("active");
    specsTop.classList.add("unactive");
    caseTop.classList.add("unactive");
    homeTop.classList.remove("active");
    specsTop.classList.remove("active");
    caseTop.classList.remove("active");
    productTop.classList.remove("unactive");
  }
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "var(--body-color)";
  } else header.style.backgroundColor = "transparent";
});

sun = document.querySelector(".sun");
moon = document.querySelector(".moon");
sun.addEventListener("click", function () {
  sun.style.display = "none";
  moon.style.display = "inline";
  document.documentElement.style.setProperty("--body-color", "#bcbcbc");
  document.documentElement.style.setProperty("--text-color", "#373737");
  document.documentElement.style.setProperty("--black-color", "#919191");
  document.documentElement.style.setProperty("--un-color", "#aeaeae");
  t = 0;
  localStorage.setItem("counter", t);
});
moon.addEventListener("click", function () {
  moon.style.display = "none";
  sun.style.display = "inline";
  document.documentElement.style.setProperty(
    "--body-color",
    "hsl(var(--hue-color), 4%, 6%)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "hsl(var(--hue-color), 4%, 75%)"
  );
  document.documentElement.style.setProperty(
    "--black-color",
    "hsl(var(--hue-color), 4%, 4%)"
  );
  document.documentElement.style.setProperty("--un-color", "#181a1b");
  t = 1;
  localStorage.setItem("counter", t);
});

if (localStorage.getItem("counter")) {
  tLocal = JSON.parse(localStorage.getItem("counter"));
  if (tLocal == "0") {
    sun.style.display = "none";
    moon.style.display = "inline";
    document.documentElement.style.setProperty("--body-color", "#bcbcbc");
    document.documentElement.style.setProperty("--text-color", "#373737");
    document.documentElement.style.setProperty("--black-color", "#919191");
    document.documentElement.style.setProperty("--un-color", "#aeaeae");
  } else if (tLocal == "1") {
    moon.style.display = "none";
    sun.style.display = "inline";
    document.documentElement.style.setProperty(
      "--body-color",
      "hsl(var(--hue-color), 4%, 6%)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      "hsl(var(--hue-color), 4%, 75%)"
    );
    document.documentElement.style.setProperty(
      "--black-color",
      "hsl(var(--hue-color), 4%, 4%)"
    );
    document.documentElement.style.setProperty("--un-color", "#181a1b");
  }
}

prev = document.querySelector(".prev");
next = document.querySelector(".next");
blackHead = document.querySelector(".black-head");
redHead = document.querySelector(".red-head");
yellowkHead = document.querySelector(".yellow-head");
blackP = document.querySelector(".black-p");
redP = document.querySelector(".red-p");
yellowP = document.querySelector(".yellow-p");
z = 1;
prev.addEventListener("click", function () {
  if (z == 1) {
    blackHead.src = "./scss/img/product2.png";
    redHead.src = "./scss/img/product3.png";
    yellowkHead.src = "./scss/img/product4.png";
    blackP.innerHTML = "red Black";
    redP.innerHTML = "Night Black";
    yellowP.innerHTML = "Blue";
    z--;
    console.log(z);
  } else if (z == 0 || z == 5) {
    blackHead.src = "./scss/img/product3.png";
    redHead.src = "./scss/img/product4.png";
    yellowkHead.src = "./scss/img/product5.png";
    blackP.innerHTML = "Night Black";
    redP.innerHTML = "Blue";
    yellowP.innerHTML = "Twilight gray";
    z--;
    console.log(z);
  } else if (z == -1 || z == 4) {
    blackHead.src = "./scss/img/product4.png";
    redHead.src = "./scss/img/product5.png";
    yellowkHead.src = "./scss/img/product1.png";
    blackP.innerHTML = "Blue";
    redP.innerHTML = "Twilight gray";
    yellowP.innerHTML = "Black";
    z--;
    console.log(z);
  } else if (z == -2 || z == 3) {
    blackHead.src = "./scss/img/product5.png";
    redHead.src = "./scss/img/product1.png";
    yellowkHead.src = "./scss/img/product2.png";
    blackP.innerHTML = "Twilight gray";
    redP.innerHTML = "Black";
    yellowP.innerHTML = "red Black";
    z--;
    console.log(z);
  } else if (z == -3 || z == 2) {
    blackHead.src = "./scss/img/product1.png";
    redHead.src = "./scss/img/product2.png";
    yellowkHead.src = "./scss/img/product3.png";
    blackP.innerHTML = "Black";
    redP.innerHTML = "red Black";
    yellowP.innerHTML = "Night Black";
    z = 1;
    console.log(z);
  }
});

next.addEventListener("click", function () {
  if (z == 1) {
    blackHead.src = "./scss/img/product5.png";
    redHead.src = "./scss/img/product1.png";
    yellowkHead.src = "./scss/img/product2.png";
    blackP.innerHTML = "Twilight gray";
    redP.innerHTML = "Black";
    yellowP.innerHTML = "red Black";
    z++;
    console.log(z);
  } else if (z == 2 || z == -3) {
    blackHead.src = "./scss/img/product4.png";
    redHead.src = "./scss/img/product5.png";
    yellowkHead.src = "./scss/img/product1.png";
    blackP.innerHTML = "Blue";
    redP.innerHTML = "Twilight gray";
    yellowP.innerHTML = "Black";
    z++;
    console.log(z);
  } else if (z == 3 || z == -2) {
    blackHead.src = "./scss/img/product3.png";
    redHead.src = "./scss/img/product4.png";
    yellowkHead.src = "./scss/img/product5.png";
    blackP.innerHTML = "Night Black";
    redP.innerHTML = "Blue";
    yellowP.innerHTML = "Twilight gray";
    z++;
    console.log(z);
  } else if (z == 4 || z == -1) {
    blackHead.src = "./scss/img/product2.png";
    redHead.src = "./scss/img/product3.png";
    yellowkHead.src = "./scss/img/product4.png";
    blackP.innerHTML = "Red Black";
    redP.innerHTML = "Night Black";
    yellowP.innerHTML = "Blue";
    z++;
    console.log(z);
  } else if (z == 5 || z == 0) {
    blackHead.src = "./scss/img/product1.png";
    redHead.src = "./scss/img/product2.png";
    yellowkHead.src = "./scss/img/product3.png";
    blackP.innerHTML = "Black";
    redP.innerHTML = "red Black";
    yellowP.innerHTML = "Night Black";
    z = 1;
    console.log(z);
  }
});
dwPrev = document.querySelector(".dw-prev");
dwNext = document.querySelector(".dw-next");
dwPrev.addEventListener("click", function () {
  if (z == 1) {
    blackHead.src = "./scss/img/product2.png";
    redHead.src = "./scss/img/product3.png";
    yellowkHead.src = "./scss/img/product4.png";
    blackP.innerHTML = "red Black";
    redP.innerHTML = "Night Black";
    yellowP.innerHTML = "Blue";
    z--;
    console.log(z);
  } else if (z == 0 || z == 5) {
    blackHead.src = "./scss/img/product3.png";
    redHead.src = "./scss/img/product4.png";
    yellowkHead.src = "./scss/img/product5.png";
    blackP.innerHTML = "Night Black";
    redP.innerHTML = "Blue";
    yellowP.innerHTML = "Twilight gray";
    z--;
    console.log(z);
  } else if (z == -1 || z == 4) {
    blackHead.src = "./scss/img/product4.png";
    redHead.src = "./scss/img/product5.png";
    yellowkHead.src = "./scss/img/product1.png";
    blackP.innerHTML = "Blue";
    redP.innerHTML = "Twilight gray";
    yellowP.innerHTML = "Black";
    z--;
    console.log(z);
  } else if (z == -2 || z == 3) {
    blackHead.src = "./scss/img/product5.png";
    redHead.src = "./scss/img/product1.png";
    yellowkHead.src = "./scss/img/product2.png";
    blackP.innerHTML = "Twilight gray";
    redP.innerHTML = "Black";
    yellowP.innerHTML = "red Black";
    z--;
    console.log(z);
  } else if (z == -3 || z == 2) {
    blackHead.src = "./scss/img/product1.png";
    redHead.src = "./scss/img/product2.png";
    yellowkHead.src = "./scss/img/product3.png";
    blackP.innerHTML = "Black";
    redP.innerHTML = "red Black";
    yellowP.innerHTML = "Night Black";
    z = 1;
    console.log(z);
  }
});

dwNext.addEventListener("click", function () {
  if (z == 1) {
    blackHead.src = "./scss/img/product5.png";
    redHead.src = "./scss/img/product1.png";
    yellowkHead.src = "./scss/img/product2.png";
    blackP.innerHTML = "Twilight gray";
    redP.innerHTML = "Black";
    yellowP.innerHTML = "red Black";
    z++;
    console.log(z);
  } else if (z == 2 || z == -3) {
    blackHead.src = "./scss/img/product4.png";
    redHead.src = "./scss/img/product5.png";
    yellowkHead.src = "./scss/img/product1.png";
    blackP.innerHTML = "Blue";
    redP.innerHTML = "Twilight gray";
    yellowP.innerHTML = "Black";
    z++;
    console.log(z);
  } else if (z == 3 || z == -2) {
    blackHead.src = "./scss/img/product3.png";
    redHead.src = "./scss/img/product4.png";
    yellowkHead.src = "./scss/img/product5.png";
    blackP.innerHTML = "Night Black";
    redP.innerHTML = "Blue";
    yellowP.innerHTML = "Twilight gray";
    z++;
    console.log(z);
  } else if (z == 4 || z == -1) {
    blackHead.src = "./scss/img/product2.png";
    redHead.src = "./scss/img/product3.png";
    yellowkHead.src = "./scss/img/product4.png";
    blackP.innerHTML = "Red Black";
    redP.innerHTML = "Night Black";
    yellowP.innerHTML = "Blue";
    z++;
    console.log(z);
  } else if (z == 5 || z == 0) {
    blackHead.src = "./scss/img/product1.png";
    redHead.src = "./scss/img/product2.png";
    yellowkHead.src = "./scss/img/product3.png";
    blackP.innerHTML = "Black";
    redP.innerHTML = "red Black";
    yellowP.innerHTML = "Night Black";
    z = 1;
    console.log(z);
  }
});

smallMenu = document.querySelector(".small-menu");
dwHeaderRes = document.querySelector(".dw-header-res");
closebtn = document.querySelector(".close");
smallMenu.addEventListener("click", function () {
  dwHeaderRes.style.top = "0";
});

closebtn.addEventListener("click", function () {
  dwHeaderRes.style.top = "-70vh";
});

homeSmall = document.getElementsByClassName("btn-tog")[0];
specsSmall = document.getElementsByClassName("btn-tog")[1];
caseSmall = document.getElementsByClassName("btn-tog")[2];
productSmall = document.getElementsByClassName("btn-tog")[3];
moodSmall = document.getElementsByClassName("btn-tog")[4];
homeSmall.addEventListener("click", () => {
  window.scrollBy(0, headphonetopmain.offsetTop - this.scrollY);
  specsSmall.classList.add("unactive");
  homeSmall.classList.add("active");
  productSmall.classList.add("unactive");
  caseSmall.classList.add("unactive");
  specsSmall.classList.remove("active");
  productSmall.classList.remove("active");
  caseSmall.classList.remove("active");
  homeSmall.classList.remove("unactive");
  dwHeaderRes.style.top = "-70vh";
});

specsSmall.addEventListener("click", () => {
  window.scrollBy(0, pSpecs.offsetTop - this.scrollY - 100);
  homeSmall.classList.add("unactive");
  specsSmall.classList.add("active");
  productSmall.classList.add("unactive");
  caseSmall.classList.add("unactive");
  homeSmall.classList.remove("active");
  productSmall.classList.remove("active");
  caseSmall.classList.remove("active");
  specsSmall.classList.remove("unactive");
  dwHeaderRes.style.top = "-70vh";
});
productSmall.addEventListener("click", () => {
  window.scrollBy(0, styleheader.offsetTop - this.scrollY - 90);
  console.log(styleheader.offsetTop - this.scrollY);
  homeSmall.classList.add("unactive");
  productSmall.classList.add("active");
  specsSmall.classList.add("unactive");
  caseSmall.classList.add("unactive");
  homeSmall.classList.remove("active");
  specsSmall.classList.remove("active");
  caseSmall.classList.remove("active");
  productSmall.classList.remove("unactive");
  dwHeaderRes.style.top = "-70vh";
});
caseSmall.addEventListener("click", () => {
  window.scrollBy(0, pcase.offsetTop - this.scrollY - 90);
  console.log(pcase.offsetTop - this.scrollY);
  homeSmall.classList.add("unactive");
  caseSmall.classList.add("active");
  productSmall.classList.add("unactive");
  specsSmall.classList.add("unactive");
  homeSmall.classList.remove("active");
  productSmall.classList.remove("active");
  specsSmall.classList.remove("active");
  caseSmall.classList.remove("unactive");
  dwHeaderRes.style.top = "-70vh";
});
window.addEventListener("scroll", function () {
  if (scrollY < pSpecs.offsetTop - 100) {
    specsSmall.classList.add("unactive");
    homeSmall.classList.add("active");
    productSmall.classList.add("unactive");
    caseSmall.classList.add("unactive");
    specsSmall.classList.remove("active");
    productSmall.classList.remove("active");
    caseSmall.classList.remove("active");
    homeSmall.classList.remove("unactive");
  } else if (
    scrollY >= pSpecs.offsetTop - 100 &&
    scrollY < pcase.offsetTop - 100
  ) {
    homeSmall.classList.add("unactive");
    specsSmall.classList.add("active");
    productSmall.classList.add("unactive");
    caseSmall.classList.add("unactive");
    homeSmall.classList.remove("active");
    productSmall.classList.remove("active");
    caseSmall.classList.remove("active");
    specsSmall.classList.remove("unactive");
  } else if (
    scrollY >= pcase.offsetTop - 100 &&
    scrollY < styleheader.offsetTop - 100
  ) {
    homeSmall.classList.add("unactive");
    caseSmall.classList.add("active");
    productSmall.classList.add("unactive");
    specsSmall.classList.add("unactive");
    homeSmall.classList.remove("active");
    productSmall.classList.remove("active");
    specsSmall.classList.remove("active");
    caseSmall.classList.remove("unactive");
  } else if (scrollY >= styleheader.offsetTop - 100) {
    homeSmall.classList.add("unactive");
    productSmall.classList.add("active");
    specsSmall.classList.add("unactive");
    caseSmall.classList.add("unactive");
    homeSmall.classList.remove("active");
    specsSmall.classList.remove("active");
    caseSmall.classList.remove("active");
    productSmall.classList.remove("unactive");
  }
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "var(--body-color)";
  } else header.style.backgroundColor = "transparent";
});

sunSmall = document.querySelector(".sun-small");
moonSmall = document.querySelector(".moon-small");
sunSmall.addEventListener("click", function () {
  sunSmall.style.display = "none";
  moonSmall.style.display = "inline";
  document.documentElement.style.setProperty("--body-color", "#bcbcbc");
  document.documentElement.style.setProperty("--text-color", "#373737");
  document.documentElement.style.setProperty("--black-color", "#919191");
  document.documentElement.style.setProperty("--un-color", "#aeaeae");
  t = 0;
  localStorage.setItem("counter", t);
});
moonSmall.addEventListener("click", function () {
  moonSmall.style.display = "none";
  sunSmall.style.display = "inline";
  document.documentElement.style.setProperty(
    "--body-color",
    "hsl(var(--hue-color), 4%, 6%)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "hsl(var(--hue-color), 4%, 75%)"
  );
  document.documentElement.style.setProperty(
    "--black-color",
    "hsl(var(--hue-color), 4%, 4%)"
  );
  document.documentElement.style.setProperty("--un-color", "#181a1b");
  t = 1;
  localStorage.setItem("counter", t);
});

if (localStorage.getItem("counter")) {
  tLocal = JSON.parse(localStorage.getItem("counter"));
  if (tLocal == "0") {
    sunSmall.style.display = "none";
    moonSmall.style.display = "inline";
    document.documentElement.style.setProperty("--body-color", "#bcbcbc");
    document.documentElement.style.setProperty("--text-color", "#373737");
    document.documentElement.style.setProperty("--black-color", "#919191");
    document.documentElement.style.setProperty("--un-color", "#aeaeae");
  } else if (tLocal == "1") {
    moonSmall.style.display = "none";
    sunSmall.style.display = "inline";
    document.documentElement.style.setProperty(
      "--body-color",
      "hsl(var(--hue-color), 4%, 6%)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      "hsl(var(--hue-color), 4%, 75%)"
    );
    document.documentElement.style.setProperty(
      "--black-color",
      "hsl(var(--hue-color), 4%, 4%)"
    );
    document.documentElement.style.setProperty("--un-color", "#181a1b");
  }
}
// console.log(window.location.href)