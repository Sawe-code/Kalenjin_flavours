import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

// const trendingSushis = [
//     'Roasted Goat',
//     'Smoked Fish',
//     'Millet Ugali',
//     'Nyoyo (Leafy Greens)',
//     'Mukimo',
//     'Saget (Starchy Porridge)'
// ];

// const trendingDrinks = [
//     "Mursik",
//     "Kimutai (Millet Beer)",
//     "Tuiyo Tea",
//     "Arua Juice",
//     "Saget Milk",
//     "Kaleicha (Herbal Infusion)"
// ];

// const cards = [
//     {
//         imgSrc: roastedGoatImg,
//         alt: "roasted-goat",
//         title: "Roasted Goat",
//         rating: "4.9",
//         price: "$12.00"
//     },
//     {
//         imgSrc: milletUgaliImg,
//         alt: "millet-ugali",
//         title: "Millet Ugali",
//         rating: "5.0",
//         price: "$8.00",
//         active: true
//     },
//     {
//         imgSrc: mursikImg,
//         alt: "mursik",
//         title: "Mursik",
//         rating: "4.7",
//         price: "$5.00"
//     }
// ];
document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("orderLocalBtn");

  if (orderBtn) {
    orderBtn.addEventListener("click", () => {
      window.location.href = "/menu.html";
    });
  }

  document.querySelector("#subscribeForm").onsubmit = subscribeToNewsletter;
});

function subscribeToNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  if (email === "") {
    alert("Please enter your email address");
    return;
  }
  alert("You have successfully subscribed to our newsletter, Thank you!");
  emailInput.value = "";
}
