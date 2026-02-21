// Smooth scroll example (for future sections)

// document.getElementById("hireBtn").addEventListener("click", function() {
//   alert("Thank you for your interest. Please contact us to schedule your appointment.");
// });

document.getElementById("hireBtn").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({ 
    behavior: "smooth" 
  });
});