// Get the gallery data from the API endpoint
fetch('https://mygalleryapi.com/gallery')
  .then(response => response.json())
  .then(data => {
    // Loop through the gallery data and create a card for each artwork
    const cardDeck = document.querySelector('.card-deck');
    data.forEach(artwork => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = artwork.image_url;
      image.classList.add('card-img-top');
      card.appendChild(image);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      card.appendChild(cardBody);

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = artwork.title;
      cardBody.appendChild(title);

      const artist = document.createElement('p');
      artist.classList.add('card-text');
      artist.textContent = 'By ' + artwork.artist;
      cardBody.appendChild(artist);

      const price = document.createElement('p');
      price.classList.add('card-text');
      price.textContent = 'Price: $' + artwork.price;
      cardBody.appendChild(price);

      const cardFooter = document.createElement('div');
      cardFooter.classList.add('card-footer');
      card.appendChild(cardFooter);

      const button = document.createElement('button');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Add to Cart';
      cardFooter.appendChild(button);

      cardDeck.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching gallery data:', error);
  });

// Handle the Add to Cart button click event
const cartButton = document.querySelector('#cart-button');
cartButton.addEventListener('click', event => {
  event.preventDefault();
  alert('This feature is not yet implemented.');
});
