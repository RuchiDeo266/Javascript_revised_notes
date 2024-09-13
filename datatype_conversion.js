let score = "90";
// convert into number
let number_score = Number(score);
console.log(number_score, typeof number_score);

let s_null = null;
let s_undef = undefined;
let str = " name";

// console.log("null convertion to number", Number(s_null));
// console.log("undefined conversion", Number(s_undef));
// console.log("str convertion string", Number(str));

// "33" => 33
// "33abc" => NaN
// "null" => NaN
// true=> 1 , false=> 0

let num_one = 1;
let boolean_1 = Boolean(num_one);

let name_me = "deo";
let boolean2 = Boolean(name_me);

let empty_str = "";
let boolean_3 = Boolean(empty_str);

// 1 -> true
// 2 -> false
// "" -> false
// "name" -> true

// console.log(boolean_1, boolean2, boolean_3);

// convert into string :

let number_eg = 23;
let str_number = String(number_eg);
console.log(typeof str_number, str_number);

// ********* Operations *********

let val = 3;
let neg_val = -val;
console.log(neg_val);

// concat string
let str1 = "op";
let str2 = " solutions";

console.log(str1 + str2);

console.log("1" + 2);
console.log(2 + "2");
console.log(1 + 2 + "3");
// 12
// 22
// 33

console.log(+true); // 1
// console.log(true+); //  not expected

console.log(+""); //1

// post-fix and post-fix
/**
 *
  If used postfix, with operator after operand (for example, x++), the    increment operator increments and returns the value before incrementing.

  If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

  Important:
  " ++x itself evaluates to a value ,not a reference,
  so you cannot chain multiple increment operators together."
  Increment operator can only be applied on operands that are references those are variables and object properties.

  ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation


 */
