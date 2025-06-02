
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

  let currentPosition = 0;

  document.getElementById("prev").addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
      updateContent();
    }
  });

  document.getElementById("next").addEventListener("click", function () {
    if (currentPosition < pages.length - 1) {
      currentPosition++;
      updateContent();
    }
  });

  function updateContent() {
    // Redirect to the correct page
    window.location.href = pages[currentPosition];
  }
