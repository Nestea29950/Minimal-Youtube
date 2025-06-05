// Lors d'une vidéo à droite
function toggleRecommandedVideo(hide) {
  const secondary = document.getElementById('secondary');
  if (secondary) {
    secondary.classList.toggle('hide-recommandes', hide);

  }
}

// Page d'accueil vidéos recommandés
function toggleRecommandedVideoAccueil(hide) {
  if (window.location.hostname === "www.youtube.com") {
    if (window.location.pathname === "/" && window.location.search === "") {
      const pagemanager = document.getElementById('page-manager');
      if (pagemanager) {
        pagemanager.classList.toggle('hide-recommandes', hide);

      }
    }else{
      const pagemanager = document.getElementById('page-manager');
      pagemanager.classList.toggle('hide-recommandes', false);
    }
  }
}

export function toggleRecommandes(hide) {
  
  toggleRecommandedVideo(hide);
  toggleRecommandedVideoAccueil(hide);
}
