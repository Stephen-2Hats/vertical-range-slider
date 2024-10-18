// Function to update displayed values and color fill for a specific slider
function updateValues(slider, positiveValue, negativeValue, fill) {
  const value = parseInt(slider.value, 10);
  const midpoint = (parseInt(slider.min, 10) + parseInt(slider.max, 10)) / 2;

  if (value > midpoint) {
    positiveValue.textContent = value;
    negativeValue.textContent = midpoint.toString(); // Fixed center value for bottom
    updateFill(slider, value, 'up', fill, midpoint); // Pass slider as an argument
  } else if (value < midpoint) {
    positiveValue.textContent = midpoint.toString(); // Fixed center value for top
    negativeValue.textContent = value;
    updateFill(slider, value, 'down', fill, midpoint); // Pass slider as an argument
  } else {
    positiveValue.textContent = midpoint.toString();
    negativeValue.textContent = midpoint.toString();
    fill.style.height = `0%`; // Reset fill at center
  }
}

// Function to update the fill height based on direction for a specific slider
function updateFill(slider, value, direction, fill, midpoint) {
  const sliderMin = parseInt(slider.min, 10);
  const sliderMax = parseInt(slider.max, 10);
  const sliderRange = sliderMax - sliderMin;

  // Calculate fill percentage based on the entire range of the slider
  let fillPercentage = Math.abs(value - midpoint) / (sliderRange / 2) * 50; // Scale to 50%

  // Ensure fillPercentage does not exceed 50%
  fillPercentage = Math.min(fillPercentage, 50);

  fill.style.height = `${fillPercentage}%`;

  if (direction === 'up') {
    fill.style.top = `auto`;
    fill.style.bottom = `50%`; // Fill from the bottom upward
    fill.classList.add('up');
    fill.classList.remove('down');
    console.log('Added class "up" and removed class "down"');
  } else if (direction === 'down') {
    fill.style.top = `50%`; // Fill from the top downward
    fill.style.bottom = `auto`;
    fill.classList.add('down');
    fill.classList.remove('up');
    console.log('Added class "down" and removed class "up"');
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
