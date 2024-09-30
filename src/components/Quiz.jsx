import React, { useState } from "react";
import quizData from "./quizData.js";
import Question from "./Question";
import Score from "./Score";
import Check from "./Check.jsx";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showCorrect, setCorrect] = useState("");

  // Handle answer selection
  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setCorrect("Correct!");
    } else {
      setCorrect("Wrong!");
    }
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} totalQuestions={quizData.length} />
      ) : (
        <div className="question-data">
          <Question
            questionData={quizData[currentQuestionIndex]}
            handleAnswerClick={handleAnswerClick}
          />
          <Check showCorrect={showCorrect} />
        </div>
      )}
    </div>
  );
}

export default Quiz;
