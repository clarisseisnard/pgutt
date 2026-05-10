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

document.addEventListener('DOMContentLoaded', function(e) {
  const overlay = document.querySelector("#overlay"),
      popupscreen = document.querySelector(".pop-up-download"),
      xbutton = document.querySelector("#closepopup"),
      popup = document.querySelector(".popup");
      // popup = document.getElementsByClassName("popup");
      e.preventDefault();

if (popupscreen && popup) {
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

// Download after valid form ----------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector("#catalogoForm");
  const popupScreen = document.querySelector(".pop-up-download");
  const overlay = document.querySelector("#overlay");

  let selectedPdf = null;

  document.querySelectorAll(".popup").forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      selectedPdf = this.dataset.pdf;

      popupScreen.classList.add("openpopup");
      overlay.classList.add("openpopup");
      document.body.style.overflow = "hidden";
    });
  });

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      if (!selectedPdf) {
        alert("Selecione um catálogo antes de enviar.");
        return;
      }

      const element = document.createElement("a");
      element.href = selectedPdf;
      element.download = "";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }
});

  // ballestra pdf
  function triggerBallestraDownload() {
  const element = document.createElement("a");
  element.href = "/static/app/pdfs/Ballestra_DSSC_Chemicals.pdf";
  element.download = "Ballestra_DSSC_Chemicals.pdf";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
 }

  // bft ecotron
  function triggerBftDownload1() {
    window.open("/static/app/pdfs/BFT-ECOTRON-EN-1.pdf");
  }

   // bft high pressure 
   function triggerBftDownload2() {
    window.open("/static/app/pdfs/BFT-High-Pressure-Pumps-Chemical-Application-EN.pdf");
  }

  // bft servotron
  function triggerBftDownload3() {
    window.open("/static/app/pdfs/BFT-SERVOTRON-EN-1.pdf");
  }

  // bowers pdf
  function triggerBowersDownload() {
    window.open("/static/app/pdfs/Bowers_ones.pdf");
  }

  // breitenfeld pdf
  function triggerBreitenfeld() {
     window.open("/static/app/pdfs/Company_Presentation_Breitenfeld_Steel_AG_2024_ENG.PDF");
  }

  // conthermo pdf
  function triggerConthermo() {
     window.open("/static/app/pdfs/Conthermo.pdf");
  }

  // gkt pdf
  function triggerGKT() {
     window.open("/static/app/pdfs/GKT-Portfolio-English.pdf");
  }

  // gmp pdf
  function triggerGmp() {
     window.open("/static/app/pdfs/GMP.pdf");
  }

  // lordsteel pdf
  function triggerLordsteel() {
     window.open("/static/app/pdfs/Lord_steel.pdf");
  }

  // morandini pdf
  function triggerMorandini() {
    window.open("/static/app/pdfs/Morandini.pdf");
  }

  // rmp pdf
  function triggerRmp() {
    window.open("/static/app/pdfs/RMP_Company_2024.pdf");
  }

  // sbn pdf
  function triggerSbn() {
    window.open("/static/app/pdfs/SBN.pdf");
  }

  // schlick pdf
  function triggerSchlick() {
    window.open("/static/app/pdfs/Schlick.pdf");
  }

  // schmidt clemens pdf
  function triggerSchmidtClemmens() {
    window.open("/static/app/pdfs/Schmidt_Clemens.pdf");
  }

  // sonnek pdf
  function triggerSonnek() {
    window.open("/static/app/pdfs/Sonnek.pdf");
  }

  // termomeccanica pdf
  function triggerTermomeccanica() {
    window.open("/static/app/pdfs/Termomeccanica.pdf");
  }

  // urea know how pdf
  function triggerUreaKnowHow() {
    window.open("/static/app/pdfs/UreaKnowHow.pdf");
  }

  // dekomte-1 pdf
  function triggerDekomte1() {
    window.open("/static/app/pdfs/BrochureDEKOMTEProfile.pdf");
  }

  // dekomte-2 pdf
  function triggerDekomte2() {
    window.open("/static/app/pdfs/BrochureFabricExpansionJoints.pdf");
  }

  // dekomte-3 pdf
  function triggerDekomte3() {
    window.open("/static/app/pdfs/BrochureGasTurbineandCombinedCyclePlants.pdf");
  }

  // dekomte-4 pdf
  function triggerDekomte4() {
    window.open("/static/app/pdfs/BrochureSteamBoilerPlants.pdf");
   }