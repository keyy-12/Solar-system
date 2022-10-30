function toTheTop() {
    window.scrollTo(0, 0)
  }
  
  function scrollFunction() {
    const button = document.getElementById("go-to-top");
    if (window.scrollY > 600) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  
  window.onscroll = scrollFunction;