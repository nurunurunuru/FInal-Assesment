// Navigation Bar Toggle
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Initialize Google Map
function initMap() {
    const bangladesh = { lat: 23.685, lng: 90.3563 }; // Coordinates of Bangladesh
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: bangladesh,
    });

    // Use AdvancedMarkerElement
    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: bangladesh,
        map: map,
    });
}

// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for getting in touch! We'll get back to you soon.");
    this.reset();
});
