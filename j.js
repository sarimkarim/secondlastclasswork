// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('changeTextBtn');
  const displayText = document.getElementById('displayText');

  btn.addEventListener('click', () => {
    displayText.textContent = "You clicked the button! 🎉";
  });
});
