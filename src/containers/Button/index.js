import { connect } from "react-redux";
import ButtonCom from "../../components/Button";

function mapStateToProps(state) {
  return {};
}
function mapDisptachToProps(dispatch) {
  return {
    character: character => dispatch({ type: "character", character }),
    num: num => dispatch({ type: "num", num }),
    point: () => dispatch({ type: "point" }),
    AC: () => dispatch({ type: "AC" }),
    DEL: () => dispatch({ type: "DEL" }),
    inverse: () => dispatch({ type: "inverse" }),
    result: () => dispatch({ type: "result" })
  };
}
export default connect(
  mapStateToProps,
  mapDisptachToProps
)(ButtonCom);
