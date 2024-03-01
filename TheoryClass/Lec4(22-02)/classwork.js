let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**Map */
function squarer(x) {
  return x ** 2;
}
let result = arr.map(squarer);
//console.log(result);
/**Filter */
function my_filter(x) {
  if (x > 4) {
    return true;
  } else return false;
}
let result_filter = arr.filter(my_filter);
//console.log(result_filter);
/**reduce */
function sum_arr(x, y) {
  return x + y;
}
/**
 * (1,2) (100,1)
 * (3,3) (101,2)
 * (6,4)
 */
let result_reduce = arr.reduce(sum_arr);
//console.log(result_reduce);
/**Negative indexs */
arr[-1]; //length-1
