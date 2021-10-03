import style from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          className={style.btn}
          type="button"
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  handleClick: PropTypes.func,
  options: PropTypes.node.isRequired,
};

export default FeedbackOptions;
