console.log("main.js chargé");

import { toggleShorts } from "./includes/short.js";
import { toggleCommentaires } from "./includes/commentaires.js";
import { toggleRecommandes } from "./includes/recommande.js";

// Observer les changements dans le DOM
const observer = new MutationObserver(() => {
  chrome.storage.local.get(['shortsEnabled', 'recommandesEnabled', 'commentaireEnabled'], (result) => {
    toggleShorts(result.shortsEnabled);
    toggleCommentaires(result.commentaireEnabled);
    toggleRecommandes(result.recommandesEnabled);
  });
});

observer.observe(document.body, { childList: true, subtree: true });

chrome.storage.local.get(['shortsEnabled', 'recommandesEnabled', 'commentaireEnabled'], (result) => {
  toggleShorts(result.shortsEnabled);
  toggleCommentaires(result.commentaireEnabled);
  toggleRecommandes(result.recommandesEnabled);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "shorts_toggle") {
    console.log('oui');
    chrome.storage.local.set({ shortsEnabled: request.hide });
    toggleShorts(request.hide);
  }

  if (request.action === "commentaires_toggle") {
    chrome.storage.local.set({ commentaireEnabled: request.hide });
    toggleCommentaires(request.hide);
  }

  if (request.action === "recommandes_toggle") {
    chrome.storage.local.set({ recommandesEnabled: request.hide });
    toggleRecommandes(request.hide);
  }
});
