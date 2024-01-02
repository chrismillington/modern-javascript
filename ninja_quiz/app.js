const correctAnswers = ["B", "B", "B", "B"];
// Contains all Correct answers to be looped through and compared against

// At top, declare variables
// This one contains all controls
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Prevents auto-submit page

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  //Makes an array of user answers

  // check the answers - compared using for each
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show the result
  scrollTo(0, 0);

  //Makes the results section display on Screen
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
