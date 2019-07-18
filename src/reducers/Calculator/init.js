export let state = {
  value: ["0"],
  cache: [],
  result: ""
};

export function character(state, action) {
  let newValue;
  if (state.cache.length === 0) {
    newValue = [...state.value];
  } else {
    newValue = [...state.cache];
  }
  if (
    action.character === "%" &&
    !isNaN(Number(newValue[newValue.length - 1]))
  ) {
    newValue[newValue.length - 1] = (
      newValue[newValue.length - 1] / 100
    ).toString();
    return {
      ...state,
      cache:[],
      value: newValue
    };
  }
  if (isNaN(Number(newValue[newValue.length - 1]))) {
    return {
      ...state,
      value: newValue
    };
  }
  return {
    ...state,
    cache:[],
    value: newValue.concat(action.character)
  };
}
export function num(state, action) {
  let newValue;
  if (state.cache.length === 0) {
    newValue = [...state.value];
  } else {
    newValue = ["0"];
  }
  let overNum = newValue[newValue.length - 1];
  if (overNum.length >= 20) {
    return state;
  }
  if (isNaN(Number(overNum))) {
    newValue = newValue.concat("0");
  }
  if (newValue[newValue.length - 1] === "0") {
    newValue[newValue.length - 1] = action.num;
  } else {
    newValue[newValue.length - 1] += action.num;
  }
  return {
    ...state,
    cache: [],
    value: newValue
  };
}
export function point(state) {
  let newValue = [...state.value];
  if (newValue[newValue.length - 1].length >= 20) {
    return state;
  }
  if (newValue[newValue.length - 1].indexOf(".") === -1) {
    newValue[newValue.length - 1] += ".";
  }
  return {
    ...state,
    value: newValue
  };
}
export function AC() {
  return {
    value: ["0"],
    cache: [],
    result: ""
  };
}
export function DEL(state) {
  let newValue = [...state.value];
  let overNumLength = newValue[newValue.length - 1].length;
  newValue[newValue.length - 1] = newValue[newValue.length - 1].slice(
    0,
    overNumLength - 1
  );
  if (newValue.length === 1 && newValue[0] === "")
    newValue[newValue.length - 1] = "0";
  if (newValue.length !== 1 && newValue[newValue.length - 1] === "")
    newValue.pop();
  return {
    ...state,
    value: newValue
  };
}
export function inverse(state) {
  let newValue;
  let cache = [...state.cache];
  if (cache.length === 0) {
    newValue = [...state.value];
  } else {
    newValue = [...cache];
    cache[0] = -cache[0].toString();
  }
  let overNum = newValue[newValue.length - 1];
  if (isNaN(Number(overNum))) {
    return state;
  }
  overNum = (-overNum).toString();
  newValue[newValue.length - 1] = overNum;
  return {
    ...state,
    cache:[],
    value: newValue
  };
}
export function result({ value, cache, result }) {
  let output = [];
  let characterStack = (function() {
    let stack = [];
    return {
      push(item) {
        stack.push(item);
      },
      pop() {
        return stack.pop();
      },
      arr() {
        return stack;
      },
      top() {
        return stack[stack.length - 1];
      },
      length() {
        return stack.length;
      }
    };
  })();
  let calcStack = (function() {
    let stack = [];
    return {
      push(item) {
        stack.push(item);
      },
      pop() {
        return stack.pop();
      },
      calc(type) {
        let first = Number(stack[stack.length - 2]);
        let second = Number(stack[stack.length - 1]);
        this.pop();
        this.pop();
        switch (type) {
          case "+":
            return first + second;
          case "-":
            return first - second;
          case "*":
            return first * second;
          case "/":
            return first / second;
          default:
        }
      },
      result() {
        return Number(stack[0]);
      }
    };
  })();
  let newValue = value;
  let level = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
  };
  //中缀转后缀
  if (isNaN(Number(newValue[newValue.length - 1]))) {
    newValue.pop();
  }
  for (let item of newValue) {
    if (!isNaN(Number(item))) {
      output.push(item);
    } else {
      if (characterStack.length() === 0) {
        characterStack.push(item);
      } else {
        while (level[item] <= level[characterStack.top()]) {
          output.push(characterStack.pop());
        }
        characterStack.push(item);
      }
    }
  }
  output = output.concat(characterStack.arr().reverse());
  //后缀表达式计算
  for (let item of output) {
    if (!isNaN(Number(item))) {
      calcStack.push(item);
    } else {
      calcStack.push(calcStack.calc(item));
    }
  }
  result = calcStack.result();
  cache.push(result);
  return {
    value,
    cache,
    result
  };
}
