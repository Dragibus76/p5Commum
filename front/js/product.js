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
    await fetchProductArticles();
            let displayImg = document.createElement("IMG");
            displayImg.setAttribute("src",`${productsListArticles.imageUrl}`);
            displayImg.setAttribute("alt", `${productsListArticles.altTxt}`);
                     itemImg.appendChild(displayImg);
                     idTitle.textContent = ` ${productsListArticles.name} `;
                     idPrice.textContent = ` ${productsListArticles.price} `;
                     idDescription.textContent = ` ${productsListArticles.description} `;
                     //CHOISE COLOR
                     productsListArticles.colors.forEach((color) => {
                        idColors.innerHTML += `<option value="${color}">${color}</option>`;
                     });
                     console.log(itemImg);
};
productDisplayArticles();
/***************************************AJOUT POUR LE ENVOYER VERS LE PANNIER********************************************************** */

// Render on Html
/*(async function renderItem() {
    let item = await fetchProductArticles();
    document.querySelector(
      ".item__img"
    ).innerHTML += `<img src="${productsListArticles.imageUrl}" alt="${productsListArticles.altTxt}">`;
    idTitle.innerHTML += productsListArticles.name;
    idPrice.innerHTML += productsListArticles.price;
    idDescription.innerHTML += productsListArticles.description;
    // Choice of item colors
    productsListArticles.colors.forEach((color) => {
      let htmlContent = `<option value="${color}">${color}</option>`;
      idColors.innerHTML += htmlContent;
    });
  })();*/
  /********************************************************* */
  // Add LocalStorage to card
  
  idAddToCart.addEventListener("click", () => {
    const itemId = fetchProductArticles();
    // Confirm color and quantity != 0
    if (idColors === "") {
      alert("Il est nécessaire de choisir une couleur");
    } else if (idQuantity == 0) {
      alert("Il faut au moins ajouter un Kanap");
    } else {
      // Push in the localStorage
      const itemInCart = [itemId, idColors];
      localStorage.setItem(itemInCart, idQuantity);
      window.location.href = "./cart.html";
    }
  });