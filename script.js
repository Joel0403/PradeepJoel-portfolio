// Copy_Text
document.addEventListener("DOMContentLoaded", function() {
    const emailContainer = document.getElementById("emailContainer");
    const emailText = document.getElementById("emailText");
    
    // Event listener for hover effect on emailContainer
    emailContainer.addEventListener("mouseenter", function() {
        emailText.style.cursor = "pointer"; // Change cursor to pointer on hover
        emailText.title = "Copy"; // Set tooltip text to "Copy" on hover
    });
    
    // Event listener for mouse leave event on emailContainer
    emailContainer.addEventListener("mouseleave", function() {
        emailText.title = ""; // Clear tooltip text when mouse leaves
    });
    
    // Event listener for click event on emailContainer
    emailContainer.addEventListener("click", function() {
        // Create a temporary textarea element to facilitate copying
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = emailText.innerText;
        document.body.appendChild(tempTextarea);
        
        // Select and copy the email text
        tempTextarea.select();
        document.execCommand("copy");
        
        // Remove the temporary textarea from the DOM
        document.body.removeChild(tempTextarea);
        
        // Update tooltip text to "Copied" after copying
        emailText.title = "Copied!";
    });
});
// Copy_Text



// Scroll To Top

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("#scroll-top").fadeIn();
      } else {
        $("#scroll-top").fadeOut();
      }
    });
    $("#scroll-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

// Scroll To Top
