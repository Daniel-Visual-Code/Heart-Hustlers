window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const header = document.getElementById("myHeader");
  const lastScrollTop = 0; // Initialize variable to track scroll position
  const st = window.scrollY; // Get current scroll position

  if (st > lastScrollTop) {
    // Scrolling down
    header.classList.remove("shrink"); // Remove the shrinking class
  } else {
    // Scrolling up
    if (st > 50) { // Shrink header after scrolling down 50px
      header.classList.add("shrink"); // Add the shrinking class
    } else {
      header.classList.remove("shrink"); // Remove shrinking class at top
    }
  }
  lastScrollTop = st; // Update last scroll position
}












