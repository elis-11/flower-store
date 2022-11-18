// import from index.html
const btnMinus = document.querySelector('[data-action="minus"]');
console.log(btnMinus);
const btnPlus = document.querySelector('[data-action="plus"]');
console.log(btnPlus);
const counter = document.querySelector("[data-counter]");
console.log(counter);

// click on the minus button
btnMinus.addEventListener("click", () => {
  console.log(" Minus clicked");
  // check if the minus button > 1
  if (parseInt(counter.innerHTML) > 1) {
    // if the minus button > 1, decrement it // -1
    counter.innerHTML = --counter.innerHTML;
  }
});
// click on the plus button
btnPlus.addEventListener("click", () => {
  console.log(" Plus clicked");
  counter.innerHTML = ++counter.innerHTML; // increment counter // +1
});
