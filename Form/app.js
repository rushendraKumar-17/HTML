let passwordField = document.querySelector("#password");
let image = document.querySelector(".imageContainer");
let message = document.querySelector(".textField");
passwordField.addEventListener("focus", () => {
  image.classList.remove("eyesOpen");
  image.classList.add("eyesClose");
});
let show = document.querySelector(".show");
passwordField.addEventListener("blur", () => {
  if (show.innerHTML === `<i class="fa fa-solid fa-eye-slash"></i>`) {
    console.log(show.innerHTML);
    image.classList.remove("eyesClose");
    image.classList.add("eyesOpen");
  }
});
show.addEventListener("click", () => {
  if (show.innerHTML === `<i class="fa fa-solid fa-eye"></i>`) {
    show.innerHTML = `<i class="fa fa-solid fa-eye-slash"></i>`;
    image.classList.remove("eyesClose");
    image.classList.add("eyesOpen");
  } else {
    image.classList.remove("eyesOpen");
    image.classList.add("eyesClose");
    show.innerHTML = `<i class="fa fa-solid fa-eye"></i>`;
  }
});
let nonPasswordFields = document.querySelectorAll(".notPass");
nonPasswordFields.forEach((elem) => {
  elem.addEventListener("focus", () => {
    image.classList.remove("eyesClose");
    image.classList.add("eyesOpen");
  });
  elem.addEventListener("blur", () => {
    image.classList.remove("eyesClose");
    image.classList.add("eyesOpen");
    message.innerText = "Hello There";
  });
  elem.addEventListener("keyup", () => {
    message.innerText = elem.value;
  });
});
