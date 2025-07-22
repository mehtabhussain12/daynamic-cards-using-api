async function getProducts() {
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json()
    console.log(data.products);


let {products} = data;
let cards = document.getElementById('cards');
products.map(products => {
   let {title , price, images,} = products;
    cards.innerHTML += `
          <div >
            <img src="${images[0]}" height="200" width="200" alt="${title}">
            <h2>${title}</h2>
            <p class="price">$${price}</p>
    </div>
    `;
   
});
}