function abc(x) {
  function inner_func() {
    console.log("i am inner function");
  }
  //x();
  /**Return function */
  return inner_func;
}
/**assignemnt of fiunction to variables */
let xyz = abc;
let outer_func = function () {
  console.log("i am outer funtion");
};
/**passed function as argument */
let ret_value = xyz(outer_func);
ret_value();
