function removeShortsOnContent(hide){
  
  const shortsLabels = document.querySelectorAll('ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]');
  shortsLabels.forEach(label => {
    const videoRenderer = label.closest('ytd-video-renderer');
    if (videoRenderer) {
      videoRenderer.classList.toggle('hide-recommandes', hide);
    }
  });

}

// Cela permet que si l'url est /shorts cela renvoie sur la page juste avant
function goBackShorts(){
  if (window.location.pathname.search("shorts") !== -1) {
    history.back();
    }
}

// Cacher ou afficher les sections Shorts dans la page principale
function toggleShortsSections(hide) {
  const sections = document.querySelectorAll('ytd-rich-section-renderer');
  sections.forEach(section => {
    const hasShortsLink = section.querySelector('a[href*="/shorts/"]');
    if (hasShortsLink) {
      section.classList.toggle('hide-recommandes', hide);
    }
  });
}

// Quand on lance une vidéo à droite 
function toggleReelShelfRenderer(hide) {
  const reelShelves = document.querySelectorAll('ytd-reel-shelf-renderer');
  reelShelves.forEach(shelf => {
    shelf.classList.toggle('hide-recommandes', hide);
  });
}

// Dans le menu latéral à gauche
function toggleReelShelf(hide) {
  const sidebarShortsLink = [...document.querySelectorAll('a#endpoint')].find(a => a.title === "Shorts");
  if (sidebarShortsLink) {
    sidebarShortsLink.classList.toggle('hide-recommandes', hide);
  }
}

export function toggleShorts(hide){
    
    goBackShorts();
    removeShortsOnContent(hide);
    toggleShortsSections(hide);
    toggleReelShelfRenderer(hide);
    toggleReelShelf(hide);
}