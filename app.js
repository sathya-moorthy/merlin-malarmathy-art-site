const artworks = [
  {id:"veiled-queen", title:"Veiled Queen", medium:"Oil on Canvas", size:"72 × 60 cm", year:"2026", price:"¥180,000", image:"images/veiled-queen.jpg", available:true},
  {id:"royal-rest", title:"Royal Rest", medium:"Oil on Canvas", size:"72 × 91 cm", year:"2026", price:"¥145,000", image:"images/royal-rest.png", available:true},
  {id:"kingfisher-flight", title:"Kingfisher's Flight", medium:"Oil on Canvas", size:"90 × 65 cm", year:"2026", price:"¥220,000", image:"images/kingfisher-flight.png", available:true},
  {id:"soft-distance", title:"Soft Distance", medium:"Oil on Canvas", size:"60 × 45 cm", year:"2025", price:"¥125,000", image:"images/soft-distance.svg", available:true},
  {id:"first-light", title:"First Light", medium:"Oil on Canvas", size:"50 × 40 cm", year:"2025", price:"¥95,000", image:"images/first-light.svg", available:false},
  {id:"still-water", title:"Still Water", medium:"Oil on canvas", size:"100 × 70 cm", year:"2024", price:"¥240,000", image:"images/still-water.svg", available:true}
];

function card(a){
 return `<a class="artwork-card" href="artwork.html?id=${a.id}">
   <div class="image-wrap"><img src="${a.image}" alt="${a.title}"></div>
   <div class="card-meta"><div><h3>${a.title}</h3><p>${a.medium} · ${a.size}</p></div><span>${a.available ? a.price : "Sold"}</span></div>
 </a>`;
}
const galleries = document.querySelectorAll("#gallery");
galleries.forEach(g => g.innerHTML = artworks.map(card).join(""));

const target = document.querySelector("#artwork");
if(target){
 const id = new URLSearchParams(location.search).get("id") || artworks[0].id;
 const a = artworks.find(x => x.id === id) || artworks[0];
 document.title = `${a.title} — Atelier`;
 target.innerHTML = `<div class="artwork-visual"><img src="${a.image}" alt="${a.title}"></div>
 <div class="artwork-info"><p class="eyebrow">Original work · ${a.year}</p><h1>${a.title}</h1>
 <dl><div><dt>Medium</dt><dd>${a.medium}</dd></div><div><dt>Dimensions</dt><dd>${a.size}</dd></div><div><dt>Price</dt><dd>${a.available ? a.price : "Sold"}</dd></div></dl>
 <p class="art-description">A study in atmosphere, balance, and quiet movement. Each surface is built by hand in the studio, allowing texture and subtle shifts in tone to remain visible.</p>
 ${a.available ? `<a class="button" href="contact.html?artwork=${encodeURIComponent(a.title)}">Inquire about this work</a>` : `<p class="sold-note">This work has been sold. Contact the studio to discuss similar works or upcoming pieces.</p><a class="text-link" href="contact.html">Contact the studio →</a>`}
 </div>`;
}