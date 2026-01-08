// Language switcher
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
    });

    // Update active button
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('lang-' + lang).classList.add('active');
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu data
const menuData = [
    {
        id: 1,
        name: 'Big Breakfast',
        name_fr: 'Grand Petit-déjeuner',
        price: 24,
        category: 'breakfast',
        description: '2 thick cut smoke bacon, 2 eggs, 2 pancakes, 2 maple pork sausages, herbed hash browns',
        description_fr: '2 tranches de bacon fumé, 2 œufs, 2 crêpes, 2 saucisses de porc à l\'érable, pommes de terre aux herbes',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400'
    },
    {
        id: 2,
        name: 'Steak & Eggs',
        name_fr: 'Steak et Œufs',
        price: 20,
        category: 'breakfast',
        description: '6oz AAA sirloin steak, garlic wild mushroom, 2 eggs, herbed hash browns',
        description_fr: 'Steak de surlonge AAA de 6 oz, champignons sauvages à l\'ail, 2 œufs, pommes de terre aux herbes',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'
    },
    {
        id: 3,
        name: 'Traditional Eggs Benedict',
        name_fr: 'Œufs Bénédictine Traditionnels',
        price: 18,
        category: 'breakfast',
        description: 'English muffin topped with ham, 2 poached eggs, house-made hollandaise',
        description_fr: 'Muffin anglais garni de jambon, 2 œufs pochés, hollandaise maison',
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400'
    },
    {
        id: 4,
        name: 'Executive Burger',
        name_fr: 'Burger Exécutif',
        price: 18,
        category: 'burgers',
        description: '100% Canadian beef patty with smoke bacon, mushroom, smoke cheddar on brioche bun',
        description_fr: 'Galette de bœuf 100% canadien avec bacon fumé, champignons, cheddar fumé sur pain brioché',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
    },
    {
        id: 5,
        name: 'California Chicken Burger',
        name_fr: 'Burger au Poulet Californien',
        price: 18,
        category: 'burgers',
        description: 'Blackened chicken breast with avocado, smoke bacon, mozzarella cheese',
        description_fr: 'Poitrine de poulet noircie avec avocat, bacon fumé, fromage mozzarella',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400'
    },
    {
        id: 6,
        name: 'Southfork Burger',
        name_fr: 'Burger Southfork',
        price: 16,
        category: 'burgers',
        description: '100% Canadian beef patty with burger fixing, burger sauce on brioche bun',
        description_fr: 'Galette de bœuf 100% canadien avec garnitures, sauce burger sur pain brioché',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400'
    },
    {
        id: 7,
        name: 'Prime Rib Dinner',
        name_fr: 'Dîner de Côte de Bœuf',
        price: 35,
        category: 'mains',
        description: 'Slow roasted 8oz AAA prime rib, Yorkshire pudding, horseradish, Au jus',
        description_fr: 'Côte de bœuf AAA de 8 oz rôtie lentement, pudding Yorkshire, raifort, Au jus',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400'
    },
    {
        id: 8,
        name: 'BBQ Baby Back Ribs',
        name_fr: 'Côtes Levées BBQ',
        price: 24,
        category: 'mains',
        description: 'House broiled baby back ribs topped with BBQ sauce',
        description_fr: 'Côtes levées grillées maison nappées de sauce BBQ',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400'
    },
    {
        id: 9,
        name: 'Salmon',
        name_fr: 'Saumon',
        price: 27,
        category: 'mains',
        description: 'Blackened 8oz salmon topped with house-made hollandaise',
        description_fr: 'Saumon noirci de 8 oz nappé de hollandaise maison',
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400'
    },
    {
        id: 10,
        name: 'Seafood Marinara',
        name_fr: 'Fruits de Mer Marinara',
        price: 21,
        category: 'pasta',
        description: 'Spaghetti pasta, mussels, shrimp, calamari tossed with marinara sauce',
        description_fr: 'Pâtes spaghetti, moules, crevettes, calamars mélangés avec sauce marinara',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400'
    },
    {
        id: 11,
        name: 'Bacon Fettuccine Alfredo',
        name_fr: 'Fettuccine Alfredo au Bacon',
        price: 19,
        category: 'pasta',
        description: 'Fettuccine pasta tossed with bacon Alfredo sauce',
        description_fr: 'Pâtes fettuccine mélangées avec sauce Alfredo au bacon',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400'
    },
    {
        id: 12,
        name: 'Caesar Salad',
        name_fr: 'Salade César',
        price: 16,
        category: 'pasta',
        description: 'Crispy romaine with bacon, shredded parmesan, garlic croutons',
        description_fr: 'Romaine croustillante avec bacon, parmesan râpé, croûtons à l\'ail',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400'
    },
    {
        id: 13,
        name: 'Signature Wings',
        name_fr: 'Ailes Signature',
        price: 16,
        category: 'appetizers',
        description: 'House spiced wings with your choice of flavour (10pcs)',
        description_fr: 'Ailes épicées maison avec votre choix de saveur (10 pcs)',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400'
    },
    {
        id: 14,
        name: 'Nachos',
        name_fr: 'Nachos',
        price: 16,
        category: 'appetizers',
        description: 'Tortilla chips topped with onion, tomato, jalapeños, olives, peppers, cheese',
        description_fr: 'Croustilles tortilla garnies d\'oignon, tomate, jalapeños, olives, poivrons, fromage',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400'
    },
    {
        id: 15,
        name: 'Fish and Chips',
        name_fr: 'Poisson-Frites',
        price: 19,
        category: 'appetizers',
        description: 'House-made fresh battered fried fish with tartar sauce, coleslaw, fries',
        description_fr: 'Poisson frit en pâte fraîche maison avec sauce tartare, salade de chou, frites',
        image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400'
    }
];

