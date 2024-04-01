import {useState} from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Question from "./components/question";
import Result from "./components/result";

function App() {
  //we have array of qts so to display one qts at a time
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // Keep all of the logic in App.jsx
  
  //handlenextquestion= its going to handle the logic 
  //whenever a option is clicked it is saved and its going to also route the user to the next qts
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  
  return (
    <div className="App">
      <h1>World Quiz</h1>

      {/* Questions Component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Result Component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
