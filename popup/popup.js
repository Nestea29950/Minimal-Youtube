document.getElementById("sendOption").addEventListener("click", () => {
  const value = document.getElementById("optionInput").value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "minimal_mode",
      value: value
    });
  });
});
