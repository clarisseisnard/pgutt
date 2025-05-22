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
  const downloadBallestra = document.querySelector("#download-ballestra");
  const downloadBft1 = document.querySelector("#download-bft-1");
  const downloadBft2 = document.querySelector("#download-bft-2");
  const downloadBft3 = document.querySelector("#download-bft-3");
  const downloadBowers = document.querySelector("#download-bowers");
  const downloadBreitenfeld = document.querySelector("#download-breitenfeld");
  const downloadConthermo = document.querySelector("#download-conthermo");
  const downloadGigkarasek = document.querySelector("#download-gigkarasek");
  const downloadGmp = document.querySelector("#download-gmp");
  const downloadLordsteel = document.querySelector("#download-lordsteel");
  const downloadMorandini = document.querySelector("#download-morandini");
  const downloadRmp = document.querySelector("#download-rmp");
  const downloadSbn = document.querySelector("#download-sbn");
  const downloadSchlick = document.querySelector("#download-schlick");
  const downloadSchmidtClemmens = document.querySelector("#download-schmidtclemens")
  const downloadSonnek = document.querySelector("#download-sonnek")
  const downloadTermomeccanica = document.querySelector("#download-termomeccanica")
  const downloadUreaKnowHow = document.querySelector("#download-ureaknowhow")
  const downloadDekomte1 = document.querySelector("#download-dekomte-1")
  const downloadDekomte2 = document.querySelector("#download-dekomte-2")
  const downloadDekomte3 = document.querySelector("#download-dekomte-3")
  const downloadDekomte4 = document.querySelector("#download-dekomte-4")


  const form = document.querySelector("#catalogoForm");
  const submitButton = document.querySelector("#sendButton");

  let downloadFlag = null;

  downloadBallestra.addEventListener("click", function (e) {
    e.preventDefault();
    downloadFlag = 'ballestra';
  });

  downloadBft1.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'bft-1';
  })

  downloadBft2.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'bft-2';
  })

  downloadBft3.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'bft-3';
  })

  downloadBowers.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'bowers'
  })

  downloadBreitenfeld.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'breitenfeld'
  })

  downloadConthermo.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'conthermo'
  })

  downloadGigkarasek.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'gigkarasek'
  })

  downloadGmp.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'gmp'
  })

  downloadLordsteel.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'lordsteel'
  })

  downloadMorandini.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'morandini'
  })

  downloadRmp.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'rmp'
  })

  downloadSbn.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'sbn'
  })

  downloadSchlick.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'schlick'
  })

  downloadSchmidtClemmens.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'schmidtclemmens'
  })

  downloadSonnek.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'sonnek'
  })

  downloadTermomeccanica.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'termomeccanica'
  })

  downloadUreaKnowHow.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'ureaknowhow'
  })

  downloadDekomte1.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'dekomte-1'
 })

  downloadDekomte2.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'dekomte-2'
 })

  downloadDekomte3.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'dekomte-3'
 })

  downloadDekomte4.addEventListener("click", function(e) {
    e.preventDefault();
    downloadFlag = 'dekomte-4'
 })

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (form.checkValidity()) {
      form.submit();

      switch(downloadFlag) {
        case 'ballestra':
          triggerBallestraDownload();
          break;
        case 'bft-1':
          triggerBftDownload1();
          break;
        case 'bft-2':
          triggerBftDownload2();
          break;
        case 'bft-3':
          triggerBftDownload3();
          break;
        case 'bowers':
          triggerBowersDownload();
          break;
        case 'breitenfeld':
          triggerBreitenfeld();
          break;
        case 'conthermo':
          triggerConthermo();
          break;
        case 'gigkarasek':
          triggerGigkarasek();
          break;
        case 'gmp':
          triggerGmp();
          break;
        case 'lordsteel':
          triggerLordsteel();
          break;
        case 'morandini':
          triggerMorandini();
          break;
        case 'rmp':
          triggerRmp();
          break;
        case 'sbn':
          triggerSbn();
          break;
        case 'schlick':
          triggerSchlick();
          break;
        case 'schmidtclemmens':
          triggerSchmidtClemmens();
          break;
        case 'sonnek':
          triggerSonnek();
          break;
        case 'termomeccanica':
          triggerTermomeccanica();
          break;
        case 'ureaknowhow':
          triggerUreaKnowHow();
          break;
        case 'dekomte-1':
          triggerDekomte1();
          break;
        case 'dekomte-2':
          triggerDekomte2();
          break;
        case 'dekomte-3':
          triggerDekomte3();
          break;
        case 'dekomte-4':
          triggerDekomte4();
          break;
        default:
          break;
      }
    }
  });

  // ballestra pdf
  function triggerBallestraDownload() {
    const element = document.createElement("a");
    element.href = "/static/app/pdfs/Ballestra_DSSC_Chemicals.pdf";
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // bft ecotron
  function triggerBftDownload1() {
    const element = document.createElement("a");
    element.href = "/static/app/pdfs/BFT-ECOTRON-EN-1.pdf";
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

   // bft high pressure 
   function triggerBftDownload2() {
    const element = document.createElement("a");
    element.href = "/static/app/pdfs/BFT-High-Pressure-Pumps-Chemical-Application-EN.pdf";
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // bft servotron
  function triggerBftDownload3() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/BFT-SERVOTRON-EN-1.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // bowers pdf
  function triggerBowersDownload() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Bowers_ones.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // breitenfeld pdf
  function triggerBreitenfeld() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Company_Presentation_Breitenfeld_Steel_AG_2024_ENG.PDF"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // conthermo pdf
  function triggerConthermo() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Conthermo.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // gigkarasek pdf
  function triggerGigkarasek() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/GIGKarasek-Portolio-English.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // gmp pdf
  function triggerGmp() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/GMP.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // lordsteel pdf
  function triggerLordsteel() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Lord_steel.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // morandini pdf
  function triggerMorandini() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Morandini.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // rmp pdf
  function triggerRmp() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/RMP_Company_2024.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // sbn pdf
  function triggerSbn() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/SBN.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // schlick pdf
  function triggerSchlick() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Schlick.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // schmidt clemens pdf
  function triggerSchmidtClemmens() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Schmidt_Clemens.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // sonnek pdf
  function triggerSonnek() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Sonnek.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // termomeccanica pdf
  function triggerTermomeccanica() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/Termomeccanica.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // urea know how pdf
  function triggerUreaKnowHow() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/UreaKnowHow.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // dekomte-1 pdf
  function triggerDekomte1() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/BrochureDEKOMTEProfile.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // dekomte-2 pdf
  function triggerDekomte2() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/BrochureFabricExpansionJoints.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // dekomte-3 pdf
  function triggerDekomte3() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/BrochureGasTurbineandCombinedCyclePlants.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // dekomte-4 pdf
  function triggerDekomte4() {
    const element = document.createElement("a")
    element.href = "/static/app/pdfs/BrochureSteamBoilerPlants.pdf"
    element.download = ""
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
});