const stringList = document.querySelector("[data-js='stringList']");
const stringOutput = document.querySelector("[data-js='string-output']");

const strings = [
  "HTML",
  "React",
  "CSS",
  "Next.js",
  "MongoDB",
  "styled components",
  "mongoose",
  "next-auth",
  "Visual Studio Code",
];

strings.forEach(function (platzhalter) {
  const card = document.createElement("li");
  card.classList.add("tag");
  card.innerHTML = `<span>${platzhalter}</span>`;
  stringList.append(card);
});

const includesString = strings.includes("HTML");
stringOutput.textContent = includesString ? "Yes its in the list" : "Nope.";

// function greet(name) {
//   console.log(`Hello ${name.toUpperCase()}`);
// }

// greet("James");
