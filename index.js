let screen = [];
let answer = "";
let screenContent = document.getElementById("screen");
let answerContent = document.getElementById("answer");

const pointer = {
  symbol: "|",
  index: 0,
};

// Variables I use for storage
let storedVariable = 0;

// math functions boolean
let isPYT = false;

/**
 * Inserts a value into the screen at the current pointer index and moves the pointer forward.
 * @param {value} value - The value to be inserted.
 * @returns {string} The updated screen display.
 */
function inputValue(value) {
  screen.splice(pointer.index, 1);
  screen.splice(pointer.index, 0, value);
  pointer.index++;

  console.log("i = " + pointer.index);
  return displayScreen();
}

function storing() {
  screen.splice(pointer.index, 1);
  var screenStore = screen;
  screenStore = screenStore.join("");
  screenStore = Number(screenStore);

  if (isNaN(screenStore)) {
    return alert("Error; Only include numbers");
  } else if (screenStore === 0) {
    return alert("Error; No Number Found");
  } else {
    storedVariable = screenStore;

    console.log(storedVariable);
    return alert("Value Stored");
  }
}

function inputVariable(variable) {
  screen.splice(pointer.index, 1);
  screen.splice(pointer.index, 0, variable);
  pointer.index++;

  console.log("i = " + pointer.index);
  return displayScreen();
}

function emptyVariable() {
  storedVariable = 0;

  console.log(storedVariable);
  return alert("Value cleared");
}

/**
 * Clears the screen and resets the pointer index to zero.
 * @returns {string} The updated screen display.
 */
function clearing() {
  // clear screen
  screen.splice(pointer.index, 1);
  pointer.index = 0;
  screen = [];

  // clear answer
  answer = "";
  answerContent.innerHTML = answer;

  console.log("i = " + pointer.index);
  return displayScreen();
}

/**
 * Deletes the current character at the pointer and moves the pointer back one position if possible.
 * @returns {string} The updated screen display.
 */
function deleting() {
  screen.splice(pointer.index, 1);
  if (pointer.index > 0) {
    screen.splice(pointer.index - 1, 1);
    pointer.index--;
  }

  // clear answer
  answer = "";
  answerContent.innerHTML = answer;

  console.log("i = " + pointer.index);
  return displayScreen();
}

/**
 * Moves the pointer backward. If at the start of the screen, moves to the end.
 * @returns {string} The updated screen display.
 */
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

/**
 * Moves the pointer forward. If at the end of the screen, moves to the start.
 * @returns {string} The updated screen display.
 */
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

/**
 * Displays the current screen content by joining the elements of the screen array
 * and inserting the pointer symbol at the current index.
 */
function displayScreen() {
  screen.splice(pointer.index, 0, pointer.symbol);

  let screenStore = screen.slice();

  for (let i = 0; i < screenStore.length; i++) {
    if (screenStore[i] === "+") {
      screenStore[i] = "&plus;";
    } else if (screenStore[i] === "-") {
      screenStore[i] = "&minus;";
    } else if (screenStore[i] === "*") {
      screenStore[i] = "&times;";
    } else if (screenStore[i] === "/") {
      screenStore[i] = "&divide;";
    }
  }

  screenStore = screenStore.join("");
  screenContent.innerHTML = screenStore;
}

function executeCalculation() {
  screen.splice(pointer.index, 1);

  // check if PYT is enabled
  if (isPYT == true) {
    executePythagoreanTheorem();
  } else {
    // excutes eval
    let expression = screen;

    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === "V") {
        expression.splice(expression[i], 1);
      }
    }

    expression = expression.join("");
    expression = eval(expression);
    answerContent.innerHTML = expression;
  }
}
