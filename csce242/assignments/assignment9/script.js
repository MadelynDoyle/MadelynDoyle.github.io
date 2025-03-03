class Dragon {
    constructor(name, dragonclass, size, fire, colors, image) {
        this.name = name;
        this.dragonclass = dragonclass;
        this.size = size;
        this.fire = fire;
        this.colors = colors;
        this.image = image;
    }

    getHTML() {
        return `
            <div class="dragon" onclick="openModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="${this.image}" alt="${this.name}">
            </div>
        `;
    }
}


const dragons = [
    new Dragon("Night Fury", "Strike Class", "Medium", "Plasma Blast", "Black", "images/NightFury.jpeg"),
    new Dragon("Death Gripper", "Strike Class", "Medium", "Acid Flame", "Black and Red, Yellow and Black, Green and Black, Blue and Black, Purple and Black, Blue and Purple ", "images/Deathgripper.jpeg"),
    new Dragon("Red Death", "Stoker Class", "Extra Large", "Methane", "Grey with Red spikes", "images/RedDeath.jpeg"),
    new Dragon("Night Terror", "Stoker Class", "Small", "Combining Flame Stream", "Black and White", "images/NightTerror.jpeg"),
    new Dragon("Crimson Goregutter", "Boulder Class", "Large", "Molten Lava", "Purple, Orange, and Cream", "images/CrimsonGoreGutter.jpeg"),
    new Dragon("Hideous Zippleback", "Mystery Class", "Large", "Gas and Spark", "Green, Orange, Blue, Gold", "images/HideousZippleback.jpeg")
];

const dragonContainer = document.getElementById("dragonContainer");
dragons.forEach(dragon => {
    dragonContainer.innerHTML += dragon.getHTML();
});

function openModal(dragonName) {
    const dragon = dragons.find(p => p.name === dragonName);
    if (dragon) {
        document.getElementById("dragonName").innerText = dragon.name;
        document.getElementById("dragonImage").src = dragon.image;
        document.getElementById("dragonClass").innerText = dragon.dragonclass;
        document.getElementById("dragonSize").innerText = dragon.size;
        document.getElementById("dragonFire").innerText = dragon.fire;
        document.getElementById("dragonColor").innerText = dragon.colors;

        document.getElementById("dragonModal").style.display = "block";
    }
}

// Close modal function
function closeModal() {
    document.getElementById("dragonModal").style.display = "none";
}
