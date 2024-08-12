// change navbar background on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0);
});

// Show/Hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // chenge icon also
        const icon = faq.querySelector('.faq_icon i');
        // console.log(icon.className);
        if(icon.className == "uil uil-plus") {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
});

// Show/Hide nav menu
const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#open-menu-btn"); 
const closeBtn = document.querySelector("#close-menu-btn"); 

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});