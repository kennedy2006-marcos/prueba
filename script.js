document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Funcionalidad de agregar al carrito
    document.querySelectorAll('.quick-add').forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = this.closest('.product-card');
            const nombre = producto.querySelector('h3').textContent;
            const precio = producto.querySelector('.price').textContent;
            
            // Lógica del carrito
            console.log(`Producto añadido: ${nombre} - ${precio}`);
            alert(`Producto añadido: ${nombre}`);
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const objetivo = document.querySelector(this.getAttribute('href'));
            if (objetivo) {
                objetivo.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Función de búsqueda
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    document.querySelectorAll('.product-card').forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if(productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Opcional: Búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    document.querySelectorAll('.product-card').forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
});