import React, { useState } from 'react';



export default function App() {
  const questions = [
    {
      questionText: 'What is the capital of California?',
      answerOptions: [
        { answerText: 'Los Angeles', isCorrect: false },
        { answerText: 'San Francisco', isCorrect: false },
        { answerText: 'Sacramento', isCorrect: true },
        { answerText: 'San Diego', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Florida?',
      answerOptions: [
        { answerText: 'Orlando', isCorrect: false },
        { answerText: 'Tallahassee', isCorrect: true },
        { answerText: 'Miami', isCorrect: false },
        { answerText: 'Jacksonville', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Kentucky?',
      answerOptions: [
        { answerText: 'Frankfort', isCorrect: true },
        { answerText: 'Louisville', isCorrect: false },
        { answerText: 'Lexington', isCorrect: false },
        { answerText: 'Bowling Green', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Oregon?',
      answerOptions: [
        { answerText: 'Portland', isCorrect: false },
        { answerText: 'Ashland', isCorrect: false },
        { answerText: 'Eugene', isCorrect: false },
        { answerText: 'Salem', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='app'>
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
    </div>
  );
}
