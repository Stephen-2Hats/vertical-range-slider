// Function to update displayed values and color fill for a specific slider
function updateValues(slider, positiveValue, negativeValue, fill) {
  const value = slider.value;
  if (value > 50) {
    positiveValue.textContent = value;
    negativeValue.textContent = "50"; // Fixed center value for bottom
    updateFill(value, 'up', fill); // Fill when moving up
  } else if (value < 50) {
    positiveValue.textContent = "50"; // Fixed center value for top
    negativeValue.textContent = value;
    updateFill(value, 'down', fill); // Fill when moving down
  } else {
    positiveValue.textContent = "50";
    negativeValue.textContent = "50";
    fill.style.height = `0%`; // Reset fill at center
  }
}

// Function to update the fill height based on direction for a specific slider
function updateFill(value, direction, fill) {
  let fillPercentage = Math.abs(value - 50); // Remove the scaling factor
  fill.style.height = `${fillPercentage}%`;

  if (direction === 'up') {
    fill.style.top = `auto`;
    fill.style.bottom = `50%`; // Fill from the bottom upward
    fill.classList.add('up');
    fill.classList.remove('down');
  } else if (direction === 'down') {
    fill.style.top = `50%`; // Fill from the top downward
    fill.style.bottom = `auto`;
    fill.classList.add('down');
    fill.classList.remove('up');
  }
}

// Initialize and set up event listeners for each slider
for (let i = 1; i <= 5; i++) {
  const slider = document.getElementById(`verticalSlider${i}`);
  const positiveValue = document.getElementById(`positiveValue${i}`);
  const negativeValue = document.getElementById(`negativeValue${i}`);
  const fill = slider.parentElement.querySelector('.slider-fill');

  // Initialize with default value
  updateValues(slider, positiveValue, negativeValue, fill);

  // Update on input
  slider.addEventListener('input', () => {
    updateValues(slider, positiveValue, negativeValue, fill);
  });
}