// Display menu items
function displayMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${currentLang === 'en' ? item.name : item.name_fr}</h3>
                    <span class="menu-item-price">$${item.price}</span>
                </div>
                <p>${currentLang === 'en' ? item.description : item.description_fr}</p>
            </div>
        </div>
    `).join('');
}

// Filter menu
function filterMenu(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

// Initialize menu on page load
document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menuData);

    // Set minimum date for reservation
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Reservation form submission
const reservationForm = document.getElementById('reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('res-name').value,
            email: document.getElementById('res-email').value,
            phone: document.getElementById('res-phone').value,
            guests: document.getElementById('res-guests').value,
            date: document.getElementById('res-date').value,
            time: document.getElementById('res-time').value,
            notes: document.getElementById('res-notes').value
        };

        // Here you would send this data to your backend/POS system
        console.log('Reservation Data:', formData);

        // Show success message
        alert(currentLang === 'en' ? 
            'Thank you! Your reservation has been submitted. We will contact you shortly to confirm.' :
            'Merci! Votre réservation a été soumise. Nous vous contacterons sous peu pour confirmer.');

        // Reset form
        reservationForm.reset();

        // In production, you would integrate with your POS API like this:
        // fetch('/api/reservations', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Reservation confirmed!');
        // });
    });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        alert(currentLang === 'en' ? 
            'Thank you for your message! We will get back to you soon.' :
            'Merci pour votre message! Nous vous répondrons bientôt.');

        contactForm.reset();
    });
}

// Order Modal Functions
let cart = [];

function openOrderModal() {
    document.getElementById('order-modal').style.display = 'block';
    displayOrderItems(menuData);
    updateCart();
}

function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function displayOrderItems(items) {
    const orderItemsDiv = document.getElementById('order-items');
    if (!orderItemsDiv) return;

    orderItemsDiv.innerHTML = items.map(item => `
        <div class="order-item" data-category="${item.category}">
            <div class="order-item-info">
                <h4>${currentLang === 'en' ? item.name : item.name_fr}</h4>
                <p>${currentLang === 'en' ? item.description : item.description_fr}</p>
            </div>
            <span class="order-item-price">$${item.price}</span>
            <button onclick="addToCart(${item.id})">
                ${currentLang === 'en' ? 'Add' : 'Ajouter'}
            </button>
        </div>
    `).join('');
}

function filterOrderMenu(category) {
    const buttons = document.querySelectorAll('.order-category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayOrderItems(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        displayOrderItems(filtered);
    }
}

function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    if (!cartItemsDiv || !cartTotalSpan) return;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        cartTotalSpan.textContent = '$0.00';
        return;
    }

    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${currentLang === 'en' ? item.name : item.name_fr} x${item.quantity}</span>
            <div>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #666; padding: 5px 10px; border: none; color: white; border-radius: 5px; cursor: pointer;">-</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalSpan.textContent = '$' + total.toFixed(2);
}

function submitOrder() {
    if (cart.length === 0) {
        alert(currentLang === 'en' ? 
            'Your cart is empty. Please add items to order.' :
            'Votre panier est vide. Veuillez ajouter des articles pour commander.');
        return;
    }

    const orderData = {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString()
    };

    // Here you would send this to your POS system
    console.log('Order Data:', orderData);

    // Show success message
    alert(currentLang === 'en' ? 
        `Thank you for your order! Total: $${orderData.total.toFixed(2)}\n\nYour order has been sent to our kitchen. We will prepare it shortly!` :
        `Merci pour votre commande! Total: $${orderData.total.toFixed(2)}\n\nVotre commande a été envoyée à notre cuisine. Nous la préparerons sous peu!`);

    // Clear cart and close modal
    cart = [];
    updateCart();
    closeOrderModal();

    // POS Integration Example:
    // fetch('/api/orders', {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'X-POS-API-Key': 'your-pos-api-key'
    //     },
    //     body: JSON.stringify(orderData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Order confirmed:', data.orderNumber);
    //     alert('Order #' + data.orderNumber + ' confirmed!');
    // })
    // .catch(error => {
    //     console.error('Order error:', error);
    //     alert('There was an error processing your order. Please try again.');
    // });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .menu-item, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
