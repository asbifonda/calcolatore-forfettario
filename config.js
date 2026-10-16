// Metti qui il link al prodotto su Gumroad: tutti i bottoni del sito lo useranno
var LINK_GESTIONALE = "https://strumentipartitaiva.gumroad.com/l/forfettario-facile";
(function(){
  var links = document.querySelectorAll(".js-gestionale, #ctaLink");
  for (var i = 0; i < links.length; i++) {
    if (LINK_GESTIONALE) links[i].href = LINK_GESTIONALE;
    else links[i].closest(".box, .cta") && (links[i].closest(".box, .cta").style.display = "none");
  }
})();
