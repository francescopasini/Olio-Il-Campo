document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    const burgerIcon = document.querySelector('.burger-icon');
    
    // Debug logs
    console.log('Burger menu element:', burgerMenu);
    console.log('Main nav element:', mainNav);
    console.log('Burger icon element:', burgerIcon);
    
    // Make sure the burger menu is visible
    if (burgerMenu) {
        burgerMenu.style.display = 'block !important';
        burgerMenu.style.position = 'fixed';
        burgerMenu.style.top = '20px';
        burgerMenu.style.right = '20px';
        burgerMenu.style.zIndex = '9999';
        console.log('Burger menu styles applied');
    } else {
        console.error('Burger menu element not found!');
    }
    
    // Toggle menu when burger icon is clicked
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function(e) {
            console.log('Burger menu clicked');
            e.stopPropagation(); // Prevent event from bubbling up
            mainNav.classList.toggle('active');
            burgerIcon.classList.toggle('active');
            
            // Add a class to the body to prevent scrolling when menu is open
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !burgerMenu.contains(event.target) && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            burgerIcon.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default behavior - let the navigation happen
            setTimeout(() => {
                mainNav.classList.remove('active');
                burgerIcon.classList.remove('active');
                document.body.classList.remove('menu-open');
            }, 100); // Small delay to ensure navigation happens first
        });
    });
    
    // Prevent clicks inside the menu from closing it
    mainNav.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create email body
            const emailBody = `
                Nome: ${name}
                Email: ${email}
                Messaggio: ${message}
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:francesco.pasini@live.it?subject=Nuovo messaggio da ${name}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Grazie per il tuo messaggio! Si aprirà il tuo client email per inviare il messaggio.');
            
            // Reset form
            contactForm.reset();
        });
    }
}); 