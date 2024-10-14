const slider = document.getElementById('verticalSlider');
const positiveValue = document.getElementById('positiveValue');
const negativeValue = document.getElementById('negativeValue');
const fill = document.querySelector('.slider-fill');

// Function to update displayed values and color fill
function updateValues(value) {
  if (value > 50) {
    positiveValue.textContent = value;
    negativeValue.textContent = "50"; // Fixed center value for bottom
    updateFill(value, 'up'); // Fill when moving up
  } else if (value < 50) {
    positiveValue.textContent = "50"; // Fixed center value for top
    negativeValue.textContent = value;
    updateFill(value, 'down'); // Fill when moving down
  } else {
    positiveValue.textContent = "50";
    negativeValue.textContent = "50";
    fill.style.height = `0%`; // Reset fill at center
  }
}

// Function to update the fill height based on direction
function updateFill(value, direction) {
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

// Initialize with default value
updateValues(slider.value);

// Update on input
slider.addEventListener('input', () => {
  updateValues(slider.value);
});
