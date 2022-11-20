// // count price of all products
// const calcCartPrice = () => {

//   const cartWrapper = document.querySelector('.cart-wrapper')
//   const cartItems = document.querySelectorAll(".cart-item"); // find cart-items
//   console.log(cartItems);

//   //! forEach - count total Price

//   // total Price 
//    let totalPrice = 0;

//    // fins all items price
//    cartItems.forEach((item) => {
//      console.log(item);

//      // find amount products
//      const amountEl = item.querySelector("[data-counter]"); //  find data-counter
//      console.log('amountEl:', amountEl)
//      const priceEl = item.querySelector(".price__currency"); //  find price__currency
//      console.log('priceEl:', priceEl)
//      const currentPrice = parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML);
//      console.log(currentPrice);

//      // product price + total Price
//      totalPrice = totalPrice + currentPrice  // totalPrice += currentPrice   
//    });
// console.log(totalPrice)
// };
