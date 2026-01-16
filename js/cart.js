// import AOS from "aos";
// import "aos/dist/aos.css";

// // init AOS animation
// AOS.init({
//     duration: 1000,
//     offset: 100,
// });

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Your basket is empty");
    return;
  }

  let message = "Hello, I would like to order:%0A%0A";
  let total = 0;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - KES ${item.price}%0A`;
    total += item.price;
  });

  message += `%0A*Total: KES ${total}*`;

  const phoneNumber = "254759389236";

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

  localStorage.removeItem("cart");
  cart = [];
  updateCartCount();
}

window.addToCart = addToCart;
window.checkoutWhatsApp = checkoutWhatsApp;
updateCartCount();

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector()
// });
