import productsFunc from "./products.js";
import searchFunc from "./search.js";

async function addProductsToLocalStorage() {
  try {
    const response = await fetch("../js/data.json");
    const data = await response.json();

    if (data) {
      localStorage.setItem("products", JSON.stringify(data));
      productsFunc(data);
      searchFunc(data);
    }
  } catch (error) {
    console.error(error);
  }
}

function updCartItem() {
  const cartItems = document.querySelector(".header-cart-count");
  const cartData = JSON.parse(localStorage.getItem("cart"));

  cartItems.innerHTML = cartData.length.toString();
}

(async function () {
  addProductsToLocalStorage();
  updCartItem();
})();
