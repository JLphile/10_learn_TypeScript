const message: 'Hello World' = 'Hello World';

// 字面量类型的意义，就是必须结合联合类型使用
type Alignment = 'left' | 'right' | 'center';
let align: Alignment = 'left';
align = 'center';
align = 'right';

// align='up'
export {};
