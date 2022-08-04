console.log("working");
// Q1.

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter()); //1
alert(counter()); //2
alert(counter()); //3
alert(counter()); //4

// Q2.

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? // 1
  }
  console.log(count); // What is logged? // 0
})();


// Q3.

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged? // 3 after 3secs
//     }, 1000);
// }

// Q4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function Rec(){
    let length = 10;
    return function() {
    let breadth = 20;
    console.log(length * breadth);
};
}
let ar = Rec();
ar();

// Q5. Take a variable in outer function and create an inner function to increase the counter every time it is called

function outerFunction() {
    let count = 0;
    return function () {
      count = count + 1;
      console.log(count);
    };
}
  
let num = outerFunction();
num(); //1
num(); //2
num(); //3

// Q6. "Print Output"

var a = 12;
(function () {
  alert(a);
})(); //12 in an alert popup

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x(); //12 in an alert popup

// Q7. "Print Output"

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
Footer