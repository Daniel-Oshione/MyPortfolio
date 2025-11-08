document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const dropDown = document.querySelector('.drop_down');
    const head = document.getElementById('head');
    const body = document.getElementById('body');
    const copy = document.getElementById('copywright');
    const currentYear = new Date().getFullYear();


    if (copy) {
        const currentYear = new Date().getFullYear();
        copy.textContent = `${currentYear}`;
    }

    toggleButton.addEventListener("click", () => {
      const isVisible = dropDown.classList.toggle('visible');

      if (isVisible) {
        head.style.backdropFilter= "blur(10px)";
        if (body) body.style.overflow = "hidden";
        toggleButton.textContent = `X`;
      }
      else{
        head.style.backdropFilter= "blur(0)";
        if (body) body.style.overflow = "visible";
        toggleButton.textContent = `☰`;
      }
    });
  }); 

