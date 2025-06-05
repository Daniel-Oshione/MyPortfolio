document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const dropDown = document.querySelector('.drop_down');
    const head = document.getElementById('head');
  
    toggleButton.addEventListener("click", () => {
      dropDown.classList.toggle('visible');
      
      if (dropDown.classList.toggle('visble')) {
        head.style.backdropFilter= "blur(4px)";
      }
      else{
        head.style.backdropFilter= "blur(0)";
      }
    });
  });

