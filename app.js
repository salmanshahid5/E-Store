/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["Welcome to Our Store"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const products = document.querySelector('.product-grid');
            data.forEach(element => {
                const productItems = document.createElement('div');
                productItems.className = 'product-item';
                productItems.innerHTML = `<img src="${element.image}" alt="Product 1">
                <p>${element.title}</p>
                <p>$${element.price}</p>`
                products.appendChild(productItems)
            });
        })
        .catch(error => console.log('Error fetching products:', error))
        .finally(()=>{
            loader.style.display = 'none'
        });
});