// Function to display artworks
function displayArtworks() {
  // Get the artworks section element
  let artworksSection = document.getElementById("artworks-section");

  // Clear the section
  artworksSection.innerHTML = "";

  // Loop through the artworks array and create a card for each artwork
  artworks.forEach(function(artwork) {
    // Create a card element
    let card = document.createElement("div");
    card.classList.add("card");

    // Create an image element and set the source to the artwork image URL
    let img = document.createElement("img");
    img.src = artwork.imageUrl;
    img.alt = artwork.title;

    // Create a heading element and set the text to the artwork title
    let heading = document.createElement("h3");
    heading.textContent = artwork.title;

    // Create a paragraph element and set the text to the artwork artist name and date
    let artistAndDate = document.createElement("p");
    artistAndDate.textContent = `${artwork.artist} (${artwork.date})`;

    // Create a paragraph element and set the text to the artwork medium and location
    let mediumAndLocation = document.createElement("p");
    mediumAndLocation.textContent = `${artwork.medium} - ${artwork.location}`;

    // Append the image, heading, artistAndDate, and mediumAndLocation elements to the card
    card.appendChild(img);
    card.appendChild(heading);
    card.appendChild(artistAndDate);
    card.appendChild(mediumAndLocation);

    // Append the card to the artworks section
    artworksSection.appendChild(card);
  });
}

// Function to display artists
function displayArtists() {
  // Get the artists section element
  let artistsSection = document.getElementById("artists-section");

  // Clear the section
  artistsSection.innerHTML = "";

  // Loop through the artists array and create a card for each artist
  artists.forEach(function(artist) {
    // Create a card element
    let card = document.createElement("div");
    card.classList.add("card");

    // Create an image element and set the source to the artist image URL
    let img = document.createElement("img");
    img.src = artist.imageUrl;
    img.alt = artist.name;

    // Create a heading element and set the text to the artist name
    let heading = document.createElement("h3");
    heading.textContent = artist.name;

    // Create a paragraph element and set the text to the artist nationality and birth/death years
    let nationalityAndYears = document.createElement("p");
    nationalityAndYears.textContent = `${artist.nationality} (${artist.birthYear}-${artist.deathYear})`;

    // Append the image, heading, and nationalityAndYears elements to the card
    card.appendChild(img);
    card.appendChild(heading);
    card.appendChild(nationalityAndYears);

    // Append the card to the artists section
    artistsSection.appendChild(card);
  });
}

function displayExhibitions() {
  // Get the container where we will add the exhibition information
  const container = document.querySelector(".exhibitions-container");

  // Loop through the exhibitions array and create an HTML element for each one
  for (let i = 0; i < exhibitions.length; i++) {
    // Create a div element to hold the exhibition information
    const exhibitionDiv = document.createElement("div");
    exhibitionDiv.classList.add("exhibition");

    // Create a heading element and set the text to the exhibition title
    const title = document.createElement("h2");
    title.textContent = exhibitions[i].title;
    exhibitionDiv.appendChild(title);

    // Create an image element and set the source to the exhibition image
    const image = document.createElement("img");
    image.src = exhibitions[i].image;
    exhibitionDiv.appendChild(image);

    // Create a paragraph element and set the text to the exhibition description
    const description = document.createElement("p");
    description.textContent = exhibitions[i].description;
    exhibitionDiv.appendChild(description);

    // Create a button element to view the exhibition details and set the text to "View Details"
    const button = document.createElement("button");
    button.textContent = "View Details";
    exhibitionDiv.appendChild(button);

    // Add an event listener to the button to display the exhibition details when clicked
    button.addEventListener("click", function () {
      displayExhibitionDetails(i);
    });

    // Add the exhibition div to the container
    container.appendChild(exhibitionDiv);
  }
}


// Add event listeners to navigation links
document.getElementById("nav-artworks").addEventListener("click", function() {
  toggleActive("nav-artworks");
  showContent("artworks");
});
document.getElementById("nav-artists").addEventListener("click", function() {
  toggleActive("nav-artists");
  showContent("artists");
});
document.getElementById("nav-exhibitions").addEventListener("click", function() {
  toggleActive("nav-exhibitions");
  showContent("exhibitions");
});
document.getElementById("nav-rooms").addEventListener("click", function() {
  toggleActive("nav-rooms");
  showContent("rooms");
});

// Toggle active class on navigation links
function toggleActive(id) {
  // Remove active class from all links
  var links = document.getElementsByClassName("nav-link");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  // Add active class to selected link
  document.getElementById(id).classList.add("active");
}

// Show content section
function showContent(id) {
  // Hide all content sections
  var sections = document.getElementsByClassName("content-section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  // Show selected section
  document.getElementById(id).style.display = "block";
}

// Initialize page by showing default content
toggleActive("nav-artworks");
showContent("artworks");

