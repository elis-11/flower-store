// add listener on the entire window - na vsöm okne
window.addEventListener("click", (event) => {
  let counter; // declare a variable for the counter

  // check if click passed to 'plus' or 'minus'
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper"); // find parent of the clicked-element
    counter = counterWrapper.querySelector("[data-counter]"); // find data-counter
  }

  // event-z.2  target-zel  dataset-all buttons plus action-click

  // check if the element is button Plus
  if (event.target.dataset.action === "plus") {
    counter.innerHTML = ++counter.innerHTML; // add 1 item to the cart
  }

  // check if the element is button Minus
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerHTML) > 1) {
      counter.innerHTML = --counter.innerHTML; // - 1 item to the cart

      // 07 check prod in cart
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerHTML) === 1
    ) {
      console.log(" in cart");
      // 07 delete prod
      event.target.closest(".cart-item").remove();

      // 08 show cart-status  empty / full
      toggleCartStatus();

      // 10 check click an plus or minus in cart
      calcCartPriceAndDelivery();
    }
  }

  // 10 check click an plus or minus in cart
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
