// add listener on the entire window - na vsöm okne
window.addEventListener("click", (event) => {
    console.log(" click window");
  
    console.log(event);
    console.log(event.target);
    console.log(event.target.dataset.action);
    // event-z.2  target-zel  dataset-all buttons plus action-click
  
    // check if the element is button Plus
    if (event.target.dataset.action === "plus") {
      console.log(" plus");
      const counterWrapper = event.target.closest(".counter-wrapper"); // find parent of the clicked-element
      console.log(counterWrapper);
      const counter = counterWrapper.querySelector("[data-counter]"); // find data-counter
      console.log(counter);
      counter.innerHTML = ++counter.innerHTML; // add 1 item to the cart
    }
  
    // check if the element is button Minus
    if (event.target.dataset.action === "minus") {
      console.log(" minus");
      const counterWrapper = event.target.closest(".counter-wrapper"); // find parent of the clicked-element
      const counter = counterWrapper.querySelector("[data-counter]"); // find data-counter
      if (parseInt(counter.innerHTML) > 1) {
        counter.innerHTML = --counter.innerHTML; // - 1 item to the cart
      }
    }
  });
  