function moneyCoins (money) {
  // Start Code Here

}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

function moneyCoins(amount, array) {

  var results = [],
     result = [],
     total = 0;

  if (array.length === 0) {
     return results;
  }

  if (amount <= 0) {
     return 'Enter an amount';
  }

  for (var i = 0; i < array.length; i++) {

     return coin(amount, array.slice(1));
  }

}
