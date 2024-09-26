let screen = [];
let answer = "";

let storedVariable = 0;

const pointer = {
  symbol: "|",
  index: 0,
};

let screenContent = document.getElementById("screen");
let answerContent = document.getElementById("answer");

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
  screen.splice(pointer.index, 1);
  pointer.index = 0;
  screen = [];

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

function excuteCalculation() {
  screen.splice(pointer.index, 1);

  let expression = screen;

  console.log(expression);

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "V") {
      expression.splice(expression[i], 1);
    }
  }
  console.log(expression);

  expression = expression.join("");

  console.log(expression);
  expression = eval(expression);

  answerContent.innerHTML = expression;
}

// function mergeNumbers(array) {
//   let mergedNumber;

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       // Check for consecutive numbers
//       while (i + 1 < array.length && typeof array[i + 1] === "number") {
//         mergedNumber += array[i + 1]; // Add the next number
//         i++; // Move to the next index
//       }
//     }
//   }

//   console.log(mergedNumber);
// }

//   let tokens = expression.split(/([\+\-\*\/])/);

//   for (let i = 0; i < expression.length; i++) {
//     for (let j = 0; j < operators.length; j++) {
//       if (expression[i] === operators[j]) {
//         if (operators[j] === expression[i + 1]) {
//           mergedElement = expression[i] + expression[i + 1];
//           expression.splice(i, 2);
//           expression.splice(i, 0, mergedElement);
//         }
//       }
//     }
