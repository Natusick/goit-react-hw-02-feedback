import PropsType from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropsType.number.isRequired,
  neutral: PropsType.number.isRequired,
  bad: PropsType.number.isRequired,
  total: PropsType.number.isRequired,
  positivePercentage: PropsType.number.isRequired,
};

export default Statistics;
