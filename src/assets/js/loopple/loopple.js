
// Alert dismissible function
document.querySelectorAll('.loopple-alert.loopple-alert-dismissible .close').forEach(function(button) {
  button.onclick = function() {
    var alert = this.closest('.loopple-alert'); // Find the closest parent with the alert class
    alert.classList.add('loopple-opacity-0'); // Apply the opacity class
    
    setTimeout(function() {
      alert.remove(); // Remove the specific alert
    }, 1000); // Ensure this timeout matches the CSS transition duration
  };
});

