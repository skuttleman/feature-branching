Number.prototype.isPrime = function() {
  for (var i = 2; i <= Math.sqrt(this); i ++)
    if (this % i === 0) return false;
  return true;
};

String.prototype.isPalindrome = function() {
  return this.toString() === this.reverse();
};

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
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
function newFunction(d1, d2) {
    return d1 + d2;

}
