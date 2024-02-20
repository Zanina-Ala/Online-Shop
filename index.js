async function getProduct() {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
}

async function main() {
    let products = await getProduct();
    let container = document.getElementById("work-container");
    let imgBaseUrl = "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/";

    for (let i = 0; i < 12; i++) {
        let product = products[i];

        let productDIV = document.createElement("div");
        let productimg = document.createElement("img");
        let productimg1 = document.createElement("img");
        let productimg2 = document.createElement("img");
        let productimg3 = document.createElement("img");
        let productprice = document.createElement("span");
        let productname = document.createElement("p");
        let productctg = document.createElement("p");
        let productcontext1 = document.createElement("div");
        let productcontext2 = document.createElement("div");

        productimg.classList.add("imageprod");
        productimg1.classList.add("stars");
        productimg2.classList.add("box");
        productimg3.classList.add("buy");
        productDIV.classList.add("productdiv");
        productprice.classList.add("price");
        productname.classList.add("title");
        productctg.classList.add("category");
        productcontext1 = document.createElement("context");
        productcontext2 = document.createElement("anothercontext");

        productimg.src = product.image;
        productimg1.src = `${imgBaseUrl}uhlym2mrhob6aoklzd0h.png`;
        productimg2.src = `${imgBaseUrl}giywnwhsomoybyi9vgxj.png`;
        productimg3.src = `${imgBaseUrl}q1pbhfwzuy1u8xqq6cbd.png`;
        productname.textContent = product.title;
        productprice.textContent = `$ ${product.price}`;
        productctg.textContent = product.category;

        productcontext2.appendChild(productimg2);
        productcontext2.appendChild(productimg3);
        productcontext2.appendChild(productctg);
        productDIV.appendChild(productcontext2);
        productDIV.appendChild(productimg);
        productDIV.appendChild(productname);
        productDIV.appendChild(productcontext1);
        productcontext1.appendChild(productprice);
        productcontext1.appendChild(productimg1);

        container.appendChild(productDIV);

        productDIV.addEventListener('click', function() {
            sessionStorage.setItem('clickedProduct', JSON.stringify(product));
            window.location.href = "article.html";
        });
    }
}

main();
