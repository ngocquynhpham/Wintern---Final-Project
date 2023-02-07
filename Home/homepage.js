let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let iconLikeDefault=document.getElementById("iconLikeDefault")
let iconDislikeDefault=document.getElementById("iconDislikeDefault")
let iconLikeActive=document.getElementById("iconLikeActive")
let iconDislikeActive=document.getElementById("iconDislikeActive")
let numberLike=document.getElementById("numberLike")
let numberDislike=document.getElementById("numberDislike")
function Like(url){
    if(iconLikeDefault.style.display!=="none"){
        iconLikeDefault.style.display="none";
        iconLikeActive.style.display="inline";
        
        numberLike.innerHTML=eval(numberLike.innerHTML+"+1")
        
    }else{
        iconLikeDefault.style.display="inline";
        iconLikeActive.style.display="none";
        numberLike.innerHTML=eval(numberLike.innerHTML+"-1")
    }
  
    
}


function Dislike(){
    if(iconDislikeDefault.style.display!=="none"){
        iconDislikeDefault.style.display="none";
        iconDislikeActive.style.display="inline";
        numberDislike.innerHTML=eval(numberDislike.innerHTML+"+1")
        
    }else{
        iconDislikeDefault.style.display="inline";
        iconDislikeActive.style.display="none";
        numberDislike.innerHTML=eval(numberDislike.innerHTML+"-1")
    }
  
    
}