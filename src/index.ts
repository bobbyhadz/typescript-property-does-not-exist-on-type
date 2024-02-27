export {};

// Property does not exist on type '{}' in TypeScript

// EXAMPLE 1 - Explicitly type the object to solve the error

// ✅ When you know property names ahead of time
type Employee = {
  id?: number;
  name?: string;
};

const obj: Employee = {};

obj.id = 1;
obj.name = 'Bobby Hadz';

// ---------------------------------------------------

// // EXAMPLE 2 - When you don't know ALL property names ahead of time

// // ✅ When you don't know ALL property names ahead of time
// type Employee = {
//   [key: string]: any; // 👈️ variable key
//   name: string;
// };

// const obj: Employee = {
//   name: 'Bobby Hadz',
// };

// obj.salary = 100;

// ---------------------------------------------------

// // EXAMPLE 3 - If you don't know the names of all keys but know the shape of the values

// type Employee = {
//   [key: string]: string | number;
//   name: string;
//   id: number;
// };

// const obj: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
// };

// obj.department = 'accounting';
// obj.salary = 100;

// ---------------------------------------------------

// // EXAMPLE 4 - Use the `any` type if you want to turn off type-checking

// const obj: any = {};

// obj.name = 'Bobby Hadz';

// obj.age = 30;

// console.log(obj); // 👉️ { name: 'Bobby Hadz', age: 30 }

// ---------------------------------------------------

// // Property does not exist on type Union in TypeScript

// // EXAMPLE 5 - Use a type guard to solve the error

// type Person = {
//   age: number;
// };

// type Employee = {
//   salary: number;
// };

// function getProperty(obj: Person | Employee): number {
//   if ('age' in obj) {
//     return obj.age;
//   }

//   return obj.salary;
// }

// ---------------------------------------------------

// // Property 'status' does not exist on type 'Error' in TS

// // EXAMPLE 6 - add the properties to the Error object

// export class CustomError extends Error {
//   status: number = 200;
//   code: number = 200;

//   constructor(message: string) {
//     super(message);

//     // 👇️ because we are extending a built-in class
//     Object.setPrototypeOf(this, CustomError.prototype);
//   }
// }

// const err = new CustomError('Something went wrong');

// err.status = 500;
// console.log(err.status);

// err.code = 500;
// console.log(err.code);
