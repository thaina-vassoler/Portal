var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.addEventListener('scroll', function() {
    var sectionOffset = document.getElementById('minha-secao').offsetTop;
    var iconBar = document.getElementById('barra-icones');
    var scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition >= sectionOffset) {
      iconBar.style.display = 'block'; // Exiba a barra de ícones
    } else {
      iconBar.style.display = 'none'; // Oculte a barra de ícones
    }
  });
