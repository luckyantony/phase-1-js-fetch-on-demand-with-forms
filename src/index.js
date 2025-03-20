const init = () => {
    // Get the form element
    const inputForm = document.querySelector("form");
  
    // Add a submit event listener to the form
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from refreshing the page
  
      // Get the input value (movie ID)
      const input = document.querySelector("input#searchByID");
      const movieId = input.value;
  
      // Fetch movie data based on the input ID
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => response.json()) // Convert the response to JSON
        .then((data) => {
          // Get the title and summary elements
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the title and summary with the fetched data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    });
  };
  
  // Initialize the app when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", init);