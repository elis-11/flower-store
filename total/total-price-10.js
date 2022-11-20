const calcCartPrice = () => {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const priceElements = cartWrapper.querySelectorAll(".price__currency");
  const totalPriceEl = document.querySelector(".total-price");

  // price total
  let priceTotal = 0;

  // find price all products in cart
  priceElements.forEach((item) => {
    // find amount of products
    const amountEl = item.closest(".cart-item").querySelector("[data-counter]");

    // product price + total price
    priceTotal += parseInt(item.innerHTML) * parseInt(amountEl.innerHTML);

    console.log(priceTotal);
  });

  // show price on screen
  totalPriceEl.innerHTML = priceTotal;
};
