const pow = (a: number, b: number) => {
  return Math.pow(a, b);
};

const powAsString = (a: number, b: number): string => {
  return Math.pow(a, b).toString();
};

const consolePow = (a: number, b: number): void => {
  console.log(Math.pow(a, b));
};

console.log('pow', pow(2, 3));
console.log('powAsString', powAsString(2, 3));
consolePow(2, 3);