import './calculator.css';
import PropTypes from 'prop-types';

const Calculator = ({ Children }) => (
  <div className="calc-wrapper">
    { Children }
  </div>
);

Calculator.propTypes = {
  Children: PropTypes.node.isRequired,
};

export default Calculator;
