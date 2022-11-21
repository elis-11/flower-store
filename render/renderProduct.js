 //! get DATA from Product.json
const productsContainer = document.querySelector('#products-container');

const getProducts = async () => {
  const response = await fetch('./data/products.json')
  console.log(response)

  const productsArray = await response.json()  // formatiruet to JSON format
  console.log(productsArray)
}

getProducts()