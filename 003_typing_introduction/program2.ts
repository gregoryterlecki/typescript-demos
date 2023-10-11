const user: any = { // <- using type `any` is bad practice; if you can, create a custom type for this. Custom types are covered in the next section.
  age: 23,
  name: 'John',
  isActive: false,
};

console.log('user', user);

let number = 23;

let number2: number = 23; // <- technically this redundant, since assigning a typed literal at declaration implicitly types the variable.

const nameList: string[] = [ // <- [] used to annotate array types.
  'Jennifer',
  'Christy',
  'Farquad'
];

type MyTuple = [number, number, string, boolean?];

const tupleInstance: MyTuple = [23, 23, "Hello?"];
const tupleInstance2: MyTuple = [23, 23, "Hello?", false];