screen = [];

const pointer = {
  symbol: "|",
  index: 0,
};

let screenContent = document.getElementById("screen");

function inputNumber(number) {
  screen.splice(pointer.index, 1);
  screen.splice(pointer.index, 0, number);
  pointer.index++;

  console.log("i = " + pointer.index);
  return displayScreen();
}

function clearing() {
  screen.splice(pointer.index, 1);
  pointer.index = 0;
  screen = [];

  console.log("i = " + pointer.index);
  return displayScreen();
}

function deleting() {
  screen.splice(pointer.index, 1);
  if (pointer.index > 0) {
    screen.splice(pointer.index - 1, 1);
    pointer.index--;
  }

  console.log("i = " + pointer.index);
  return displayScreen();
}

function moveCursorBackward() {
  if (pointer.index == 0) {
    screen.splice(pointer.index, 1);
    pointer.index = screen.length;
  } else {
    screen.splice(pointer.index, 1);
    pointer.index--;
  }

  console.log("i = " + pointer.index);
  return displayScreen();
}

function moveCursorForward() {
  if (pointer.index == screen.length - 1) {
    screen.splice(pointer.index, 1);
    pointer.index = 0;
  } else {
    screen.splice(pointer.index, 1);
    pointer.index++;
  }

  console.log("i = " + pointer.index);
  return displayScreen();
}

function displayScreen() {
  screen.splice(pointer.index, 0, pointer.symbol);
  let joinedScreen = screen.join("");
  screenContent.innerHTML = joinedScreen;
}
