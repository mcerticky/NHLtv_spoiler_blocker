const toggleButton = document.getElementById('toggleButton');

// get the current state from storage and update the button
chrome.storage.local.get(['isEnabled'], function (result) {
  const isEnabled = result.isEnabled !== undefined ? result.isEnabled : true;
  updateButton(isEnabled);
});

// toggle the extension on button click
toggleButton.addEventListener('click', () => {
  chrome.storage.local.get(['isEnabled'], function (result) {
    const isEnabled = result.isEnabled !== undefined ? result.isEnabled : true;
    const newState = !isEnabled;

    // store the new state
    chrome.storage.local.set({ isEnabled: newState }, function () {
      updateButton(newState);

      // Send a message to the content script to toggle functionality
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { isEnabled: newState }, function(response) {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          }
        });
      });
    });
  });
});

function updateButton(isEnabled) {
  toggleButton.textContent = isEnabled ? 'Disable' : 'Enable';
}