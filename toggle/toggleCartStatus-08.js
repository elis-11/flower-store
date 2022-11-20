const toggleCartStatus = () => {
  console.log("toggleCartStatus");

  // find cart-wrapper
  const cartWrapper = document.querySelector(".cart-wrapper");

  const cartEmptyBadge = document.querySelector('[data-cart-empty]')

  // check quantity of elements   // length
  console.log(cartWrapper.children.length);

  if (cartWrapper.children.length > 0) {
    console.log("full");
    cartEmptyBadge.classList.add('none')   // hide 'cart empty'
  } else {
    console.log('empty');
    cartEmptyBadge.classList.remove('none')
  }
};
