# OOP trong JavaScript

## Khái niệm
Lập trình hướng đối tượng (`OOP`) là phương pháp tổ chức mã nguồn dựa trên đối tượng (object) — bao gồm dữ liệu (thuộc tính) và hành vi (phương thức).
> JavaScript sử dụng `class` để tạo đối tượng

Sự khác nhau giữa `class` và `object`
| Tiêu chí           | `class`                                        | `object`                                    |
| -------------------| ---------------------------------------------- | ------------------------------------------- |
|  **Khái niệm**     | Là **khuôn mẫu** (blueprint) tạo ra đối tượng  | Là **thể hiện cụ thể** (instance) của class |
|  **Tạo ra bằng**   | Từ khóa `class`                                | Từ `new Class()` hoặc `{}`                  |
|  **Chứa gì?**      | Các **thuộc tính, phương thức định nghĩa sẵn** | Các **giá trị cụ thể**, dùng được ngay      |
|  **Sử dụng để...** | Tái sử dụng cấu trúc đối tượng                 | Thực hiện công việc cụ thể                  |
|  **Số lượng**      | 1 class → nhiều object                         | Mỗi object là 1 thực thể                    |

---
## Các tính chất của class

### Tính đóng gói - Encapsulation
Là việc gộp dữ liệu (`thuộc tính`) và hành vi (`phương thức`) của đối tượng vào cùng một khối (`class`)

```js
class Person {
  #cccd; // private

  constructor(name, age, gender, cccd) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.#cccd = cccd;
  }

  getInfo() {
    console.log(`Xin chào, tôi tên là: ${this.name}, ${this.age} tuổi, giới tính: ${this.gender ? 'Nam' : 'Nữ'}.`);
  }

  getCccd() {
    console.log(`Số căn cước công dân: ${this.#cccd}`)
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Tạo đối tượng
const person1 = new Person("Hà", 22, false, "123456");

// Sử dụng thuộc tính
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.cccd);

// Sử dụng phương thức
person1.getInfo(); 
console.log(person1.isAdult());
```

### Tính kế thừa - Inheritance
Kế thừa cho phép một class con (`subclass`) sử dụng lại thuộc tính và phương thức của class cha (`superclass`) mà không cần viết lại.
> Trong JS, dùng từ khóa **extends** để kế thừa.

```js
class Student extends Person {
  constructor(name, age, gender, cccd, className, mark) {
    super(name, age, gender, cccd); // Gọi constructor cha
    this.className = className;
    this.mark = mark;
  }

  getRank() {
    if (this.mark >= 8) return 'Giỏi';
    if (this.mark >= 6.5) return 'Khá';
    if (this.mark >= 5) return 'Trung bình';
    return 'Yếu';
  }

  // Ghi đè phương thức getInfo()
  getInfo() {
    super.getInfo(); // Gọi lại getInfo() của Person
    console.log(`Là sinh viên lớp: ${this.className}, điểm: ${this.mark}, xếp loại: ${this.getRank()}`);
  }
}

// Khai báo
const sv1 = new Student("Hà", 19, false, "0123456789", "WD20123", 8.2);

sv1.getInfo();
```

### Tính đa hình - Polymorphism
Đa hình là khả năng cho phép nhiều đối tượng khác nhau có thể sử dụng cùng một phương thức, nhưng cách thực thi lại khác nhau.

```js
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  getInfo() {
    console.log(`Tôi là giảng viên ${this.name}, dạy môn ${this.subject}`);
  }
}


```