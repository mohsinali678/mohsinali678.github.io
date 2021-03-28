const projectCards = document.querySelectorAll("#projects div");
projectCards.forEach(projectCard => {
    projectCard.addEventListener("mouseover", (e) => {
        projectCard.classList.add('img-darken');
        projectCard.childNodes[3].classList.remove('link-brighten');
    })

    projectCard.addEventListener("mouseout", (e) => {
        projectCard.classList.remove('img-darken');
        projectCard.childNodes[3].classList.add('link-brighten');
     })
})


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }