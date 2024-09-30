import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div className="score-container">
      <h2>Your Score</h2>
      <p>{score} out of {totalQuestions}</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
}

export default Score;
