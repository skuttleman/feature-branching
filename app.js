function MyObject() {};

MyObject.prototype.isPrime = function(x) {
  for (var i = 2; i < Math.sqrt(x); i ++)
    if (x % i === 0) return false;
  return true;
};
