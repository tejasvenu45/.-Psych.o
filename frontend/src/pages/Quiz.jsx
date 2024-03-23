import { useState } from "react";
import Footer from "./Footer";

function Quiz() {
  const questions = [
    {
      question: "How often do you feel overwhelmed or stressed?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How would you rate your overall mood most of the time?",
      options: ["Happy", "Neutral", "Sad", "Anxious"],
    },
    // Add more questions here
  ];

  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate mental health score here
      let score = calculateScore(answers);
      // Display the score to the user
      alert(`Your mental health score is: ${score}`);
    }
  };

  const calculateScore = (answers) => {
    // Dummy scoring system, you can implement your own
    let score = 0;
    answers.forEach((answer) => {
      if (answer === "Rarely" || answer === "Happy") {
        score += 1;
      } else if (answer === "Sometimes" || answer === "Neutral") {
        score += 2;
      } else if (answer === "Often" || answer === "Sad") {
        score += 3;
      } else if (answer === "Always" || answer === "Anxious") {
        score += 4;
      }
    });
    return score;
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Question {currentQuestion + 1}:
        </h1>
        <p className="mb-6">{questions[currentQuestion].question}</p>
        <div className="grid grid-cols-1 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
     
    </div>
     <Footer />
     </>
  );
}

export default Quiz;
