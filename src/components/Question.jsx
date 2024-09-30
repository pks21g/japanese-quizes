import React from "react";
import Check from "./Check";

function Question({ questionData, handleAnswerClick }) {
  const { question, options } = questionData;

  return (
    <div className="question-container">
      <div className="question">
        <h1>{question}</h1>
        <div className="options-container">
          {options.map((option, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => handleAnswerClick(option)}
            >
              <Check />
              {option}
            </button>
          ))}
        </div>
      </div>

      <span></span>
    </div>
  );
}

export default Question;
