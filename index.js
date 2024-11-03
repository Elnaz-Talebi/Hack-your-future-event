window.onload = (event) => {
  const hamberger = document.querySelector(".hamberger-bar");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
function adjustMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    hamberger.querySelector("span").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    hamberger.querySelector("span").innerHTML = "<i class='fas fa-times'></i>";
  }
}

hamberger.addEventListener("click", adjustMenu);
for (let item of items) {
  item.addEventListener("click", adjustMenu);
}
const logo = document.querySelector("#logobtn");
logo.addEventListener("click",()=>{
  alert("Welcome to Elnaz Talebi event by Hack your future.");
})
};



