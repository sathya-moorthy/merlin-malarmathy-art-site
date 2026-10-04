const artworks = [
    { id: "kingfisher-flight", title: "Kingfisher's Flight", year: "2026", medium: "Oil on Canvas", dimensions: "100 × 120 cm", image: "images/kingfisher-flight.jpeg", description: "A dynamic portrayal of a kingfisher in mid-flight, capturing the essence of movement and light." },
    { id: "leopard-look", title: "Leopard's Look", year: "2026", medium: "Oil on Canvas", dimensions: "90 × 110 cm", image: "images/leopard-look.jpg", description: "A close-up of a leopard's gaze, capturing the intensity of its stare." },
    { id: "veiled-queen", title: "Veiled Queen", year: "2026", medium: "Oil on Canvas", dimensions: "80 × 100 cm", image: "images/veiled-queen.TIF", description: "A regal figure shrouded in mystery, partially hidden by a veil." },
    { id: "royal-rest", title: "Royal Rest", year: "2026", medium: "Oil on Canvas", dimensions: "70 × 90 cm", image: "images/royal-rest.TIF", description: "A moment of tranquility in the midst of nature." },
];

const commissioned = [
    { id: "festive-nature", title: "Festive Nature", year: "2026", medium: "Oil on Canvas", dimensions: "100 × 120 cm", image: "images/festive-nature.jpg", description: "A vibrant depiction of the festive season." },
{ id: "mom-sons", title: "Sign of Love", year: "2026", medium: "Oil on Canvas", dimensions: "91 × 72 cm", image: "images/festive-nature.jpg", description: "A heartwarming portrayal of familial bonds." },
{ id: "pro-look", title: "Attire", year: "2026", medium: "Oil on Canvas", dimensions: "60 × 40 cm", image: "images/festive-nature.jpg", description: "A look of a seasoned professional." },
];
const gallery = document.querySelector("#gallery");
if (gallery) {
    gallery.innerHTML = artworks.map((a) => `
        <a class="card" href="artwork.html?id=${a.id}">
            <div class="cardimg">
                <img src="${a.image}" alt="${a.title}">
            </div>

            <div class="meta">
                <div>
                    <h3>${a.title}</h3>
                    <p>${a.medium}</p>
                </div>
                <span>${a.year}</span>
            </div>
        </a>
    `).join("");
}
const commission = document.querySelector("#commission");
if (commission) {
     commission.innerHTML = commissioned.map((a) => `
        <a class="card" href="artwork.html?id=${a.id}">
            <div class="cardimg">
                <img src="${a.image}" alt="${a.title}">
            </div>

            <div class="meta">
                <div>
                    <h3>${a.title}</h3>
                    <p>${a.medium}</p>
                </div>
                <span>${a.year}</span>
            </div>
        </a>
    `).join("");
}
const page = document.querySelector("#artwork");
if (page) { 
    const id = new URLSearchParams(location.search).get("id"); 
    const a = artworks.find(x => x.id === id) ||
    commissioned.find(x => x.id === id) || artworks[0]; 
    const workType = commissioned.some(x => x.id === a.id)
        ? "Commissioned work"
        : "Original work";
    page.innerHTML = `<section class="section detail">
    <a class="back" href="gallery.html">← Back to collection</a>
    <div class="detailgrid"><div class="large"><img src="${a.image}" alt="${a.title}"></div>
    <div class="info"><p class="eyebrow">${workType} · ${a.year}</p><h1>${a.title}</h1>
    <p class="desc">${a.description}</p><dl><div><dt>Medium</dt>
    <dd>${a.medium}</dd></div><div><dt>Dimensions</dt><dd>${a.dimensions}</dd></div>
    <div><dt>Year</dt><dd>${a.year}</dd></div></dl>
    <a class="button" href="contact.html">Inquire about this work <span>↗</span></a></div></div></section>` }
const menu = document.querySelector(".menu"), nav = document.querySelector("nav"); if (menu) menu.onclick = () => { nav.classList.toggle("open"); menu.classList.toggle("open") };