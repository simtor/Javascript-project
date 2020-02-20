var arr = [];
var username = [];
var code = [];
var round_list = [];



/*var integer = parseInt(prompt("Enter something"));

if (isNaN(integer)) {
  console.log("You didn't enter a number");
  var integer = parseInt(prompt("Enter something"))
} else {
  console.log(`You entered the number ${integer}`);
  arr.push(integer);
  console.log(arr);
  console.log("Hi " + integer );
}*/

var name = prompt("What is your name?");
console.log(`Your name is ${name}`);
for (var i = 0; i < name.length; i++) {
  username.push(name); 
  let codeSum = 0;
  for (var i = 0; i < name.length; i++) {
    let currentCode = name.charCodeAt(i)
    codeSum = codeSum + currentCode;
    code.push(name.charCodeAt(i));
    if (name.charCodeAt(i)> 48 && name.charCodeAt(i) < 57) {
      alert("Numbers are not allowed!");
     var name = prompt("What is your name?");
    }
  }  
  console.log(`Code Sum: ${codeSum}`);
}

console.log(username);
console.log(code);


var new_list = code.map(Math.sqrt);
console.log(new_list);
var round_list = new_list.map(Math.round);
console.log(round_list);
    let roundSum = 0;
    for (var i = 0; i < new_list.length; i++) {
      let currentCode = new_list(i)
      roundSum = roundSum + currentCode;
      console.log(roundSum);
}

     
/*
var round_list = Math.round(new_list);
  for (var i = 0; i < new_list.length; i++) {
    round_list.push(new_list); 
    console.log(round_list);
}
*/