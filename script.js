let cart = [];
let totalValue = 0;

function login() {
    // Lógica de login
    alert("Login realizado com sucesso!");
    window.location.href = "home.html";
}

function showRegister() {
    document.getElementById("register").style.display = "block";
}

function hideRegister() {
    document.getElementById("register").style.display = "none";
}

function register() {
    // Lógica de cadastro
    alert("Cadastro realizado com sucesso!");
    hideRegister();
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalValue += productPrice;
    alert(`${productName} adicionado ao carrinho.`);
}

function logout() {
    // Lógica de logout
    alert("Logout realizado com sucesso!");
    window.location.href = "index.html";
}

function completePurchase() {
    alert("Compra realizada com sucesso!");
    // Lógica para salvar pedido
    window.location.href = "orders.html";
}