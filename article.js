document.addEventListener('DOMContentLoaded', function() {
    const clickedProduct = JSON.parse(sessionStorage.getItem('clickedProduct'));
    if (clickedProduct) {
        document.getElementById('product-img').src = clickedProduct.image;
        document.getElementById('product-title').textContent = clickedProduct.title;
        document.getElementById('product-price').textContent = `$ ${clickedProduct.price}`;
        document.getElementById('product-description').textContent = clickedProduct.description;
    } else {
        console.error('Product details not found.');
    }
});

let buttonDiv = document.createElement("div");
buttonDiv.classList.add("btdiv");

let button1 = createButton("Product Information", "color1");
let button2 = createButton("Product Description", "color2");

buttonDiv.appendChild(button1);
buttonDiv.appendChild(button2);
document.body.appendChild(buttonDiv);

let lastContent = document.createElement("p");
lastContent.classList.add("lastcont");
lastContent.innerHTML = "Product Description Additional Info Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. simply cause by price ";
document.body.appendChild(lastContent);

buttonDiv.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        button1.classList.toggle("color1", event.target === button1);
        button2.classList.toggle("color2", event.target === button2);
    }
});

function createButton(text, colorClass) {
    let button = document.createElement("button");
    button.textContent = text;
    button.classList.add("btn", colorClass);
    return button;
}





