document.addEventListener("DOMContentLoaded", function () {
  // List of actual page names
  const pages = [
    "BlogWeek1.html",
    "BlogWeek2.html",
    "BlogWeek3.html",
    "BlogWeek4.html",
    "BlogWeek7.html",
    "BlogWeek10.html",
    "BlogWeek11.html",
    "BlogWeek12.html",
    "BlogWeek13.html"
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
