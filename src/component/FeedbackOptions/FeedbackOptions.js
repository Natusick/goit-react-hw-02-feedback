import PropsType from "prop-types";
import styled from "styled-components";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Wrapper>
      <Button onClick={() => onLeaveFeedback("good")}>Good</Button>
      <Button onClick={() => onLeaveFeedback("neutral")}>Neutral</Button>
      <Button onClick={() => onLeaveFeedback("bad")}>Bad</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

const Button = styled.button`
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 15px 2px 15px;
  margin: 0px 15px 10px 0px;
  background-color: white;
  border: 1px solid rgba(97, 95, 95, 0.3);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.18),
    2px 1px 2px 0px rgba(0, 0, 0, 0.08), 2px 2px 2px 0px rgba(0, 0, 0, 0.18),
    2px 2px 2px 0px rgba(0, 0, 0, 0.18);
`;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropsType.func.isRequired,
};

export default FeedbackOptions;
