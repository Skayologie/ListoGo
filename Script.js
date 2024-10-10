document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("Container");

  // Function to load content via AJAX
  function loadContent(page) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `./${page}.html`, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        content.innerHTML = xhr.responseText; // Update content with the loaded HTML
      } else {
        content.innerHTML = "<h2>Page nssssssssssssssssssot found</h2><p>Sorry, the requested content couldn't be loaded.</p>";
      }
    };
    xhr.send();
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href').substring(1); // Get section name after #
      loadContent(target); // Load content dynamically via AJAX
      history.pushState(null, "", `#${target}`); // Update URL without page reload
    });
  });



    // Handle back/forward button
    window.addEventListener('popstate', function () {
      const hash = location.hash.substring(0) || '#home'; // Default to home if no hash
      loadContent(hash); // Load the content for the current hash
    });
  });
    
