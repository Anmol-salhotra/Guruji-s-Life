// Wait until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slide");

        if (slides.length === 0) return; // Prevents error if no images are found

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        index++;
        if (index > slides.length) { index = 1; }
        slides[index - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
});