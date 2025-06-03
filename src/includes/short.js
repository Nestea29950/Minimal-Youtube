console.log("short.js chargé")

// Cacher ou afficher les sections Shorts dans la page principale
export function toggleShortsSections(hide) {
  const sections = document.querySelectorAll('ytd-rich-section-renderer');
  sections.forEach(section => {
    const hasShortsLink = section.querySelector('a[href*="/shorts/"]');
    if (hasShortsLink) {
      section.classList.toggle('hide-recommandes', hide);
    }
  });
}

// Quand on lance une vidéo à droite 
export function toggleReelShelfRenderer(hide) {
  const reelShelves = document.querySelectorAll('ytd-reel-shelf-renderer');
  reelShelves.forEach(shelf => {
    shelf.classList.toggle('hide-recommandes', hide);
  });
}

// Dans le menu latéral à gauche
export function toggleReelShelf(hide) {
  const sidebarShortsLink = [...document.querySelectorAll('a#endpoint')].find(a => a.title === "Shorts");
  if (sidebarShortsLink) {
    sidebarShortsLink.classList.toggle('hide-recommandes', hide);
  }
}

export function toggleShorts(hide){
    toggleShortsSections(hide);
    toggleReelShelfRenderer(hide);
    toggleReelShelf(hide);
}