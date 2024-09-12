// Mobile menu configuration ----------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector(".navbar"),
    navOpenBtn = document.querySelector("#bar-open"),
    navCloseBtn = document.querySelector("#x-closed");

  // Ensure elements are not null before adding event listeners
  if (navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
      nav.classList.add("openNav");
      $("body").css("position", "fixed");
      $('body').addClass("fixed-position");
      console.log("mobile menu opened");
      $("body").css("overflow", "hidden");
      console.log("overflowhidden")
    });
  }

  if (navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
      nav.classList.remove("openNav");
      $("body").css("position", "");
      $('body').removeClass("fixed-position");
      console.log("mobile menu closed");
      $("body").css("overflow", "");
      console.log("overflow working again")
    });
  }

  $(".responsive-nav-items > li > a").click(function() {
    // $(".responsive-nav-items").css("display", "none");
    nav.classList.remove("openNav")
    $("body").css("position", "");
    $('body').removeClass("fixed-position");
    $("body").css("overflow", "");
    console.log('mobile menu auto close')
  })

});

// Changing background image on reload -------------------------------------------------------------------------------------------------------------------------------------------

window.onload = function () {
  var imgs = [];
  imgs[0] = 'static/app/backgroundimgs/BG1.jpg';
  imgs[1] = 'static/app/backgroundimgs/BG2.jpg';
  imgs[2] = 'static/app/backgroundimgs/BG3.jpg';
  imgs[3] = 'static/app/backgroundimgs/bg4.jpg';
  imgs[4] = 'static/app/backgroundimgs/bg5.jpg';
  imgs[5] = 'static/app/backgroundimgs/bg6.jpg';
  imgs[6] = 'static/app/backgroundimgs/bg7.jpg';
  imgs[7] = 'static/app/backgroundimgs/bg8.jpg';
  imgs[8] = 'static/app/backgroundimgs/bg9.jpg';
  imgs[9] = 'static/app/backgroundimgs/bg10.jpg';
  imgs[10] = 'static/app/backgroundimgs/bg11.jpg';
  
  var x = Math.floor(Math.random() * imgs.length);
  var background = document.getElementsByClassName("background-container")[0];
  background.style.backgroundImage = `url(${imgs[x]})`;
}

// Popup on catalogos page ------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector("#overlay"),
      popupscreen = document.querySelector(".pop-up-download"),
      xbutton = document.querySelector("#closepopup"),
      popup = document.querySelector(".popup");
      // popup = document.getElementsByClassName("popup");

// Ensure both elements are found
if (popupscreen && popup) {
  // Add event listener to the popup element
  document.querySelectorAll('.popup').forEach(el => el.addEventListener('click', function() {
    popupscreen.classList.add("openpopup");
    overlay.classList.add("openpopup");
    // $('body').toggleClass('hiddenOverflow');
    $("body").css("overflow", "hidden");
    console.log("Popup opened");
  }));
} 

if (xbutton) {
  xbutton.addEventListener("click", function() {
    popupscreen.classList.remove("openpopup");
    overlay.classList.remove("openpopup");
    $("body").css("overflow", "");
    console.log('Popup closed');
  });
}
});

// Removing # from url ----------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  $(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
  })
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const downloadButton = document.querySelector("#downloadpdf")
  const formButton = document.querySelector("#submit-form")
})