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
  AOS.init();

  $(".date").mask("00/00/0000");
  $(".time").mask("00:00:00");
  $(".date_time").mask("00/00/0000 00:00:00");
  $(".cep").mask("00000-000");
  $(".phone").mask("0000-0000");
  $(".phone_with_ddd").mask("(00) 0000-0000");
  $(".phone_us").mask("+7 (000) 000-00-00");
  $(".mixed").mask("AAA 000-S0S");
  $(".cpf").mask("000.000.000-00", { reverse: true });
  $(".cnpj").mask("00.000.000/0000-00", { reverse: true });
  $(".money").mask("000.000.000.000.000,00", { reverse: true });
  $(".money2").mask("#.##0,00", { reverse: true });
  $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
    translation: {
      Z: {
        pattern: /[0-9]/,
        optional: true,
      },
    },
  });
  $(".ip_address").mask("099.099.099.099");
  $(".percent").mask("##0,00%", { reverse: true });
  $(".clear-if-not-match").mask("00/00/0000", { clearIfNotMatch: true });
  $(".placeholder").mask("00/00/0000", { placeholder: "__/__/____" });
  $(".fallback").mask("00r00r0000", {
    translation: {
      r: {
        pattern: /[\/]/,
        fallback: "/",
      },
      placeholder: "__/__/____",
    },
  });
  $(".selectonfocus").mask("00/00/0000", { selectOnFocus: true });

  [].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function () {
      img.removeAttribute("data-src");
    };
  });

  // $(".map").click(function () {
  //   $(this).prepend(
  //     "<iframe class='map__iframe' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4700.387090671949!2d98.29632412925388!3d7.838551464981311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1595515530392!5m2!1sru!2sru' height='213' style='border: 0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe >"
  //   );
  // });

  function googleMap() {
    $(".map").prepend(
      "<iframe class='map__iframe' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4700.387090671949!2d98.29632412925388!3d7.838551464981311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1595515530392!5m2!1sru!2sru' height='213' style='border: 0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe >"
    );
  }

  setTimeout(googleMap, 1000);

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
