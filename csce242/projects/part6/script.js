function toggleNav() {
    let nav = document.getElementById("nav-menu");
    if (nav.style.display === "block") {
        nav.style.display = "none"; 
    } else {
        nav.style.display = "block";
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

const showProducts = async () => {
    const products = await getProducts();
    const productSection = document.getElementById("product-section");

    if (!products || products.length === 0) {
        productSection.innerHTML = "<p>No products available.</p>";
        return;
    }

    productSection.innerHTML = `<h3>Images of some of our products!</h3>`; // Reset previous content

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h4>${product.name}</h4>
            <p><strong>Type:</strong> ${product.meatType}</p>
            <p><strong>Cut:</strong> ${product.cutDescription}</p>
            <p><strong>Weight:</strong> ${product.averageWeight}</p>
            <p><strong>Price:</strong> ${product.pricePerPound}</p>
        `;

        productSection.appendChild(productDiv);
    });
};

showProducts();
