document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.animate-text');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
});


// Modal Logic
// Modal Logic
const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.close');
const projectCards = document.querySelectorAll('.project-card');
const modalImage = document.querySelector('.project-image');
const modalTitle = document.querySelector('.modal-project-title');
const modalDescription = document.querySelector('.modal-project-description');
const githubLink = document.querySelector('.github-link');

let currentImageIndex = 0;
let currentImages = []; // Array to hold the images for the current project

// Project Data for each card (Replace with your actual data)
const projects = [
    {
        title: "MyTrash",
        description: "An e-commerce scrap dealing app made with React, Node.js, MongoDB, and Express.",
        github: "https://github.com/Sid00867/mytrash",
        images: [
            "./images/mt1.jpg",
            "./images/mt2.jpg",
            "./images/mt3.jpg",
            "./images/mt4.jpg",
            "./images/mt5.jpg",
            "./images/mt6.jpg"
        ]
    },
    {
        title: "John Conway's Game of Life",
        description: "A cellular automaton built in Python.",
        github: "https://github.com/Sid00867/gameoflife",
        images: [
            "./images/gol1.jpg",
            "./images/gol2.jpg",
            "./images/gol3.jpg"
        ]
    },
    {
        title: "Sierpiński Triangle Fractal Simulation",
        description: "An interactive simulation of Sierpiński Triangle (Mathematical Fractal Pattern) built on python using pygame",
        github: "https://github.com/Sid00867/fractal",
        images: [
            "./images/pf1.jpg",
            "./images/pf2.jpg"
        ]
    },
    {
        title: "ToDoList App",
        description: "An app created in Android Studio using Java.",
        github: "https://github.com/Sid00867/todolist",
        images: [
            "./images/dn1.jpg",
            "./images/dn2.jpg"  
        ]
    }
];

// Open modal when clicking a project card
projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projects[index];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        githubLink.href = project.github;
        currentImageIndex = 0;
        currentImages = project.images; // Set the current images to the project's images
        modalImage.src = currentImages[currentImageIndex];
        modal.style.display = 'flex';
    });
});

// Close modal when clicking 'X'
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Next/Prev image controls
document.querySelector('.next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length; // Use currentImages for navigation
    modalImage.src = currentImages[currentImageIndex]; // Set the image source to the currentImages
});

document.querySelector('.prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length; // Use currentImages for navigation
    modalImage.src = currentImages[currentImageIndex]; // Set the image source to the currentImages
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
