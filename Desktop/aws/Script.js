function navigate(section) {
  // Hide all sections
  document.querySelectorAll("main section").forEach(sec => {
    sec.style.display = "none";
  });

  // Show selected section
  document.getElementById(section).style.display = "block";
}
