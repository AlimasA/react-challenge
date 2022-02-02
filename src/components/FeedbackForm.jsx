import React, { useState } from "react";
import Card from "./shared/Card";
import { Button } from "react-bootstrap";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = ({ target }) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    handleAdd(newFeedback);

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate this Project?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Write a review"></input>
          <Button type="submit" disabled={btnDisabled} variant="primary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
