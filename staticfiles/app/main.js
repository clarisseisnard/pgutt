document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector(".navbar"),
      navOpenBtn = document.querySelector("#bar-open"),
      navCloseBtn = document.querySelector("#x-closed");
  
    // Ensure elements are not null before adding event listeners
    if (navOpenBtn) {
      navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        console.log("clicked");
      });
    }
  
    if (navCloseBtn) {
      navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
      });
      console.log("clicked");
    }
  });

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

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector("#overlay"),
        popupscreen = document.querySelector(".pop-up-download"),
        xbutton = document.querySelector("#closepopup"),
        popup = document.querySelector(".popup");

  // Ensure both elements are found
  if (popupscreen && popup) {
    // Add event listener to the popup element
    popup.addEventListener("click", function() {
      popupscreen.classList.add("openpopup");
      overlay.classList.add("openpopup");
      // $('body').toggleClass('hiddenOverflow');
      $("body").css("overflow", "hidden");
      console.log("Popup opened");
    });
  } 

  if (xbutton) {
    xbutton.addEventListener("click", function() {
      popupscreen.classList.remove("openpopup");
      overlay.classList.remove("openpopup");
      $("body").css("overflow", "");
      console.log('closed');
    });
  }
});