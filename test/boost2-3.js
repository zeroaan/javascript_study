function solution(params) {
  const answer = [];
  const stack = [];
  const register = [null, null];

  params.forEach((param) => {
    if (param === "POPA") boost_pop(answer, stack, register, "A");
    else if (param === "POPB") boost_pop(answer, stack, register, "B");
    else if (param === "ADD") boost_add(answer, stack, register);
    else if (param === "SUB") boost_sub(answer, stack, register);
    else if (param === "PUSH0") boost_push(answer, stack, 0);
    else if (param === "PUSH1") boost_push(answer, stack, 1);
    else if (param === "PUSH2") boost_push(answer, stack, 2);
    else if (param === "PUSH3") boost_push(answer, stack, 3);
    else if (param === "SWAP") boost_swap(register);
    else if (param === "PRINT") boost_print(answer, stack);
    else boost_unknown(answer, stack);
  });

  return answer;
}

function boost_pop(answer, stack, register, type) {
  if (stack.length === 0) {
    answer.push("EMPTY");
    return;
  }

  const value = stack.pop();
  if (type === "A") register[0] = value;
  else if (type === "B") register[1] = value;
}

function boost_add(answer, stack, register) {
  if (register[0] === null || register[1] === null) {
    answer.push("ERROR");
    return;
  }

  const value = register[0] + register[1];
  boost_push(answer, stack, value);
}

function boost_sub(answer, stack, register) {
  if (register[0] === null || register[1] === null) {
    answer.push("ERROR");
    return;
  }

  const value = register[0] - register[1];
  boost_push(answer, stack, value);
}

function boost_push(answer, stack, num) {
  if (stack.length >= 8) {
    answer.push("OVERFLOW");
    return;
  }

  stack.push(num);
}

function boost_swap(register) {
  const temp = register[0];
  register[0] = register[1];
  register[1] = temp;
}

function boost_print(answer, stack) {
  if (stack.length === 0) {
    answer.push("ERROR");
    return;
  }

  const value = stack.pop();
  answer.push(String(value));
}

function boost_unknown(answer) {
  answer.push("UNKNOWN");
}

// --------------------------------------------------------------------------------------------------------

const an1 = ["PUSH1", "PUSH3", "POPA", "ADD", "PUSH2", "POPB", "ADD", "PRINT"];
const an2 = ["POPA", "PUSH1", "PUSH3", "PUSH2", "PUSH1", "PUSH3", "PUSH2", "PUSH1", "PUSH3", "PUSH3", "PUSH4"];

console.log(solution(an1));
console.log(solution(an2));
