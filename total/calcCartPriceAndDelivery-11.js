const calcCartPriceAndDelivery = () => {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const priceElements = cartWrapper.querySelectorAll(".price__currency");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDelivery = document.querySelector("[data-cart-delivery]");

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

  //! 11 hide / show deliveryCost
  if (priceTotal > 0) {
    cartDelivery.classList.remove("none"); // 
  } else {
    cartDelivery.classList.add("none");
  }

  // 10  delivery cost
  if (priceTotal >= 100) {
    deliveryCost.classList.add("free"); // add free
    deliveryCost.innerHTML = "free"; // add text 'free'
  } else {
    deliveryCost.classList.remove("free"); // remove free
    deliveryCost.innerHTML = "10 €";   // add text '10 euro
  }
};
