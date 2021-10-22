
/**variable index.html
 * 
*/
//test 2
const sectionItems = document.querySelector("#items");
const images = document.querySelector("#items > a > article > img");
const productName = document.querySelector(".productName");
const productDescription = document.querySelector(".productDescription");
/**
 * Api
 *  
 */
//list product in tab productsList
let productsList=[];
//call API 
const fetchPoduct =  async () => {
 await fetch("http://localhost:3000/api/products")
    .then((res)=>res.json())
    .then((data)=> {
       productsList= data;
    })
    .catch((error)=>{
        alert("Merci de recharger la page, une erreur est survenue !");
    })
};
//Display elements
const productDisplay = async () => {
    await fetchPoduct()
    sectionItems.innerHTML = productsListe.map((list)=>  
              `  
                 <a href="/front/html/product.html?id=${list._id}">
                    <article>
                        <img src="${list.imageUrl}" alt="${list.altTxt}" width="160" height="160">
                        <h3 class="productName">${list.name}</h3>
                        <p class="productDescription">${list.description}</p>
                    </article>
                </a>
              `

    ).join("");
};
productDisplay();   






