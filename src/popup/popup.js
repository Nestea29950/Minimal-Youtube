document.addEventListener('DOMContentLoaded', () => {

  // ------------------Traductions ------------------
  document.getElementById('hideShorts').innerText = chrome.i18n.getMessage("hideShorts");
  document.getElementById('hideComments').innerText = chrome.i18n.getMessage("hideComments");
  document.getElementById('hideRecommended').innerText = chrome.i18n.getMessage("hideRecommended");
  // ------------------Traductions ------------------


  const shorts_toggle = document.getElementById('shorts');
  const commentaires_toggle = document.getElementById('commentaires');
  const recommandes_toggle = document.getElementById('recommandes');

  chrome.storage.local.get(['shortsEnabled', 'commentaireEnabled', 'recommandesEnabled'], (result) => {
    if (shorts_toggle) shorts_toggle.checked = !!result.shortsEnabled;
    if (commentaires_toggle) commentaires_toggle.checked = !!result.commentaireEnabled;
    if (recommandes_toggle) recommandes_toggle.checked = !!result.recommandesEnabled;
  });

  if (shorts_toggle) {
    shorts_toggle.addEventListener('change', () => {
      const hide = shorts_toggle.checked;
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'shorts_toggle', hide }, (response) => {
          console.log(response?.status);
        });
      });
    });
  }

  if (commentaires_toggle) {
    commentaires_toggle.addEventListener('change', () => {
      const hide = commentaires_toggle.checked;
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'commentaires_toggle', hide }, (response) => {
          console.log(response?.status);
        });
      });
    });
  }

  if (recommandes_toggle) {
    recommandes_toggle.addEventListener('change', () => {
      const hide = recommandes_toggle.checked;
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'recommandes_toggle', hide }, (response) => {
          console.log(response?.status);
        });
      });
    });
  }
});
