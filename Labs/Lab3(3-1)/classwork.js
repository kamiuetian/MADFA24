/**normal function */
function sum_num(x, y) {
  return x + y;
}

/**Arrow function */
const sum_num_arrow = (x, y) => {
  return x + y;
};
/**Arrow function with one parameter */
const func_1param = (x) => {
  console.log(x);
};
/**Arrow function with single return statement */
const func_return = (x, y) => x + y;

const func_obj = () => {
  return { name: "kamran" };
};
//console.log(func_obj());

console.log(a);
var a = 6;
//console.log(a);
//called_func();
function called_func() {
  console.log("i am called");
}
/**Spread and rest operator */
function rest_param(...params) {
  console.log(params);
}
rest_param(1, 2);
rest_param(1, 2, 3, 4, 5);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(...arr3);
let student = { name: "Ali", reg: 34, uni: "CUI" };
let { name, uni, reg } = student;
console.log(reg);
