function toggleNav() {
    let nav = document.getElementById("nav-menu");

    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block"; 
    } else {
        nav.style.display = "none"; 
    }
}


const getProducts = async () => {
    const url = "https://madelyndoyle.github.io/csce242/projects/part6/products.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
};

const getPork = async () => {
    const url = "https://madelyndoyle.github.io/csce242/projects/part6/pork.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
};

const showProducts = async () => {
    const products = await getProducts();
    const productSection = document.getElementById("product-section");

    if (!products || products.length === 0) {
        productSection.innerHTML = "<p>No products available.</p>";
        return;
    }


    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h4>${product.name}</h4>
            <p><strong>Cut:</strong> ${product.cutDescription}</p>
            <p><strong>Weight:</strong> ${product.averageWeight}</p>
            <p><strong>Price:</strong> ${product.pricePerPound}</p>
        `;

        productSection.appendChild(productDiv);
    });
};

showProducts();

const showPork = async () => {
    const porks = await getPork();
    const porkSection = document.getElementById("pork-section");

    if (!porks || porks.length === 0) {
        porkSection.innerHTML = "<p>No products available.</p>";
        return;
    }

    porks.forEach((product) => {
        const porkDiv = document.createElement("div");
        porkDiv.classList.add("pork-card");

        porkDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h4>${product.name}</h4>
            <p><strong>Cut:</strong> ${product.cutDescription}</p>
            <p><strong>Weight:</strong> ${product.averageWeight}</p>
            <p><strong>Price:</strong> ${product.pricePerPound}</p>
        `;

        porkSection.appendChild(porkDiv);
    });
};

showPork();
