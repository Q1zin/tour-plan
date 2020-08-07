$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targerModal = $(this).attr("data-href");
    $(targerModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targerModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Full name is required",
        },
        email: {
          required: "Email is required",
        },
        phone: {
          required: "Phone is required",
        },
      },
    });
  });

  $(".newsletter__subscribe").each(function () {
    $(this).validate({
      errorClass: "invalid--2",
      messages: {
        email: {
          required: "Email is required",
        },
      },
    });
  });

  $(".phone_us").mask("+7 (000) 000-00-00");
  $(".phone_us--2").mask("+7 (000) 000-00-00");

  function googleMap() {
    $(".map").prepend(
      "<iframe class='map__iframe' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4700.387090671949!2d98.29632412925388!3d7.838551464981311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1595515530392!5m2!1sru!2sru' height='213' style='border: 0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe >"
    );
  }

  setTimeout(googleMap, 2000);

  var map, head, insertBefore, appendChild;
  head = document.getElementsByTagName("head")[0];
  insertBefore = head.insertBefore;
  appendChild = head.appendChild;
  head.insertBefore = function (newElement, referenceElement) {
    if (newElement.type === "text/css") {
      return;
    }
    insertBefore.call(head, newElement, referenceElement);
  };
  head.appendChild = function (newElement, referenceElement) {
    if (newElement.type === "text/css") {
      return;
    }
    appendChild.call(head, newElement, referenceElement);
  };
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  var map, head, insertBefore, appendChild, mapApi;

  head = document.getElementsByTagName("head")[0];
  insertBefore = head.insertBefore;
  appendChild = head.appendChild;

  if (document.getElementById("map") !== null) {
    mapApi = document.createElement("script");
    mapApi.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB47M01hgdZsYqkAQuf3EpJcM1KHY496x4&callback=initMap"; // set the source of the script to your script
    document.getElementsByTagName("head")[0].appendChild(mapApi);
  }

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  head.insertBefore = function (newElement, referenceElement) {
    if (newElement.type === "text/css") {
      return;
    }
    insertBefore.call(head, newElement, referenceElement);
  };

  head.appendChild = function (newElement, referenceElement) {
    if (newElement.type === "text/css") {
      return;
    }
    appendChild.call(head, newElement, referenceElement);
  };
});
