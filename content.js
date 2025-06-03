// Cacher ou afficher les sections Shorts dans la page principale
function toggleShortsSections(hide) {
  const sections = document.querySelectorAll('ytd-rich-section-renderer');
  sections.forEach(section => {
    const hasShortsLink = section.querySelector('a[href*="/shorts/"]');
    if (hasShortsLink) {
      section.style.display = hide ? 'none' : '';
    }
  });
}

// Cacher ou afficher le bloc Shorts dans le menu latéral
function toggleReelShelf(hide) {
  const sidebarShortsLink = [...document.querySelectorAll('a#endpoint')].find(a => a.title === "Shorts");
  if (sidebarShortsLink) {
    sidebarShortsLink.style.display = hide ? 'none' : '';
  }
}

// Fonction globale qui applique la visibilité des Shorts
function toggleShorts(hide) {
  toggleShortsSections(hide);
  toggleReelShelf(hide);
}

// Cacher ou afficher les commentaires
function toggleCommentaires(hide) {
  const sectionComments = document.getElementById('comments');
  if (sectionComments) {
    sectionComments.style.display = hide ? 'none' : '';
  }
}

// Observer les changements dans le DOM
const observer = new MutationObserver(() => {
  chrome.storage.local.get(['shortsEnabled', 'recommandesEnabled', 'commentaireEnabled'], (result) => {
    toggleShorts(result.shortsEnabled);
    toggleCommentaires(result.commentaireEnabled);
    // tu peux ajouter ton toggleRecommandes ici si besoin
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Applique l'état sauvegardé au chargement
chrome.storage.local.get(['shortsEnabled', 'recommandesEnabled', 'commentaireEnabled'], (result) => {
  toggleShorts(result.shortsEnabled);
  toggleCommentaires(result.commentaireEnabled);
});

// Écoute les messages envoyés depuis le popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "shorts_toggle") {
    chrome.storage.local.set({ shortsEnabled: request.hide });
    toggleShorts(request.hide);
  }

  if (request.action === "commentaires_toggle") {
    chrome.storage.local.set({ commentaireEnabled: request.hide });
    toggleCommentaires(request.hide);
  }

  if (request.action === "recommandes_toggle") {
    chrome.storage.local.set({ recommandesEnabled: request.hide });
    toggleShorts(request.hide); // je suppose que c'est une autre fonction ici ?
  }
});
