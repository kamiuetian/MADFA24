/**Numbers */
let x = 5;
let y = 10.0;
console.log(typeof x, typeof y);
/**String */
let s = "5";
console.log(typeof s);
/**Arrays */
let a = [1, 2, 3, 4];
console.log(typeof a);
/**Operations */
let n = "6";
let m = 6;
console.log(n * m);
/** undefined*/
let u;
console.log(typeof u);
u = null;
console.log(typeof u);
/**Arrays */
let arr = [[1, "a", 2, "b", 3, "c"], []];
let length = arr.length;
console.log(arr[1]);
/**Objects
 * a collection os key:value pairs
 */
let obj_student = {
  name: "Ali",
  reg: 13,
  address: "attock",
  gpa: [1, 2, 3, 4, 5],
};
/**access onject property */
console.log(obj_student.name, obj_student["reg"]);
/**Functions */
function func1(x, y) {
  return x + y;
}
let result=func1(5, 6);
