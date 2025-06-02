console.log("Content script actif sur la page");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message reçu :", request);

  if (request.action === "minimal_mode") {
    alert("Activation du mode minimal : " + request.value);
    // ici tu pourrais faire du DOM manipulation
  }
});
