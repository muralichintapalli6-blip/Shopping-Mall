let total = 0;
let count = 0;

function addToCart(name, price) {
    const cartItems = document.getElementById("cart-items");

    const li = document.createElement("li");
    li.innerHTML = `
        ${name} - ₹${price}
        <button onclick="removeItem(this, ${price})" class="remove-btn">❌</button>
    `;

    cartItems.appendChild(li);

    count++;
    total += price;

    updateCart();
}

function removeItem(button, price) {
    const li = button.parentElement;
    li.remove();

    count--;
    total -= price;

    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = count;
    document.getElementById("total").innerText = total;
}

function buyNow() {
    if (count === 0) {
        alert("Your cart is empty!");
    } else {
        alert(
            "Order Placed Successfully!\n" +
            "Items: " + count + "\n" +
            "Total Amount: ₹" + total
        );
    }
}