const plusIcon = document.querySelectorAll(".plus");
const content = document.querySelectorAll(".text-content");
const plus = "./assets/images/icon-plus.svg";
const minus = "./assets/images/icon-minus.svg";

plusIcon.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.className === "plus") {
      item.classList.remove("plus");
      item.src = "./assets/images/icon-minus.svg";
      item.classList.add("minus");
      content[item.id].style.display = "block";
    } else if (item.className === "minus") {
      item.classList.remove("minus");
      item.src = "./assets/images/icon-plus.svg";
      item.classList.add("plus");
      content[item.id].style.display = "none";
    }
  });
});
