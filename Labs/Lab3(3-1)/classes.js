class Student {
  constructor(name, reg) {
    this.name = name;
    this.reg = reg;
  }
  get getName() {
    return this.name;
  }
  set setName(n) {
    this.name = n;
  }
  /**disply student */
  display() {
    console.log("My name is: " + this.name);
  }
}
class CSStudent extends Student {
  constructor(name, reg, fypTitle) {
    /*this.name = name;
    this.reg = reg;*/
    super(name, reg);
    this.fypTitle = fypTitle;
  }
  display() {
    console.log("My reg no is:" + this.reg);
  }
}

let std1 = new Student("Ali", 23);
std1.getName;
//std1.setName("abc")
std1.setName = "abc";
let csstd = new CSStudent("amir", 30, "ABC");
csstd.display();
std1.display();
/** */
let result = await fetch("");
