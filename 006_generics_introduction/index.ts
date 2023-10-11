const integerArray: number[] = [1, 2, 3];
const stringArray: string[] = ['One', 'Two', 'Three'];

const a = integerArray.pop();
const b = stringArray.pop();

console.log('a type', typeof a); // <- returns 'number'
console.log('b type', typeof b); // <- returns 'string'

const p1 = Promise.resolve("HELLO!");
const p2 = Promise.resolve(123);

(async () => {
  const c = await p1;
  const d = await p2;
})();

const identity = (input: any): any => {
  return input;
};

const result = identity('some string');

const identity2 = <Type>(input: Type): Type => {
  return input;
};

const result2 = identity2<string>('another string');
const result3 = identity2('some other string');