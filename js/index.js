const dolls = [
    {
        name: 'Harper Dormindo',
        image: 'assets/Harper Dormindo.jpg',
        description: 'Bebê Reborn Harper, com expressão serena e tranquila durante o sono.'
    },
    {
        name: 'Maize Menina',
        image: 'assets/Maize Menina.jpg',
        description: 'Linda bebê Reborn Maize, delicada e encantadora.'
    },
    {
        name: 'Maize Menino',
        image: 'assets/Maize Menino.jpg',
        description: 'Charmoso bebê Reborn Maize, cheio de personalidade.'
    },
    {
        name: 'Mary',
        image: 'assets/Mary.jpg',
        description: 'Bebê Reborn Mary, com traços suaves e realistas.'
    },
    {
        name: 'Saskia',
        image: 'assets/Saskia.jpg',
        description: 'Encantadora bebê Reborn Saskia, com detalhes impressionantes.'
    }
];

// WhatsApp number - Replace with actual number
const whatsappNumber = '5515981880942';

// Function to open WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os bebês reborn.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Function to create doll cards
function createDollCards() {
    const dollsGrid = document.getElementById('dollsGrid');
    
    dolls.forEach(doll => {
        const dollCard = document.createElement('div');
        dollCard.className = 'doll-card';
        
        dollCard.innerHTML = `
            <div class="doll-image-container">
                <img src="${doll.image}" alt="${doll.name}">
            </div>
            <h3>${doll.name}</h3>
            <p>${doll.description}</p>
        `;
        
        dollsGrid.appendChild(dollCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createDollCards();
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Atualize a função createDollCards
function createDollCards() {
    const dollsGrid = document.getElementById('dollsGrid');
    
    dolls.forEach((doll, index) => {
        const dollCard = document.createElement('div');
        dollCard.className = 'doll-card';
        
        dollCard.innerHTML = `
            <div class="doll-image-container">
                <img src="${doll.image}" alt="${doll.name}">
            </div>
            <h3>${doll.name}</h3>
            <p>${doll.description}</p>
        `;
        
        dollsGrid.appendChild(dollCard);
        
        // Animação de entrada com delay
        setTimeout(() => {
            dollCard.classList.add('visible');
        }, index * 200);
    });
}

// Adicione isso no final do index.js
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 1000);
});

// Adicione isso ao JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add to index.js
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// Adicionar no index.js
const sections = document.querySelectorAll('.blog-section, .policy-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Adicionar no index.js
const dollCards = document.querySelectorAll('.doll-card');

const dollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

dollCards.forEach(card => {
    dollObserver.observe(card);
});