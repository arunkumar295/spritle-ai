$(".owl-carousel").owlCarousel({
  animateOut: "fadeOut",
  margin: 10,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
var swiper = new Swiper("#owl-carousell", {
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 1000,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".digi-logo-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 6,
    },
  },
});
function btnClick(e) {
  e.preventDefault();
  const visitPM = document.getElementById("visitors-pm").value;
  const orderPM = document.getElementById("order-pm").value;
  const aOV = document.getElementById("aov").value;
  console.log(visitPM, orderPM, aOV);
  console.log("arun");
  var conversationsPerMonth = parseFloat(
    (visitPM / (3333.33 * 100)).toFixed(3)
  );
  var potentialAdditionalSales = parseFloat(
    (orderPM / (769.23 * 100)).toFixed(3)
  );
  var potentialAOV = parseFloat((aOV / (90.9 * 100)).toFixed(3));
  var addUnlockSales = parseFloat((potentialAOV / (76.92 * 100)).toFixed(3));
  var monthlyROI = parseFloat(((addUnlockSales - 15) / (15 * 100)).toFixed(3));
  document.getElementById("con-pm").textContent = conversationsPerMonth;
  document.getElementById("addSales").textContent = potentialAdditionalSales;
  document.getElementById("potAV").textContent = potentialAOV;
  document.getElementById("addSalesFromSpritle").textContent = addUnlockSales;
  document.getElementById("subsCost").textContent = "15";
  document.getElementById("mon-ROI").textContent = monthlyROI;
  document.getElementById("ROI").classList.remove("d-none");
}
document.getElementById("myButton").addEventListener("click", btnClick);
