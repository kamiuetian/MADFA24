/**Objects */
let obj = {
  name: "ali",
  reg: "BSE-02",
  display: function () {
    console.log(obj.name);
  },
};
console.log(obj);
obj.age = 25;
delete obj.name;
console.log(obj);
//console.log(obj.name, obj["reg"]);
let my_obj_func = obj.display;
//my_obj_func();
let x = 123;
let x_obj = new Number(123);
console.log(typeof x_obj);

/**Constructor function */
function Student(name, reg) {
  this.name = name;
  this.reg = reg;
}
let std1 = new Student("ali", "01");
let std2 = new Student("amir", "02");
std1.cr = true;
console.log(std1.cr, std2.name);
