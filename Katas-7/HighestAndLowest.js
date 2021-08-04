function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

/*

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

*/