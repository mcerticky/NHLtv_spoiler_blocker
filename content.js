// TODO: 
// remove progress bar instead of whole controlbar
// this will bring "broadcast" and "settings buttons back"
// remove clock

// create on/off button that works

// hide the control bar
const style = document.createElement('style');
style.textContent = `
  /* Hide timeline/progress bar */
  .sravvpl_controlbuttons-above {
    display: none !important;
  }

  /* Hide clock (end time) */
  .sravvpl_duration {
    display: none !important;
  }

  /* Hide clock (slash) */
  .sravvpl_separator {
    display: none !important;
  }

    /* Hide match panel on the right (useful for series-clinching game replays) */
  .player__MatchData {
    display: none !important;
  }
 
`;
document.head.appendChild(style);

window.onload = function() {
  if (window.location.href.includes('nhltv.nhl.com')) {
    alert("Progress bar remover enabled!");
  }
};

let shouldPreventClassChange = true; // Flag to control class change on mouse movement

// Add a mouse button click event listener to disable class change
document.addEventListener('mousedown', function () {
  shouldPreventClassChange = false; // Disable class change on mouse down
});

// Mouse move event to prevent class change if flag is set
document.addEventListener('mousemove', function () {
  const wrapper = document.querySelector('.sravvpl_wrapper');

  if (wrapper && shouldPreventClassChange) {
    // Prevent class change on mouse movement
    if (wrapper.classList.contains('sravvpl_size-large')) {
      wrapper.classList.remove('sravvpl_size-large');
      wrapper.classList.add('sravvpl_autohide');
    }
  }
});

// Optionally, you can reset the flag after a timeout if you want to allow it again
document.addEventListener('mouseup', function () {
  setTimeout(() => {
    shouldPreventClassChange = true; // Re-enable class change after mouse up
  }, 1000); // Adjust the delay as needed
});