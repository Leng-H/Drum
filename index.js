/**
 * Handle on screen button click.
 */
let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playSound(this.innerHTML); // "this" refers to the identity of the "current" button.
    animateBtn(this.innerHTML);
  });
}

/**
 * Handle keyboard press.
 */
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  animateBtn(event.key);
});

/**
 * Play sound depending on the given key.
 */
function playSound(key) {
  console.log(key + " was pressed!");
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
  }
}

/**
 * Add animation on pressed.
 */
function animateBtn(key) {
  let ele = document.querySelector("." + key);
  ele.classList.add("pressed");

  // Remove .pressed after a delay of 100ms.
  setTimeout(function () {
    ele.classList.remove("pressed");
  }, 100);
}
