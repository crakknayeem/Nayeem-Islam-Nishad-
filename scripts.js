document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle the nav menu when burger icon is clicked
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
  });

  // Close the nav menu when clicking anywhere outside
  document.addEventListener('click', (event) => {
      const isClickInsideNav = nav.contains(event.target);
      const isClickInsideBurger = burger.contains(event.target);

      if (!isClickInsideNav && !isClickInsideBurger) {
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
      }
  });

  // Close the nav menu when a nav link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
      });
  });
});



// Example JavaScript for interactivity

// Example of dynamically adding favorites
const favoritesList = document.getElementById('favorites-list');

// Example data (replace with your own)
const favoritesData = [
    { name: 'Paradoxical Sajid ' ,category: 'Books'},
    { name: 'Train to Busan,Khuda Hafiz' ,category: 'Movies'},
    { name: '...' , category: 'Music'},
   {  name: 'Provas,Suriya,Vijay Setupathi' ,category: 'Actor'},

 {  name: 'Sai pallabi,Shruti Hasan' ,category: 'Actress'},







];

// Function to display favorites
function displayFavorites() {
    let favoritesHTML = '';
    favoritesData.forEach(favorite => {
        favoritesHTML += `
            <div class="favorite">
                <i class="${favorite.icon} fa-2x"></i>
                
                <p><strong>Category:</strong> ${favorite.category}</p>
                <h3>${favorite.name}</h3>
            </div>
        `;
    });
    favoritesList.innerHTML = favoritesHTML;
}

// Call function to display favorites on page load
displayFavorites();
