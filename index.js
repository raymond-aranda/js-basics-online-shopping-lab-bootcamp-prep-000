var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`);

  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
    return;
  }

  var itemsAndPrices = [];

  for (var i = 0, l = cart.length; i < l; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }
  if(cart.length === 1){
    console.log(`In your cart, you have ${itemsAndPrices}.`)
  } else if (cart.length === 2){
    console.log(`In your cart, you have ${itemsAndPrices.join(" and ")}.`)
  } else {
    itemsAndPrices[itemsAndPrices.length-1] = `and ${itemsAndPrices[itemsAndPrices.length-1]}`
    console.log(`In your cart, you have ${itemsAndPrices.join(", ")}.`)
  }
}

function total() {
  var sum = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    var item = Object.keys(cart[i])[0];
    sum += cart[i][item];
  }

  return sum
}

ffunction removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;

      cart = cart.slice(0, 0).concat(cart.slice(0 + 1));
      l--

      console.log(cart)
    }
  }

  if (itemInCart = false) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
