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

document.addEventListener('mousemove', function (event) {
  const wrapper = document.querySelector('.sravvpl_wrapper');
  
  if (wrapper) {
    // Prevent class change on mouse movement
    if (wrapper.classList.contains('sravvpl_size-large')) {
      wrapper.classList.remove('sravvpl_size-large');
      wrapper.classList.add('sravvpl_autohide');
    }
  }
});

