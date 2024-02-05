const buttons = document.querySelectorAll('.test-panel-button');
defaultHider();

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const imageId = button.id.replace('button-', 'image-');
    console.log("calling hideAllImages");
    hideAllImages();
    showImage(imageId);
  });
});

function defaultHider() {
  // Use a suitable selector to target all images within the container
  const images = document.querySelectorAll('.test-image-placeholder img:not(#staff-cover)');
  console.log(images);
  images.forEach(image => image.style.display = 'none');
}

function hideAllImages() {
    // Use a suitable selector to target all images within the container
    const images = document.querySelectorAll('.test-image-placeholder img');
    console.log(images);
    images.forEach(image => image.style.display = 'none');
  }
  
  function showImage(imageId) {
    const image = document.getElementById(imageId);
    image.style.display = 'block';
  }

function activeButton(clickedButton) {
  const allButtons = document.querySelectorAll('.test-panel-button');
  allButtons.forEach(button => button.classList.remove('active'));

  clickedButton.classList.add('active');
}

window.addEventListener('orientationchange', function(event) {
  if (event.target.screen.orientation.type === 'portrait-primary') {
    document.getElementById('mobile-orientation-prompt').style.display = 'block';
  } else {
    document.getElementById('mobile-orientation-prompt').style.display = 'none';
  }
});