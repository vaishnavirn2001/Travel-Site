//Child window 
let loginWindow;
function openLoginWindow() {
  const leftPosition = (screen.width - 100);
  const topPosition = (screen.height - 200);

  loginWindow = window.open('contactus.html', '_blank', `width=850,height=850,left=${leftPosition},top=${topPosition}`);

  if (loginWindow) {
    loginWindow.focus();
  }
}

//Close child window 
function closeChild() {
  window.close();
}

//Cookie
function createCookie() {
  var name = document.getElementById("name").value;
  var expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = "username=" + name + "; expires=" + expires.toUTCString();
  alert("Sending message...");
}

// Slideshow 
Pictures = new Array("images/camping-1.jpg", "images/camping-2.jpg", "images/camping-3.jpg", "images/camping-4.jpg", "images/camping-5.jpg", "images/camping-6.jpg");
CurrentPicture = 0;
var slideShowInterval; // Variable to hold the interval ID

function startSlideShow() {
    // Start the slideshow with a 3-second interval (3000 milliseconds)
    slideShowInterval = setInterval(function() {
        RunSlideShow(1); // Move forward
    }, 3000);
}

function stopSlideShow() {
    // Stop the slideshow by clearing the interval
    clearInterval(slideShowInterval);
}

function RunSlideShow(ForwardBack) {
    if (document.images) {
        CurrentPicture = CurrentPicture + ForwardBack;
        if (CurrentPicture > (Pictures.length - 1)) {
            CurrentPicture = 0;
        }
        if (CurrentPicture < 0) {
            CurrentPicture = Pictures.length - 1;
        }
        document.PictureDisplay.src = Pictures[CurrentPicture];
    }
}

// Call startSlideShow to begin the slideshow
startSlideShow();
