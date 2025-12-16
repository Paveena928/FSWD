import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

export default function OnlineQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📝 Online Quiz</h2>

      {showResult ? (
        <div>
          <h3>Quiz Completed 🎉</h3>
          <p>
            Your Score: <strong>{score}</strong> / {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <p>
            <strong>
              Question {currentQuestion + 1} of {questions.length}
            </strong>
          </p>

          <h3>{questions[currentQuestion].question}</h3>

          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}

          <p style={{ marginTop: "10px" }}>
            Current Score: <strong>{score}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    display: "block",
    width: "100%",
    margin: "8px 0",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #333",
    background: "#f5f5f5",
  },
};
