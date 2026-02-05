let score = 0;
let clicks = 0;
let resets = 0;
let highScore = 0;

function increaseScore() {
  score++;
  clicks++;

  // Calculate reset chance
  const resetChance = (score / 100) * 100;

  if (Math.random() < resetChance / 100) {
    resets++;
    score = 0; // Reset the score counter to 0
  }

  if (score > highScore) {
    highScore = score;
  }

  document.getElementById('scoreValue').textContent = score;
  document.getElementById('clicksValue').textContent = clicks;
  document.getElementById('resetsValue').textContent = resets;
  document.getElementById('highScoreValue').textContent = highScore;
}
