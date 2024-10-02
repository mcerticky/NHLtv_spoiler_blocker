// TODO: 
// add options to customize/disable features

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

// Function to simulate the play/pause button click
function simulatePlayPauseButtonClick() {
  const pauseButton = document.querySelector('.sravvpl_pause.sravvpl_controls-button');
  const playButton = document.querySelector('.sravvpl_play.sravvpl_controls-button');

  if (pauseButton && pauseButton.style.display !== 'none') {
    // If the pause button is visible, simulate pause click
    console.log('Pause button found, simulating click');
    pauseButton.click();  
  } else if (playButton && playButton.style.display !== 'none') {
    // If the play button is visible, simulate play click
    console.log('Play button found, simulating click');
    playButton.click();
  } else {
    console.log('Neither play nor pause button found.');
  }
}

// Add a click event listener to simulate play/pause button click when the mouse clicks anywhere on the video
document.addEventListener('click', function () {
  simulatePlayPauseButtonClick();
});