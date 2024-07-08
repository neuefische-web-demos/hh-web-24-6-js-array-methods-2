const numberList = document.querySelector("[data-js='numberList']");
const numberOutput = document.querySelector("[data-js='number-output']");

const numbers = [512, 77, 333, 49, 81, 4, -12, 3.14, 1000, 31, 99];

// displayNumber(numbers[0]);
// displayNumber(numbers[1]);
// displayNumber(numbers[2]);
// displayNumber(numbers[3]);
// displayNumber(numbers[4]);
// displayNumber(numbers[5]);
// displayNumber(numbers[6]);
// displayNumber(numbers[7]);
// displayNumber(numbers[8]);
// displayNumber(numbers[9]);
// displayNumber(numbers[10]);

// function fakeForEach(array, callbackFunction) {
//   for (const item of array) {
//     callbackFunction(item);
//   }
// }

// fakeForEach(numbers, displayNumber); // callbackFunction becomes displayNumber!

function displayNumber(number) {
  const card = document.createElement("li");
  card.classList.add("tag");
  card.innerHTML = `<span>${number}</span>`;
  numberList.append(card);
}
//----------v------ higher order function
numbers.forEach(displayNumber);
//--------------------^------ callback function

const includesNumber = numbers.includes(3.14);
numberOutput.textContent = includesNumber;

// status "error" "pending" "success"
const fetchStatus = "";
// const isErrorOrPending = status === "error" || status === "pending";
const isErrorOrPending = ["error", "pending"].includes(fetchStatus);
