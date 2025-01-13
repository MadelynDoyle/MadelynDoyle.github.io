class Toy {
    constructor(name, price, agerange, rating, image) {
        this.name = name;
        this.price = price;
        this.agerange = agerange;
        this.rating = rating;
        this.image = image;
    }

    get details() {
        return `${this.name}, $${this.price}, Rating: ${this.rating}`;
    }

    getToyItem() {
        const toyElement = document.createElement('div');
        toyElement.classList.add('toy');

        const imageElement = document.createElement('img');
        imageElement.src = `images/${this.image}`;
        toyElement.appendChild(imageElement);

        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');

        const detailsElement = document.createElement('div');
        detailsElement.classList.add('toy-details');

        const nameElement = document.createElement('div');
        nameElement.classList.add('toy-name');
        nameElement.textContent = this.name;

        const priceElement = document.createElement('div');
        priceElement.classList.add('toy-price');
        priceElement.textContent = `$${this.price}`;

        const ratingElement = document.createElement('div');
        ratingElement.classList.add('toy-rating');
        ratingElement.textContent = `Rating: ${this.rating}`;

        detailsElement.appendChild(nameElement);
        detailsElement.appendChild(priceElement);
        detailsElement.appendChild(ratingElement);

        overlayElement.appendChild(detailsElement);
        toyElement.appendChild(overlayElement);

        return toyElement;
    }
}

const toys = [
    new Toy('Toy 1', 15.99, 4.5, 'toy1.jpg'),
    new Toy('Toy 2', 19.99, 3.8, 'toy2.jpg'),
    new Toy('Toy 3', 12.99, 4.0, 'toy3.jpg'),
    new Toy('Toy 4', 14.99, 4.2, 'toy4.jpg'),
    new Toy('Toy 5', 9.99, 3.5, 'toy5.jpg'),
    new Toy('Toy 6', 22.99, 4.7, 'toy6.jpg'),
];

const toyContainer = document.getElementById('toy-container');

toys.forEach((toy) => {
    toyContainer.appendChild(toy.getToyItem());
});
