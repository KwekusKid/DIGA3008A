document.addEventListener("DOMContentLoaded", function () {
  // List of actual page names
  const pages = [
    "Essay1.html",
    "Essay2.html"
  ];

  let currentPage = window.location.pathname.split("/").pop();
  let currentPosition = pages.indexOf(currentPage);

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (currentPosition > 0) {
        currentPosition--;
        updateContent();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (currentPosition < pages.length - 1) {
        currentPosition++;
        updateContent();
      }
    });
  }

  function updateContent() {
    // Redirect to the correct page
    window.location.href = pages[currentPosition];
  }

});
