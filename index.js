const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview" , rating: 3, comment: "A bit salty." }
];

document.addEventListener('DOMContentLoaded', main);

function main() {
    displayRamens();
    addSubmitListener();
    displayFirstRamen(); // Display the first ramen details on page load
}

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
    document.getElementById('ramen-rating').textContent = ramen.rating ? `Rating: ${ramen.rating}` : '';
    document.getElementById('ramen-comment').textContent = ramen.comment ? `Comment: ${ramen.comment}` : '';
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const newRamen = {
            name: document.getElementById('new-ramen-name').value,
            restaurant: document.getElementById('new-ramen-restaurant').value,
            image: document.getElementById('new-ramen-image').value,
            rating: document.getElementById('new-ramen-rating').value,
            comment: document.getElementById('new-ramen-comment').value
        };
        ramens.push(newRamen);
        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.width = 50;
        img.height = 50;
        img.addEventListener('click', () => handleClick(newRamen));
        document.getElementById('ramen-menu').appendChild(img);
    });
}

function displayFirstRamen() {
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}
