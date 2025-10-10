# Modules

`Module` là một file JavaScript có phạm vi riêng (`module scope`) để đóng gói biến/hàm/lớp và tái sử dụng qua `import`/`export`

> Lưu ý thêm <script type="module" src=""></script>

## Export / Import

### export - Xuất nhiều biến/hàm/lớp
Xuất nhiều biến/hàm/lớp trong 1 module

```js
// math.js
export const PI = 3.14;
export function add(a, b) { return a + b; }
export class Circle {}
```

```js
// main.js
import { PI, add, Circle } from './math.js';
// hoặc có thể đổi tên
import { add as sum } from './math.js';
```

### export default - Xuất một giá trị chính

Chỉ xuất một giá trị chính trong 1 `module`
```js
// math.js
export default function logger(msg) {
  console.log("Message: ", msg);
}
```

```js
// main.js
import logger from './math.js';
// hoặc
import myLogger from './math.js';
```