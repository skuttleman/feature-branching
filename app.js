function MyObject() {};


MyObject.prototype.isPrime = function(x) {
  for (var i = 2; i <= Math.sqrt(x); i ++)
    if (x % i === 0) return false;
  return true;
};

MyObject.prototype.isPalindrome = function(str) {
  return str === str.split('').reverse().join('');
};

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

function myFunction(p1, p2) {
    return p1 * p2;
}

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};
