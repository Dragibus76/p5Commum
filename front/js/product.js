const item = document.querySelector(".item"); //container section container article
const itemImg = document.querySelector(".item__img"); //img product
const idTitle = document.querySelector("#title"); //h1 title
const idPrice = document.querySelector("#price"); //price p
const idDescription = document.querySelector("#description"); //description
const idColors = document.querySelector("#colors"); //select colors name color-select
const idQuantity = document.querySelector("#quantity"); //input quantity
const idAddToCart = document.querySelector("#addToCart"); //button add to cart typt number

/**product in tab productsListArticles
 * for one article
 * recupération URL in fectchProctuctArticles
 * watch API in promesse
*/

let productsListArticles = [];
const fetchProductArticles = async () => {
    const newUrl = new URL(location.href).searchParams.get("id");
    console.log(newUrl);
    await fetch(`http://localhost:3000/api/products/${newUrl}`)
        .then((res) => res.json())
        .then((data) => {
            productsListArticles = data;
            console.log(productsListArticles);
        })
        .catch((error) => {
            alert("Merci de recharger la page, une erreur est survenue !");
        });
};
 
/**
 * display in product.html article unity with image
 */
const productDisplayArticles = async () => {
         //call function (url and promesse)
    await fetchProductArticles();
         //Create element image
            let displayImg = document.createElement("IMG");
            displayImg.setAttribute("src",`${productsListArticles.imageUrl}`);
            displayImg.setAttribute("alt", `${productsListArticles.altTxt}`);

         //display element in product.html 
                     itemImg.appendChild(displayImg);
                     idTitle.textContent = ` ${productsListArticles.name} `;
                     idPrice.textContent = ` ${productsListArticles.price} `;
                     idDescription.textContent = ` ${productsListArticles.description} `;
                     console.log(itemImg);
};
productDisplayArticles();


