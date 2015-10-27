Number.prototype.factorial = function() {
  if (this < 1) throw 'Invalid Input';
  if (this <= 2) return Number(this);
  else { return this * (this - 1).factorial(); }
}
