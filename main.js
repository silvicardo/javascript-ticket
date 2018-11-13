
// PROMPT DATA FROM USER
var age = prompt('What is your age again?');

var distance = prompt('How far are you going in Kilometers?');

//CONNECT TO HTML TAG
var priceTag = document.getElementById('priceTag');

//CALCULATES DEFAULT PRICE
var pricePerKilometer = 0.21;

var customerPrice = pricePerKilometer * distance;

//CALCULATES DISCOUNTED PRICE FOR ELIGIBLE CUSTOMERS

if (age > 65) {//OVER65 GETS 40% DISCOUNT
  customerprice = ((pricePerKilometer / 100) * 60) * distance;
} else if (age < 18) {//UNDER 18 GETS 20% DISCOUNT
  customerPrice = ((pricePerKilometer / 100) * 80) * distance;
}

//PASSES CUSTOMER PRICE
priceTag.innerHTML = customerPrice.toFixed(2);
