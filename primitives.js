// primitives
// . Number('0x77') === 0x77  // false
// . Number('077') === 077   // false
// . Number(' 12')  //  12
// . isNaN(' ')    // false
// . 0 === +0     // true
// . +0 === -0   // true
// . 1 / '2'    // 0.5
// . 1 / 0     // infinity
// . 0 / 0    // NaN
// . +true   // 1
// . +false // 0
// . +null        // NaN
// . +undefined  // NaN

console.log(Number("0x77") === 0x77); //true
console.log(Number("077") === 077);
console.log(Number(" 12"));
console.log(isNaN(" "));
console.log(0 === +0);
console.log(+0 === -0);
console.log(1 / "2");
console.log(1 / 0);
console.log(0 / 0);
console.log(+null); // 0
console.log(+undefined);

