console.log("JavaScript is working!")
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  /* https://www.w3schools.com/howto/howto_js_dropdown.asp */
  

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 6 seconds

}

window.onload = function () { 
    let slides =  
        document.getElementsByClassName('carousel-item'); 
  
    function addActive(slide) { 
        slide.classList.add('active'); 
    } 
  
    function removeActive(slide) { 
        slide.classList.remove('active'); 
    } 
  
    addActive(slides[0]); 
    setInterval(function () { 
        for (let i = 0; i < slides.length; i++) { 
            if (i + 1 == slides.length) { 
                addActive(slides[0]); 
                setTimeout(removeActive, 350, slides[i]); 
                break; 
            } 
            if (slides[i].classList.contains('active')) { 
                setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i + 1]); 
                break; 
            } 
        } 
    }, 1500); 
};

//Aion summary animation//
function Aionsummary(){ 

  // animationn
  const tl = new TimelineMax({delay: 1})
  tl.from('.aionsummary', {duration: 1, x: 500, opacity: 0})
    
}

window.onload = Aionsummary;

//jump to aion summary
//let slBtn = document.querySelectorAll('.sl-button')
//slBtn.forEach(btn => {
    //btn.addEventListener('click', () => {
        //meow//.moveTo(3); //doesn't use index form (aka '3' NOT '2')
      //})
    //})

    document.addEventListener("DOMContentLoaded", function () {
      // Get the button and the target section
      var button = document.querySelector(".sl-button");
      var section2 = document.querySelector(".box");
  
      // Add click event listener to the button
      button.addEventListener("click", function () {
          // Scroll to the target section
          section2.scrollIntoView({ behavior: "smooth" });
      });
  });
  