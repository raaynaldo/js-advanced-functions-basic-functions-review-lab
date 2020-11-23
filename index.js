// Your code here
function saturdayFun(str = "roller-skate") {
  return `This Saturday, I want to ${str}!`;
}

const mondayWork = function (str = "go to the office") {
  return `This Monday, I will ${str}.`;
};

const wrapAdjective = function (wrap = "*") {
  const result = function (str) {
    return `You are ${wrap}${str}${wrap}!`;
  };
  return result;
};

let Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

const actionApplyer = function (num, arrFunc) {
  let a = num;

  arrFunc.forEach((func) => {
    a = func(a);
  });

  console.log({arrFunc})
  console.log({a})
  return a;
};
