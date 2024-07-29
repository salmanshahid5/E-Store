/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["Welcome to Our Store"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})
const loader = document.getElementById('loader');
document.addEventListener('DOMContentLoaded', function () {
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
        .finally(() => {
            loader.style.display = 'none'
        });
});

// for electronics

document.querySelector('#electronics').addEventListener('click', async () => {
    try {
        loader.style.display = 'block';
        const electronics = fetch('https://fakestoreapi.com/products/category/electronics');
        const electronicsData = await electronics;
        if (!electronicsData.ok) {
            throw new Error('Network response was not ok');
        }
        const electronicsDataJson = await electronicsData.json();
        console.log(electronicsDataJson);
        const products = document.querySelector('.product-grid');
        products.innerHTML = "";
        electronicsDataJson.forEach((element) => {
            const productItems = document.createElement('div');
            productItems.className = 'product-item';
            productItems.innerHTML = `<img src="${element.image}" alt="Product 1">
                <p>${element.title}</p>
                <p>$${element.price}</p>`
            products.appendChild(productItems)
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    finally {
        loader.style.display = 'none';
    }
});

// for mens

document.querySelector('#mens').addEventListener('click', async () => {
    try {
        loader.style.display = 'block';
        const mens = fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
        const mensData = await mens;
        if (!mensData.ok) {
            throw new Error('Network response was not ok');
        }
        const mensDataJson = await mensData.json();
        console.log(mensData);
        const products = document.querySelector('.product-grid');
        products.innerHTML = "";
        mensDataJson.forEach((element) => {
            const productItems = document.createElement('div');
            productItems.className = 'product-item';
            productItems.innerHTML = `<img src="${element.image}" alt="Product 1">
                <p>${element.title}</p>
                <p>$${element.price}</p>`
            products.appendChild(productItems)
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    finally {
        loader.style.display = 'none';
    }
});

// for women

document.querySelector('#women').addEventListener('click', async () => {
    try {
        loader.style.display = 'block';
        const women = fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
        const womenData = await women;
        if (!womenData.ok) {
            throw new Error('Network response was not ok');
        }
        const womenDataJson = await womenData.json();
        console.log(womenDataJson);
        const products = document.querySelector('.product-grid');
        products.innerHTML = "";
        womenDataJson.forEach((element) => {
            const productItems = document.createElement('div');
            productItems.className = 'product-item';
            productItems.innerHTML = `<img src="${element.image}" alt="Product 1">
                <p>${element.title}</p>
                <p>$${element.price}</p>`
            products.appendChild(productItems)
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    finally {
        loader.style.display = 'none';
    }
});

// for Jewelery

document.querySelector('#Jewelery').addEventListener('click', async () => {
    try {
        loader.style.display = 'block';
        const Jewelery = fetch('https://fakestoreapi.com/products/category/jewelery')
        const JeweleryData = await Jewelery;
        if (!JeweleryData.ok) {
            throw new Error('Network response was not ok');
        }
        const JeweleryDataJson = await JeweleryData.json();
        console.log(JeweleryDataJson);
        const products = document.querySelector('.product-grid');
        products.innerHTML = "";
        JeweleryDataJson.forEach((element) => {
            const productItems = document.createElement('div');
            productItems.className = 'product-item';
            productItems.innerHTML = `<img src="${element.image}" alt="Product 1">
                <p>${element.title}</p>
                <p>$${element.price}</p>`
            products.appendChild(productItems)
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    finally {
        loader.style.display = 'none';
    }
});