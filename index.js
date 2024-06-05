// Get the link and dropdown content elements
var kontaktLink = document.getElementById("kontaktLink");
var dropdownContent = document.getElementById("dropdownContent");

// Add click event listener to the link
kontaktLink.addEventListener("click", function() {
    // Toggle the active class to show/hide dropdown content
    dropdownContent.classList.toggle("active");
});
