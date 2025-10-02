class Person{
  #id; // thuộc tính: private
  constructor(id, name, age, gender){
    // thuộc tính: public
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.#id = id
  }

  getInfo(){
    console.log(`${this.#id}. Họ và tên: ${this.name}, tuổi: ${this.age}. giới tính: ${this.gender? 'Nam': 'Nữ'}`);
  }

  isAdult(){
    return this.age >= 18;
  }
}

const chinhPerson = new Person(1,'chinhpd5',20,true);

// console.log(chinhPerson.name);
// console.log(chinhPerson.age);
// console.log(chinhPerson.gender);
// console.log(chinhPerson.id);

// chinhPerson.getInfo();

// tính kế thừa

class Student extends Person{

  constructor(id, name, age, gender, className, mark){
    super(id, name, age, gender);

    // thuộc tính mới
    this.className = className;
    this.mark = mark
  }

  // phương thức mới
  getRank(){
    if(this.mark >= 9) return 'Giỏi'
    else if(this.mark >= 7) return 'Khá'
    else if(this.mark >= 5) return 'Trung bình'
    else return 'Yếu'
  }

  getInfo(){
    // super.getInfo();
    console.log(`sinh viên: ${this.name}, học lớp: ${this.className}, học lực: ${this.getRank()}`);
  }
}

const chinhStudent = new Student(2,'chinhpd6', 21, false, 'WD20309', 8);

console.log(chinhStudent.className);
console.log(chinhStudent.mark);
console.log(chinhStudent.name);

console.log(chinhStudent.getRank());
chinhStudent.getInfo()


