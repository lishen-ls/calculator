import { state, character, num, point, AC, DEL, inverse, result } from "./init";
import createReaducers from "../createReducer";
export default createReaducers(state, {
  character: character,
  num: num,
  point: point,
  AC: AC,
  DEL: DEL,
  inverse: inverse,
  result: result
});
