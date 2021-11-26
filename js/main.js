let positionHeight = 300;
let wisherr = document.getElementById("add");
let contain = document.getElementById("container");
let title = document.getElementById("myWish");
myWish.focus();
wisherr.addEventListener("click", () => {
  if (myWish.value === "") {
    myWish.focus();
    return;
  }
  let image = Math.floor(Math.random() * 10);
  if (image == 0) {
    image++;
  }
  const positionWidth = Math.random() * 1000;

  let task = `<div class="wish" style="top:${positionHeight}px;left:${positionWidth}px;background-image:url(img/tsakblobs/${image}.svg)">
<div class="title">${myWish.value}</div>
<div class="cop-del">
  <img src="img/graphics/taskfinished.png" alt="" id="finished" class="comp">
  <img src="img/graphics/finished.png" alt="" class="del">
</div>
</div>`;
  myWish.value = "";
  myWish.focus();
  contain.innerHTML += task;
  positionHeight += 300;
  let del = document.querySelectorAll(".del");
  let finish = document.querySelectorAll(".comp");
  let heads = document.querySelectorAll(".title");
  finish.forEach((f) => {
    f.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.firstElementChild.classList.toggle(
        "finished"
      );
    });
  });

  del.forEach((d) => {
    d.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
  });
});
