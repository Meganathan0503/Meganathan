document.addEventListener("DOMContentLoaded", function() {
    var linkedinLink = document.getElementById("linkedin-link");
    var githubLink = document.getElementById("github-link");

    linkedinLink.addEventListener("mouseover", function() {
        linkedinLink.style.color = "red"; // Change to desired color
    });

    linkedinLink.addEventListener("mouseout", function() {
        linkedinLink.style.color = ""; // Revert to default color
    });

    githubLink.addEventListener("mouseover", function() {
        githubLink.style.color = "blue"; // Change to desired color
    });

    githubLink.addEventListener("mouseout", function() {
        githubLink.style.color = ""; // Revert to default color
    });
});
