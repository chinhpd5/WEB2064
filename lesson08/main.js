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

console.log(chinhPerson.name);
console.log(chinhPerson.age);
console.log(chinhPerson.gender);
console.log(chinhPerson.id);

chinhPerson.getInfo();

