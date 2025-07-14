const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark-mode")) {
    // currently dark, switch to light
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌙";
  } else {
    // currently light, switch to dark
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
});


const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)
  

  const emailInput = document.getElementById("newsletterEmail");
  const subscribeBtn = document.getElementById("subscribeBtn");
  const successMsg = document.getElementById("subscribeMessage");
  const errorMsg = document.getElementById("errorMessage");

  subscribeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email.includes("@")) {
      successMsg.style.display = "block";
      errorMsg.style.display = "none";
      emailInput.value = "";
    } else {
      successMsg.style.display = "none";
      errorMsg.style.display = "block";
    }
  });



  const bgCursor = document.createElement('div');
  bgCursor.classList.add('background-cursor');
  document.body.appendChild(bgCursor);

  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;
    bgCursor.style.left = `${posX}px`;
    bgCursor.style.top = `${posY}px`;
    requestAnimationFrame(updateCursor);
  }

  updateCursor();

  

