//! get DATA from Product.json
const productsContainer = document.querySelector("#products-container");

getProducts(); // start render

// async function get data from Product.json
async function getProducts() {

  // get data from Product.json
    const response = await fetch("./data/products.json");
    console.log(response);

    // parse data from JSON to js
    const productsArray = await response.json(); // formatiruet to JSON format
    console.log(productsArray);

    // start render / display products
    renderProducts(productsArray); //

};

// 12+ render Products
function renderProducts(productsArray) {
  productsArray.forEach((item) => {
    const productHTML = `<div class="col-md-6">
        <div class="card mb-4" data-id="${item.id}">
          <img class="product-img" src="img/${item.imgSrc}" alt="" />
          <div class="card-body text-center">
            <h4 class="item-title">${item.title}</h4>
            <p>
              <small data-items-in-box class="text-muted">${item.itemsInBox} st.</small>
            </p>

            <!-- Counter -->
            <div class="details-wrapper">
              <div class="items counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter>1</div>
                <div class="items__control" data-action="plus">+</div>
              </div>
              <!-- //Counter -->

              <div class="price">
                <div class="price__weight">${item.weight} g.</div>
                <div class="price__currency">${item.price} €</div>
              </div>
            </div>

            <button
              data-cart
              type="button"
              class="btn btn-block btn-outline-warning"
            >
              buy now
            </button>
          </div>
        </div>
      </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML)
  });
};

// https://www.youtube.com/watch?v=pIgyoL5FjgI&list=LL&index=12
