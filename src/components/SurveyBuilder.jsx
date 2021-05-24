import React, { useState } from "react";
import SurveyTitle from "./SurveyTitle";
import SurveyQuestion from "./SurveyQuestion";
import { useInputValue } from "../hooks";
import Question from "../models/Question";
import ListController from "../controllers/ListController";

import "../styles.css";

export default function SurveyBuilder({closeSurvey}) {
  const [title, handleChangeTitle] = useInputValue("New Survey");
  const [questions, setQuestions] = useState([
    new Question({
      text: "What's your favorite color?",
      options: ["Blue", "Orange", "White", "Purple"]
    })
  ]);

  const listController = new ListController(questions, setQuestions);

  return (
    <div className="small-container">
      <SurveyTitle title={title} handleChangeTitle={handleChangeTitle} />

      <ol>
        {questions.map((question, i) => (
          <SurveyQuestion
            key={question.id}
            question={question}
            setQuestion={question => listController.set(i, question)}
            removeQuestion={() => listController.remove(i)}
            moveQuestionUp={() => listController.moveUp(i)}
            moveQuestionDown={() => listController.moveDown(i)}
          />
        ))}
      </ol>
      <button onClick={() => listController.add(new Question())}>
        <i className="fas fa-plus icon" />
        Add Question
      </button>
      <button onClick={() => {closeSurvey()}}>
        <i className="fas fa-close icon" />
        Close Survey
      </button>
    </div>
  );
}
