function validParentheses(s) {
  const stack = [];

  const ar = s.split("");
  ar.forEach((ele) => {
    if (ele === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
    } else if (ele === "}") {
      if (stack[stack.length - 1] === "{") stack.pop();
    } else if (ele === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
    } else stack.push(ele);
  });

  if (stack.length === 0) return true;
  return false;
}

console.log(validParentheses("(}"));
