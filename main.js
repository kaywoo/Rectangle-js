document.body.style.height = "10000px";

const div = document.createElement('div');
document.body.appendChild(div);

let size = 100;
let grow = true;

div.style.width = "100%";
div.style.height = size + "px";
div.style.position = "fixed";
div.style.backgroundColor = "yellow";
div.style.top = 0;
div.style.left = 0;

const changeHeight = function () {

  if (size >= window.innerHeight / 2) {
    grow = !grow;
    div.style.backgroundColor = "limegreen";
  } else if (size <= 0) {
    grow = !grow;
    div.style.backgroundColor = "yellow";
  }

  if (grow) {
    size += 10;
    div.style.height = size + "px";
  } else {
    size -= 10;
    div.style.height = size + "px";
  }
};

window.addEventListener("scroll", changeHeight);