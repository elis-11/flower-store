// search click on the window
window.addEventListener("click", (event) => {
  // check if clicked the button 'buy now'
  if (event.target.hasAttribute("data-cart")) {
    // console.log(" clicked on button");

    // find clicked card     // CLOSEST - find parent of the card
    const card = event.target.closest(".card");
    console.log(card);

    // collect all info about the card & write together
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerHTML,
      itemInBox: card.querySelector("[data-items-in-box]").innerHTML,
      weight: card.querySelector(".price__weight").innerHTML,
      price: card.querySelector(".price__currency").innerHTML,
      counter: card.querySelector("[data-counter]").innerHTML,
    };
    console.log(productInfo)
  }
});
