const artworks = [
    { id: "kingfisher-flight", title: "Kingfisher's Flight", year: "2026", medium: "Oil on Canvas", dimensions: "27 × 22 cm", image: "images/kingfisher-flight.jpeg", description: "A dynamic portrayal of a kingfisher in mid-flight, capturing the essence of movement and light." },
    { id: "leopard-look", title: "Leopard's Look", year: "2026", medium: "Oil on Canvas", dimensions: "18 × 26 cm", image: "images/leopard-look.jpg", description: "A close-up of a leopard's gaze, capturing the intensity of its stare." },
    { id: "veiled-queen", title: "Veiled Queen", year: "2026", medium: "Oil on Canvas", dimensions: "72 × 60 cm", image: "images/veiled-queen.jpg", description: "A regal figure shrouded in mystery, partially hidden by a veil." },
    { id: "royal-rest", title: "Royal Rest", year: "2026", medium: "Oil on Canvas", dimensions: "91 × 72 cm", image: "images/royal-rest.jpg", description: "A moment of tranquility in the midst of nature." },
    { id: "winter-wonderland", title: "Winter Wonderland", year: "2026", medium: "Oil on Canvas", dimensions: "22 × 16 cm", image: "images/winter-wonderland.JPG", description: "A magical portrayal of a winter landscape, capturing the beauty and serenity of snow-covered trees and frozen waters." },
]; const commissioned = [
    { id: "festive-nature", title: "Festive Nature", year: "2026", medium: "Oil on Canvas", dimensions: "70 × 91 cm", image: "images/festive-nature.jpg", description: "A vibrant depiction of the festive season." },
    { id: "fun-time", title: "Sibling Love", year: "2026", medium: "Oil on Canvas", dimensions: "60 × 30 cm", image: "images/fun-time.JPG", description: "A memory of playful moments between siblings." },
    { id: "mom-sons", title: "Sign of Love", year: "2026", medium: "Oil on Canvas", dimensions: "72 × 91 cm", image: "images/mom-sons.JPG", description: "A heartwarming portrayal of familial bonds." },
    { id: "pro-look", title: "Attire", year: "2026", medium: "Oil on Canvas", dimensions: "60 × 40  cm", image: "images/attire.JPG", description: "A look of a seasoned professional." },
    { id: "sangam-tamil", title: "Sangam Tamil", year: "2026", medium: "Oil on Canvas", dimensions: "53 × 45  cm", image: "images/sangam-tamil.JPG", description: "A festival visit to the rich cultural heritage of Tamil Nadu." },
    { id: "valluvar", title: "Ayyan Valluvar", year: "2026", medium: "Oil on Canvas", dimensions: "70 × 91  cm", image: "images/valluvar.jpg", description: "Ayyan Thiruvalluvar, the great Tamil poet and philosopher." },
    { id: "marutham-japan", title: "Marutham Japan", year: "2026", medium: "Oil on Canvas", dimensions: "27 × 22  cm", image: "images/marutham-japan.JPG", description:
    { id: "kids", title: "Familial Bonds", year: "2026", medium: "Oil on Canvas", dimensions: "29 × 42  cm", image: "images/kids.jpg", description: "A moment of joy and love shared between siblings." }
];

const gallery = document.querySelector("#gallery");
if (gallery) {
    gallery.innerHTML = artworks.map((a) => `
        <a class="card" href="artwork.html?id=${a.id}">
            <div class="cardimg">
                <img src="${a.image}" alt="${a.title}">
            </div>            <div class="meta">
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
            </div>            <div class="meta">
                <div>
                    <h3>${a.title}</h3>
                    <p>${a.medium}</p>
                </div>
                <span>${a.year}</span>
            </div>
        </a>
    `).join("");
} const prints = [
    {
        id: "kingfisher-flight-print",
        title: "Kingfisher's Flight",
        year: "2026",
        "Size & Pricing": "A4 - ¥5000, A3 - ¥8000, A2 - ¥12000, A1 - ¥25000",
        image: "images/kingfisher-flight.jpeg",
        description: "A dynamic portrayal of a kingfisher in mid-flight, capturing the energy of movement and the brilliance of light."
    },
    {
        id: "veiled-queen-print",
        title: "Veiled Queen",
        year: "2026",
        "Size & Pricing": "A4 - ¥5000, A3 - ¥8000, A2 - ¥12000, A1 - ¥25000",
        image: "images/veiled-queen.jpg",
        description: "A regal and mysterious portrait exploring elegance, presence, and the quiet beauty of concealment."
    },
    {
        id: "leopard-look-print",
        title: "Leopard's Look",
        year: "2026",
        "Size & Pricing": "A4 - ¥5000, A3 - ¥8000, A2 - ¥12000, A1 - ¥25000",
        image: "images/leopard-look.jpg",
        description: "A striking study of a leopard's gaze, capturing its strength, intensity, and distinctive character."
    },
    {
        id: "royal-rest-print",
        title: "Royal Rest",
        year: "2026",
        "Size & Pricing": "A4 - ¥5000, A3 - ¥8000, A2 - ¥12000, A1 - ¥25000",
        image: "images/royal-rest.jpg",
        description: "A serene depiction of a royal figure in a moment of tranquility, showcasing the grace and dignity of nobility."
    },
    {
        id: "winter-wonderland-print",
        title: "Winter Wonderland",
        year: "2026",
        "Size & Pricing": "A4 - ¥5000, A3 - ¥8000, A2 - ¥12000, A1 - ¥25000",
        image: "images/winter-wonderland.JPG",
        description: "A magical portrayal of a winter landscape, capturing the beauty and serenity of snow-covered trees and frozen waters."
    }
]; const printGallery = document.querySelector("#prints.gallery"); if (printGallery) {
    printGallery.innerHTML = prints.map((a) => `
        <article class="card">
            <div class="cardimg">
                <img src="${a.image}" alt="${a.title}">
            </div>            <div class="meta">
                <div>
                    <h3>${a.title}</h3>
                    <p>${a.medium}</p>
                </div>                <span>Coming soon</span>
            </div>            <p class="print-description">${a.description}</p>
        </article>
    `).join("");
} 
const tutorials = [
    {
        id: "episode-01",
        episode: "Episode 01",
        title: "The World of Sketching - Daschund",
        subtitle: "Learn the process. Draw with intention.",
        image: "images/daschund.JPG",
        alt: "Daschund sketch",
        description: "Explore the fundamentals of sketching through observation, structure and expressive mark-making."
    }, {
        id: "episode-02",
        episode: "Episode 02",
        title: "The World of Sketching - Labrador",
        subtitle: "See the structure before the detail.",
        image: "images/labrador.JPG",
        alt: "Labrador sketch",
        description: "Learn how to understand form, proportion and structure before adding fine details to your drawing."
    }, {
        id: "episode-03",
        episode: "Episode 03",
        title: "The World of Sketching - Langur",
        subtitle: "Create depth through observation.",
        image: "images/langur.JPG",
        alt: "Langur sketch",
        description: "Discover how light and shadow can transform a simple sketch into a convincing three-dimensional study."
    }
]; 
const tutorialList = document.querySelector("#tutorials.tutorial-list"); if (tutorialList) {
    tutorialList.innerHTML = tutorials.map((t) => `
        <article class="tutorial-card">            <div class="tutorial-image">
                <img src="${t.image}" alt="${t.alt}">
            </div>            <div class="tutorial-content">
                <p class="eyebrow">${t.episode}</p>                <h2>${t.title}</h2>                <p class="tutorial-subtitle">
                    ${t.subtitle}
                </p>                <p class="tutorial-description">
                    ${t.description}
                </p>                <a href="#" class="button">
                    Watch episode <span>↗</span>
                </a>
            </div>        </article>
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
const menuBtn = document.querySelector(".menu"), siteNav = document.querySelector(".site-nav");
if (menuBtn && siteNav) {
    const setOpen = (open) => {
        siteNav.classList.toggle("open", open);
        menuBtn.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", open);
    };
    menuBtn.addEventListener("click", () => setOpen(!siteNav.classList.contains("open")));
    siteNav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    matchMedia("(min-width: 801px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
}
