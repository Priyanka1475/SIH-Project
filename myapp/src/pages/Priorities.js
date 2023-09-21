import React, { useState } from 'react';
import './your-css-file.css'; // Replace with the path to your CSS file

const questionsData = [
  {
    question: 'Question 1: What is Lorem Ipsum?',
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
    ],
  },
  {
    question: 'Question 2: What is React?',
    options: [
      'Option A',
      'Option B',
      'Option C',
      'Option D',
    ],
  },
  {
    question: 'Question 3: What is CSS?',
    options: [
      'Option X',
      'Option Y',
      'Option Z',
    ],
  },
  {
    question: 'Question 4: What is JavaScript?',
    options: [
      'Option Alpha',
      'Option Beta',
      'Option Gamma',
      'Option Delta',
      'Option Epsilon',
    ],
  },
];

function QuizForm() {
  const [answers, setAnswers] = useState([]);

  const handleSelectChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Answers:', answers);
  };

  return (
    <div className="quiz-container">
      <div className="heading-container">
        <h1>Quiz Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {questionsData.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            <select
              name={`q${index}`}
              value={answers[index] || ''}
              onChange={(e) => handleSelectChange(e, index)}
            >
              <option value="">Select an option</option>
              {question.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default QuizForm;
import React, { useState } from 'react';
import './your-css-file.css'; // Replace with the path to your CSS file

const questionsData = [
  {
    question: 'Question 1: What is Lorem Ipsum?',
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
    ],
  },
  {
    question: 'Question 2: What is React?',
    options: [
      'Option A',
      'Option B',
      'Option C',
      'Option D',
    ],
  },
  {
    question: 'Question 3: What is CSS?',
    options: [
      'Option X',
      'Option Y',
      'Option Z',
    ],
  },
  {
    question: 'Question 4: What is JavaScript?',
    options: [
      'Option Alpha',
      'Option Beta',
      'Option Gamma',
      'Option Delta',
      'Option Epsilon',
    ],
  },
];

function QuizForm() {
  const [answers, setAnswers] = useState([]);

  const handleSelectChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Answers:', answers);
  };

  return (
    <div className="quiz-container">
      <div className="heading-container">
        <h1>Quiz Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {questionsData.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            <select
              name={`q${index}`}
              value={answers[index] || ''}
              onChange={(e) => handleSelectChange(e, index)}
            >
              <option value="">Select an option</option>
              {question.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default QuizForm;
