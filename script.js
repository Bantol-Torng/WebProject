function moveSlide(direction) {
    const slider = document.getElementById('projectSlider');
    const scrollAmount = 295; 
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
function moveAboutSlide(direction) {
    const slider = document.getElementById('aboutSlider');
    const scrollAmount = 295; 
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(18, 18, 18, 0.6)";
    } else {
        nav.style.background = "transparent";
    }
});