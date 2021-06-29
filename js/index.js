// ITERATION 1

function updateSubtotal(product) {
  // got elements by class and tag
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // console.dir(price);

  // variable for
  const subtotalPrice = price.innerHTML * quantity.value;
  // console.dir(subtotalPrice);
  // console.dir(quantity);

  const subtotal = product.querySelector('.subtotal');

  // extracted values
  // quantity.innerHTML = '';
  subtotal.innerHTML = subtotalPrice;

  return subtotalPrice;
}

// iteration 2

function calculateAll() {
  // getting all the classes name "product"
  // because it give us a node and that is an array we can use array methods like a forEach
  const getAllProducts = document.querySelectorAll('.product');
  // iteration 3
  let total = 0;
  getAllProducts.forEach((product) => {
    let subTotal = updateSubtotal(product);
    total += subTotal;
  });

  // using a ffor loop
  // total price
  // for (i = 0; allproductElement.lenth; i++){
  // subtotal +=UpdateSubtotal(allProductElement[i])

  const totalValue = document.getElementById('total-value');
  totalValue.innerHTML = `$${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
