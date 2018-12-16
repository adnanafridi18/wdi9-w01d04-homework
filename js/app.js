// Verbal questions

//Q1
//Parameter is variable in the declaration of function.
//Argument is the actual value of this variable that gets passed to function.

//Q2
//console.log will display the parameter passed to the log method in the console window. 
//Use this method to display a string or variable in the console window.
//You can use the console class in your code as well, much like we can use JavaScript alerts.

//<script type = "text/javascript"> 
 //   function tryConsole() { 
  //      console.log("hello world"); 
  //  } 
//</script>
//When using the return statement, the function will stop executing, and return the specified value.

//Q3
//when you use return, it keeps the value on the variable but does not print anything on  console. 
//console.log prints the result but does nothing else

// palindrome again

function checkPalindrome(word){
    const drow = [...word].reverse().join('');
    return drow === word;
}
console.log(checkPalindrome) = ('radar');
console.log(checkPalindrome) = ('borsht');

// Digit sum
function sumDigits(n) {
    var sum = 0;
    var string = n.toString();
    for(i=0; i < string.length; i++){
        sum = sum + parseInt(string.substring(i, i+1));
    }
    return sum;
}
console.log(sumDigits(3894));

//Pytagoras]

const calculateSide = (sideA, sideB) => {8
    return Math.hypot(sideA, sideB);
}

console.log(calculateSide(8, 6));

//Sum Array
function sumArray() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 
console.log(sumDigits(4654));    

//Prime Numbers
 function checkPrime (num){
     for(let i = 0; i <= Math.sqrt(num); i++){
         if(num % i === 0) {
             return false;
         }
         else { 
             return true;
         }
         }
     }
 console.log(checkPrime);
    

