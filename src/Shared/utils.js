export function getCurrentDate() {
  return new Date();
}

export function isNaturalNumber(n) {
  n = n.toString();
  var n1 = Math.abs(n),
    n2 = parseInt(n, 10);
  return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}
