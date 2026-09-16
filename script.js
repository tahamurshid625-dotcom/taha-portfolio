// Mobile menu

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Close menu after clicking navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});


// Contact form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Message submitted successfully!");

        this.reset();

    });