function filterLinks(category) {

```
const cards = document.querySelectorAll(".link-card");
const buttons = document.querySelectorAll(".category");

buttons.forEach(button => {
    button.classList.remove("active");
});

event.target.classList.add("active");

let visible = 0;

cards.forEach(card => {

    if (category === "all" || card.dataset.category === category) {
        card.style.display = "flex";
        visible++;
    } else {
        card.style.display = "none";
    }

});

document.getElementById("resultCount").textContent =
    visible + (visible === 1 ? " website" : " websites");
```

}

function searchLinks() {

```
const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

const cards = document.querySelectorAll(".link-card");

let visible = 0;

cards.forEach(card => {

    const name = card.dataset.name.toLowerCase();
    const description = card
        .querySelector("p")
        .textContent
        .toLowerCase();

    if (
        name.includes(search) ||
        description.includes(search)
    ) {
        card.style.display = "flex";
        visible++;
    } else {
        card.style.display = "none";
    }

});

document.getElementById("resultCount").textContent =
    visible + (visible === 1 ? " website" : " websites");

const noResults = document.getElementById("noResults");

if (visible === 0) {
    noResults.style.display = "block";
} else {
    noResults.style.display = "none";
}
```

}
