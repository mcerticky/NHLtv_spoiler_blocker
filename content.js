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

  /* Hide clock */
  .sravvpl_controlbuttons-left {
    display: none !important;
  }

    /* Hide match panel on the right (useful for series-clinching game replays) */
  .player__MatchData {
    display: none !important;
  }
 
`;
document.head.appendChild(style);

// Hide the "black overlay" whenever it becomes active
// Unfortunately, this hides the buttons as well (for now)

function forceAutohide() {
  const wrapper = document.querySelector('.sravvpl_wrapper');
  if (wrapper && !wrapper.classList.contains('sravvpl_autohide')) {
    wrapper.classList.add('sravvpl_autohide');
  }
}

// check every .1 second to enforce autohide
setInterval(forceAutohide, 100);

window.onload = function() {
  if (window.location.href.includes('nhltv.nhl.com')) {
    alert("Progress bar remover enabled!");
  }
};