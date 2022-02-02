import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../../data/FeedbackData";
import FeedbackHeader from "../FeedbackHeader";
import FeedbackList from "../FeedbackList";
import FeedbackStats from "../FeedbackStats";
import FeedbackForm from "../FeedbackForm";

const Feedback = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <FeedbackHeader bgColor={"#aaccaf"} />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default Feedback;
