class Person {
  #id;
  // thuộc tính
  constructor(id,name, age, gender){
    // public
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.#id = id
  }

  // phương thức
  getInfo(){
    console.log(`id: ${this.#id}. Tôi tên là ${this.name}, Tuổi: ${this.age}, Giới tính: ${this.gender ? 'Nam':'Nữ'}`);
  }

  isAdult(){
    return this.age >= 18
  }
}

const chinhPerson = new Person(1,'chinhpd5', 20, true);

console.log(chinhPerson.name);
console.log(chinhPerson.age);
console.log(chinhPerson.gender);
console.log(chinhPerson.id); // undefined

chinhPerson.getInfo();
