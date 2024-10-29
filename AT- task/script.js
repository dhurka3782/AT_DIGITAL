// JavaScript for Mobile Menu Toggle and FAQ Accordion

// Open Mobile Menu
function openMenu() {
    document.getElementById("menu").style.display = "block";
  }
  
  // Close Mobile Menu
  function closeMenu() {
    document.getElementById("menu").style.display = "none";
  }
  
  // FAQ Accordion Toggle
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
      const answer = item.querySelector('.faq-answer');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      const toggleIcon = item.querySelector('.faq-toggle');
      toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
    });
  });
  