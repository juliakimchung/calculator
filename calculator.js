var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var numOne = document.getElementById('numOne');
var numTwo = document.getElementById('numTwo');
var output = document.getElementById('output');


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function toMultiply(x, y) {
  var multiplyTwo = (x * y);
  console.log(multiplyTwo);
  //return multiplyTwo;
  outputToDom(multiplyTwo);
}
  
  
  /*Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function toAdd (x, y) {
  var addTwo = parseInt(x + y);
  console.log(addTwo);
  
  outputToDom(addTwo);
 }

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function toSubtract(x, y) {
  var subtractTwo = (x - y);
  console.log(subtractTwo);
  //return subtractTwo;
  outputToDom(subtractTwo);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function toDivide(x, y) {

  var divideTwo = x / y;
  console.log(divideTwo);
  outputToDom(divideTwo);
}



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function threeNumbers ( x, y, multiply) {

  return multiply(x, y);
}

function outputToDom(output) {

  var outputEl = document.getElementById('output');
 
    outputEl.innerHTML = "<p> Result is :" + output  + "</p>";
}

  
  // if(toAdd()) {
//   outputEl.innerHTML = '<p> result: ' + toAdd(input1, input2) + '</p>';

//   console.log(outputEl.innerHTML);
// }
// }


function determineCal(input1, input2, event) {
  
  
      if(add.id === event.target.id) {

         toAdd (input1, input2);
         
         //console.log(toAdd(input1, input2));
      } else if (subtract.id === event.target.id) {

        // console.log(input1, input2);

        toSubtract(input1, input2);

      } else if (multiply.id === event.target.id) {

        toMultiply(input1, input2);

      } else if (divide.id === event.target.id) {

        toDivide(input1, input2);
      } else { 
        //alert("please select");
      }

}

 function checkInput (event) {
   // console.log(event);
  // console.log(add.id);
  // console.log(event.target);

   if (numOne.value && numTwo.value) {

    determineCal(Number(numOne.value), Number(numTwo.value), event)

 } else {

    alert("please submit both numbers");
  }
   //console.log(numOne.value, numTwo.value);
 }


 add.addEventListener('click', checkInput);
 subtract.addEventListener('click', checkInput);
 multiply.addEventListener('click', checkInput);
 divide.addEventListener('click', checkInput);
 