const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const test = (a, b) => add(a, b) / sub(a, b);

// module.exports = test;

// module.exports = {
//   test,
//   add,
//   sub,
//   div,
// };

module.exports.add = add;
module.exports.sub = sub;
module.exports.div = div;
module.exports.test = test;
// console.log(module);
