document.addEventListener("DOMContentLoaded", () => {
    // Animation des chiffres dans "Aliance en chiffres"
    const counters = document.querySelectorAll(".stat-item h2");
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });

    // Animation pour la section "Qui sommes-nous ?"
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible");
                observer.unobserve(aboutSection);
            }
        });
    });

    observer.observe(aboutSection);
});
