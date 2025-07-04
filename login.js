const form = document.getElementById('loginForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  
  successMessage.style.display = 'block';
});


 