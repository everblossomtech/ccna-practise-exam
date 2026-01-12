// Shuffle helper function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Copy and shuffle questions and options
let QUESTIONS_SHUFFLED = QUESTIONS.map(q => {
  let newQ = {...q};
  newQ.options = shuffleArray([...q.options]); // shuffle options
  return newQ;
});

QUESTIONS_SHUFFLED = shuffleArray(QUESTIONS_SHUFFLED); // shuffle questions

// Array to store user answers
let userAnswers = new Array(QUESTIONS_SHUFFLED.length).fill(null);

// Constants
const QUESTIONS_PER_PAGE = 5;
let currentPage = 0;
let totalPages = Math.ceil(QUESTIONS_SHUFFLED.length / QUESTIONS_PER_PAGE);
let timerDuration = 30 * 60; // 90 minutes in seconds

// Timer
let timerEl = document.getElementById("timer");
let timerInterval = setInterval(() => {
  if (timerDuration <= 0) {
    clearInterval(timerInterval);
    finish(); // Auto submit when time ends
    return;
  }
  timerDuration--;
  let minutes = Math.floor(timerDuration / 60);
  let seconds = timerDuration % 60;
  timerEl.innerText = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}, 1000);

// Render Page
function renderPage() {
  let start = currentPage * QUESTIONS_PER_PAGE;
  let end = Math.min(start + QUESTIONS_PER_PAGE, QUESTIONS_SHUFFLED.length);
  let container = document.getElementById("questions");
  container.innerHTML = "";

  for (let i = start; i < end; i++) {
    let q = QUESTIONS_SHUFFLED[i];
    let optionsHtml = q.options.map(o => 
      `<label>
         <input type="radio" name="q${i}" value="${o}" ${userAnswers[i] === o ? 'checked' : ''} 
         onclick="userAnswers[${i}]='${o}'"> ${o}
       </label>`
    ).join("");

    container.innerHTML += `
      <div class="question-item">
        <p><b>Q${i + 1}:</b> ${q.question}</p>
        ${optionsHtml}
      </div>
    `;
  }

  // Update Next/Prev button visibility
  let prevBtn = document.querySelector(".exam-footer .secondary-btn:first-child");
  let nextBtn = document.querySelector(".exam-footer .secondary-btn:last-child");
  prevBtn.style.display = currentPage === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentPage === totalPages - 1 ? "none" : "inline-block";
}

// Next / Previous
function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

// Finish Exam
function finish() {
  clearInterval(timerInterval); // Stop timer
  let score = 0;
  let resultsContainer = document.getElementById("questions");
  resultsContainer.innerHTML = "";

  QUESTIONS_SHUFFLED.forEach((q, idx) => {
    let userAnswer = userAnswers[idx] || "No Answer";
    if (userAnswer === q.answer) score++;

    resultsContainer.innerHTML += `
      <div class="result-item">
        <p><b>Q${idx + 1}:</b> ${q.question}</p>
        <p>Your Answer: <span class="${userAnswer === q.answer ? 'correct' : 'wrong'}">${userAnswer}</span></p>
        <p>Correct Answer: <b>${q.answer}</b></p>
        <p>Explanation: ${q.explain}</p>
        <hr>
      </div>
    `;
  });

  // Score at top
  resultsContainer.innerHTML = `<h2>Score: ${score} / ${QUESTIONS_SHUFFLED.length}</h2>` + resultsContainer.innerHTML;

  // Hide footer buttons
  document.querySelector(".exam-footer").style.display = "none";

  // Add Home button
  resultsContainer.innerHTML += `
    <div style="text-align: center; margin-top: 20px;">
      <button onclick="goHome()" class="primary-btn">Home</button>
    </div>
  `;
}

// Home button function
function goHome() {
  location.reload(); // reload the page
  // or redirect to home: window.location.href = "index.html";
}

// Initial render
renderPage();
