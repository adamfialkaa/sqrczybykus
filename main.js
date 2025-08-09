// Prosty slider opinii
const slides = document.querySelectorAll('.slide');
let curr = 0;
function showSlide(n) {
  slides.forEach((el, i) => el.style.display = (i === n) ? "block" : "none");
}
showSlide(curr);
document.getElementById('prev').onclick = () => { curr = (curr + slides.length -1)%slides.length; showSlide(curr);}
document.getElementById('next').onclick = () => { curr = (curr+1)%slides.length; showSlide(curr);}
