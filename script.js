// Navbar Toggle
const menu = document.querySelectorAll(".toggleMenu");
const links = document.querySelectorAll(".lnk");
const nav = document.querySelector(".nav");

menu.forEach((menu) => {
    menu.addEventListener("click", handleOnClickToggleMenu);
});

links.forEach((link) => {
    link.addEventListener("click", handleOnClickToggleMenu);
});

function handleOnClickToggleMenu(){
    nav.classList.toggle("nav-active");
}

// scroll
document.onscroll = function (){
    if(window.scrollY > 60){
        document.querySelector("header").style.borderBottom = "1px solid var(--secondaryTextColor), .2)";
    } else{
        document.querySelector("header").style.borderBottom = "1px solid var(--primaryBackgroundColor), .2)";
    }
};


// Testimonial Data
const testimonials = [
    {
        name: "Lana Marrie",
        job: "Student",
        image: "./images/Lana.jpg",
        testimonial: "Melody makes finding songs super easy! Just use a voice recording, and it instantly finds the song!"
    },
    {
        name: "Charlie Puth",
        job: "Singer",
        image: "./images/Charlie Puth.jpg",
        testimonial: "The music recommendations are amazing! I've discovered so many new songs that match my taste."
    },
    {
        name: "Mawar",
        job: "Entrepreuner",
        image: "./images/Mawar.jpg",
        testimonial: "I often forget song titles, but with Melody, I can find a song just from a short lyric snippet. Quick and accurate!"
    },
    {
        name: "Park Gum",
        job: "Student",
        image: "./images/park bo gum.jpg",
        testimonial: "Thanks to Melody, finding songs has never been easier. Just input some lyrics or record a clip, and it pops up in seconds. So efficient!"
    },
];

// current slider
let i = 0;
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <img src="${testimonials[i].image}" alt="${testimonials[i].name}">
    <p>${testimonials[i].testimonial}</p>
    <i class='bx bxs-quote-alt-left quote-icon'></i>
    <h3>${testimonials[i].name}</h3>
    <p>${testimonials[i].job}</p>
    `;
}

window.onload = displayTestimonial