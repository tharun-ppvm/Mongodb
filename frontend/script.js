const API = "http://localhost:5000";

async function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  alert((await res.json()).message);
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  alert((await res.json()).message);
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  const res = await fetch(`${API}/add-product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, description })
  });
  alert((await res.json()).message);
  getProducts();
}

async function getProducts() {
  const res = await fetch(`${API}/products`);
  const data = await res.json();
  const list = document.getElementById("productList");
  list.innerHTML = "";
  data.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong> - ₹${p.price}<br>${p.description}`;
    list.appendChild(div);
  });
}

window.onload = getProducts;
