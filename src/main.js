import { toggleShorts } from "./includes/short.js";
import { toggleCommentaires } from "./includes/commentaires.js";
import { toggleRecommandes } from "./includes/recommande.js";

// Variables locales pour conserver l'état actuel
let shortsEnabled = true;
let recommandesEnabled = true;
let commentaireEnabled = true;

// Observer les changements dans le DOM
const observer = new MutationObserver(() => {
  toggleShorts(shortsEnabled);
  toggleCommentaires(commentaireEnabled);
  toggleRecommandes(recommandesEnabled);
});

observer.observe(document.body, { childList: true, subtree: true });

// Chargement initial des valeurs
chrome.storage.local.get(['shortsEnabled', 'recommandesEnabled', 'commentaireEnabled'], (result) => {
  shortsEnabled = result.shortsEnabled ?? true;
  recommandesEnabled = result.recommandesEnabled ?? true;
  commentaireEnabled = result.commentaireEnabled ?? true;

  toggleShorts(shortsEnabled);
  toggleCommentaires(commentaireEnabled);
  toggleRecommandes(recommandesEnabled);
});

// Écoute les messages depuis le popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "shorts_toggle") {
    shortsEnabled = request.hide;
    chrome.storage.local.set({ shortsEnabled });
    toggleShorts(shortsEnabled);
  }

  if (request.action === "commentaires_toggle") {
    commentaireEnabled = request.hide;
    chrome.storage.local.set({ commentaireEnabled });
    toggleCommentaires(commentaireEnabled);
  }

  if (request.action === "recommandes_toggle") {
    
    recommandesEnabled = request.hide;
    chrome.storage.local.set({ recommandesEnabled });
    toggleRecommandes(recommandesEnabled);
  }
});
