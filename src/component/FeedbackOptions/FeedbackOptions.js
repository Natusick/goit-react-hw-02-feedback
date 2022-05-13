import PropsType from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.button__set}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropsType.func.isRequired,
};

export default FeedbackOptions;
