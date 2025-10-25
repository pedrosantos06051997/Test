const API_URL = "https://script.google.com/macros/s/AKfycbw-qvO76QHViEbmm1IJ4w3WVvxLcAm5G-26HaGU-AXA1nXnOKZO3sAyVdMBo-QV9-5B/exec"; // remplace TON_URL_ICI

// --- FORMULAIRE REGISTER ---
document.querySelector("#register-modal form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nom = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ type: "register", nom, email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.text();
  alert(result);
  e.target.reset();
});

// --- FORMULAIRE LOGIN ---
document.querySelector("#login-modal form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ type: "login", email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.text();

  if (result === "OK") {
    alert("Connexion réussie !");
    localStorage.setItem("username", email);
    window.location.href = "dashboard.html";
  } else {
    alert(result);
  }
});
