const artworks = [
  {
    title: "The Art of the Crepe",
    image: "../images/art1.jpg",
    alt: "Watercolor illustration of stacked savory crepes garnished with strawberries and cream",
    favorite: false
  },
  {
    title: "Ruby Red Interior",
    image: "../images/art2.jpg",
    alt: "Watercolor illustration of a halved grapefruit showing pink segments and white pith",
    favorite: false
  },
  {
    title: "Summer Harvest",
    image: "../images/art3.jpg",
    alt: "Still life painting of red cherries on a decorated platter and yellow plums in a bowl against a dark background",
    favorite: false
  },
  {
    title: "A Slice of Heaven",
    image: "../images/art4.jpg",
    alt: "Oil painting of a pizza slice with melted cheese, peppers, tomatoes, and black olives on a golden crust",
    favorite: false
  },

  {
    title: "Two Slices of Cake",
    image: "../images/art5.jpg",
    alt: "Two slices of Battenberg cake with pink and yellow squares, maripan coating, and decorative icing flowers, rendered in soft pastels.",
    favorite: false
  },
  {
    title: "Nighthawks",
    image: "../images/art6.jpg",
    alt: "Edward Hopper's iconic 1942 painting 'Nighthawks' showing a late-night diner with illuminated windows, three patrons at the counter, and empty dark streets outside, capturing themes of urban loneliness.",
    favorite: false
  }
];


const gallery = document.getElementById("gallery");

function renderGallery() {
  // Clear existing gallery content
  gallery.innerHTML = "";

  // Loop through array and create elements
  artworks.forEach((artwork) => {
    const card = document.createElement("article");
    card.classList.add("art-card");

    if (artwork.favorite) {
      card.classList.add("favorite");
    }

    const img = document.createElement("img");
    img.src = artwork.image;
    img.alt = artwork.alt;

    const title = document.createElement("h3");
    title.textContent = artwork.title;

    const button = document.createElement("button");
    button.textContent = artwork.favorite ? "Unfavorite" : "Favorite";

    // CLICK EVENT
    button.addEventListener("click", () => {
      artwork.favorite = !artwork.favorite; // update array
      renderGallery();                       // update DOM
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);
    gallery.appendChild(card);
  });
}

// Initial render
renderGallery();

