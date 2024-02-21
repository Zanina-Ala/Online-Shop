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


let Mybuttonplus = document.getElementById("last-button");
let numero = document.getElementById("numb");
let counter = 0;
Mybuttonplus.addEventListener("click", plus);
function plus() {
  numero.innerHTML = ++counter;
}

let lastcontent = document.createElement("p")
let buttondiv = document.createElement("div")
let button1 = document.createElement("button");


button1.textContent = "Product Information";
button1.classList.add("btn1","color1");
buttondiv.classList.add("btdiv")
lastcontent.classList.add("lastcont")

let button2 = document.createElement("button");
button2.textContent = "Product Information";
button2.classList.add("btn2","color2");
lastcontent.innerHTML="Product DescriptionAdditional InfoWelcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. simply couse by price ";

buttondiv.appendChild(button1)
buttondiv.appendChild(button2)
document.body.appendChild(buttondiv)
document.body.appendChild(lastcontent)


button1.addEventListener("click", function() {
    button1.classList.remove("color1"); 
    button1.classList.add("color2"); 
    button2.classList.remove("color2"); 
    button2.classList.add("color1");
});

button2.addEventListener("click", function() {
    button2.classList.remove("color1");
    button2.classList.add("color2"); 
    button1.classList.remove("color2"); 
    button1.classList.add("color1");
});