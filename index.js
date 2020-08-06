// Your code here

function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
  return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(string="*") {
  return function(adjective="special") {
    return `You are ${string}${adjective}${string}!`
  }
}

wrapAdjective()("a dedicated programmer");

let Calculator = {
  function (add) {
    return 1 + 3;
  }
};
