//variaveis
let coll = document.getElementsByClassName("collapsible"),
main = document.getElementById('main'),
i;

//events
main.addEventListener("load", function() {resize(this);}, false);

//abrir e fechar menu e busca
function openNav() {
  document.getElementById("close-menu").style.display = "block";
  document.getElementById("html-scroll").style.overflow = "hidden";
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("html-scroll").style.overflow = "auto";
  document.getElementById("close-menu").style.display = "none";
  document.getElementById("mySidenav").style.width = "0";
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("html-scroll").style.overflow = "hidden";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("html-scroll").style.overflow = "auto";
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//resize
function resize(el){
  let sectionFooter, footer, header,
  sumHeight, screenHeightFloat, minHeight, screenWidth;

  sectionFooter = parseFloat(window.getComputedStyle(document.getElementById("footer1"), null).height);
  footer = parseFloat(window.getComputedStyle(document.getElementById("footer2"), null).height);
  header = parseFloat(window.getComputedStyle(document.getElementById("header"), null).height);
  // sectionFooter1 = window.getComputedStyle(sectionFooter, null).height,
  // footer1 = window.getComputedStyle(footer, null).height,
  // header1 = window.getComputedStyle(header, null).height,
  // sectionFooterFloat = parseFloat(sectionFooter1),
  // footerFloat = parseFloat(footer1),
  // headerFloat = parseFloat(header1),
  // screenHeightFloat = parseFloat(screenHeight),
  sumHeight = sectionFooter + footer + header;
  screenHeight = parseFloat(window.screen.height);
  screenWidth = window.screen.width;
  minHeight = screenHeightFloat - sumHeight +"px";

  if(screenWidth >= 1024){
    el.style.minHeight = minHeight;
  }
}


//menu atuacao
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
