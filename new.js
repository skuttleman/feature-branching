function factorial(x) {
  if (x < 1) throw 'Invalid Input';
  if (x <= 2) return x;
  else return x * factorial(x - 1);
}
