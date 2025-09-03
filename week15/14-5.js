//기본
// const object = {
//   a: 1,
//   b: 2
// };

//문제01
// console.log(object.a, object.b);
// const { a, b } = object;
// console.loga(a, b);
// const { c, d } = object;
// console.loga(c, d);

//문제02
// function prinitparam({ a, b }) {//파라미터 비구조화할당
//   console.log(a, b);
// }
// prinitparam(object);

//문제3
const object = {
  a: 1
};
const { a, b = 2 } = object;
console.log(a, b);
console.log(object.a, object.b);
const animal = {
  name: "멍멍이",
  type: "개"
}
const { name: nickname } = animal;
console.log(name, nickname);

const id = 1;
const product = "구두";

const goods = {
  id: id,
  product: product
}
const goods2 = {
  id,
  product
}

console.log(goods2);