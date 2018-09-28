var popupLink = document.querySelector(".contacts-button");
var popup = document.querySelector(".write-us-popup");
var closePopup = document.querySelector(".write-us-popup-close");

var form = document.querySelector(".write-us-form");
var login = document.querySelector("[name = your-name]");
var email = document.querySelector("[name = your-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("your-name");
} catch (err) {
  isStorageSupport = false;
}

popupLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-popup-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-popup-show");
  popup.classList.remove("write-us-popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("write-us-popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("your-name", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-popup-show")) {
      popup.classList.remove("write-us-popup-show");
      popup.classList.remove("write-us-popup-error");
    }
  }
});

var mapLink = document.querySelector(".map-button");
var mapPopup = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-popup-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-popup-show")) {
      mapPopup.classList.remove("map-popup-show");
    }
  }
});


var sliderFirstSlideButton = document.querySelector("[name=slider-move-button-1]");
var sliderSecondSlideButton = document.querySelector("[name=slider-move-button-2]");
var sliderThirdSlideButton = document.querySelector("[name=slider-move-button-3]");

var sliderFirstSlide = document.querySelector(".first-slide");
var sliderSecondSlide = document.querySelector(".second-slide");
var sliderThirdSlide = document.querySelector(".third-slide");

sliderFirstSlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderSecondSlide.classList.remove("current-slide");
  sliderThirdSlide.classList.remove("current-slide");
  sliderFirstSlide.classList.add("current-slide");
  sliderSecondSlideButton.classList.remove("slider-move-button-current");
  sliderThirdSlideButton.classList.remove("slider-move-button-current");
  sliderFirstSlideButton.classList.add("slider-move-button-current");
});

sliderSecondSlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderFirstSlide.classList.remove("current-slide");
  sliderThirdSlide.classList.remove("current-slide");
  sliderSecondSlide.classList.add("current-slide");
  sliderFirstSlideButton.classList.remove("slider-move-button-current");
  sliderThirdSlideButton.classList.remove("slider-move-button-current");
  sliderSecondSlideButton.classList.add("slider-move-button-current");
});

sliderThirdSlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderFirstSlide.classList.remove("current-slide");
  sliderSecondSlide.classList.remove("current-slide");
  sliderThirdSlide.classList.add("current-slide");
  sliderFirstSlideButton.classList.remove("slider-move-button-current");
  sliderSecondSlideButton.classList.remove("slider-move-button-current");
  sliderThirdSlideButton.classList.add("slider-move-button-current");
});


var servicesDeliverySlideButton = document.querySelector(".services-slider-button-delivery");
var servicesWarrantySlideButton = document.querySelector(".services-slider-button-warranty");
var servicesCreditSlideButton = document.querySelector(".services-slider-button-credit");

var servicesDeliverySlide = document.querySelector("[id=services-slide-delivery]");
var servicesWarrantySlide = document.querySelector("[id=services-slide-warranty]");
var servicesCreditSlide = document.querySelector("[id=services-slide-credit]");


servicesDeliverySlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  servicesWarrantySlide.classList.remove("current-services-slide-text");
  servicesCreditSlide.classList.remove("current-services-slide-text");
  servicesDeliverySlide.classList.add("current-services-slide-text");
  servicesWarrantySlideButton.classList.remove("current-services-slider-button");
  servicesCreditSlideButton.classList.remove("current-services-slider-button");
  servicesDeliverySlideButton.classList.add("current-services-slider-button");
});

servicesWarrantySlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  servicesDeliverySlide.classList.remove("current-services-slide-text");
  servicesCreditSlide.classList.remove("current-services-slide-text");
  servicesWarrantySlide.classList.add("current-services-slide-text");
  servicesDeliverySlideButton.classList.remove("current-services-slider-button");
  servicesCreditSlideButton.classList.remove("current-services-slider-button");
  servicesWarrantySlideButton.classList.add("current-services-slider-button");
});

servicesCreditSlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  servicesDeliverySlide.classList.remove("current-services-slide-text");
  servicesWarrantySlide.classList.remove("current-services-slide-text");
  servicesCreditSlide.classList.add("current-services-slide-text");
  servicesDeliverySlideButton.classList.remove("current-services-slider-button");
  servicesWarrantySlideButton.classList.remove("current-services-slider-button");
  servicesCreditSlideButton.classList.add("current-services-slider-button");
});