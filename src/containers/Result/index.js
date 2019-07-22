import { connect } from "react-redux";
import ResultCom from "../../components/Result";
function mapStateToProps(state) {
  return {
    value: state.Calculator.value,
    result: state.Calculator.result
  };
}
export default connect(mapStateToProps)(ResultCom);
