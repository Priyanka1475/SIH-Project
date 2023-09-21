import React from 'react'
import './career.css'
export default function Career() {
const questionsData = [
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    {
      question: 'What is Lorem Ipsum?',
      options: [
        'Lorem Ipsum is simply dummy text.',
        'Lorem Ipsum has been the industry\'s standard dummy text.',
        'It has survived not only five centuries.',
        'All of the above.',
      ],
    },
  
    
    // Add more questions here...
  ];


  return(
      <div className="quiz-container">
  <div className="heading-container">
     <h1>Lorem Ipsum</h1>
   </div>
   <form>
   
     {questionsData.map((question, index) => (
       <div key={index} className="question">
         <p>{`Question ${index + 1}: ${question.question}`}</p>
         <select name={`q${index}`}>
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

