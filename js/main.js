let workShuffle = document.querySelectorAll(".portfolio .shuffle li");
let workItems = document.querySelectorAll(".portfolio .portfolio-item");
workShuffle.forEach((item) => {
  item.addEventListener("click", (e) => {
    handleActive(workShuffle, e);
    workItems.forEach((item) => {
      item.parentElement.style.display = "none";
    });
    document
      .querySelectorAll(`.portfolio .portfolio-item.${e.target.dataset.type}`)
      .forEach((item) => {
        item.parentElement.style.display = "block";
      });
  });
});

function handleActive(array, event) {
  array.forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}
