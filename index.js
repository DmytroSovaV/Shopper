document.querySelector(".top-sellers-section__category")
  .addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      // видаляємо клас у всіх кнопок і додаємо тільки тій, на яку клікнули
      document.querySelectorAll(".top-sellers-section__category button")
              .forEach(btn => btn.classList.remove("active-category"));
      e.target.classList.add("active-category");
    }
  });

  document.querySelector(".trending-section__category")
  .addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      // видаляємо клас у всіх кнопок і додаємо тільки тій, на яку клікнули
      document.querySelectorAll(".trending-section__category button")
              .forEach(btn => btn.classList.remove("active-category"));
      e.target.classList.add("active-category");
    }
  });

// const blackBtn = document.getElementById('black');
// const images = document.getElementsByClassName('11');
// console.log(blackBtn);
// console.dir(images);


// blackBtn.addEventListener("click", function (){
//   images.style.backgroundColor = "red";
// })





