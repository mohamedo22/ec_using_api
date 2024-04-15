import src_images from './imges_src.json' assert {type:'json'};
const randomColors = [
    '#9FA051',
    '#2C8E9C',
    '#E74C3C',
    '#F39C12',
    '#3498DB',
    '#1ABC9C',
    '#9B59B6',
    '#34495E',
    '#E67E22',
    '#16A085'
];
const imagesArray = Object.values(src_images);
let all_images = document.querySelectorAll(".images");
let alltext_c = document.querySelectorAll(".fashion-slider-title-text");
async function categories(url)
{
    
    let response = await fetch(url);
    let all_categories = await response.json();
    for(let i=0 ; i< all_categories.length; i++)
    {
        all_images[i].setAttribute('src' , `${imagesArray[i]}`);
        alltext_c[i].innerHTML = all_categories[i];
    }
    console.log(all_categories);
    console.log("#".repeat(8));
    console.log(alltext_c);
    console.log("#".repeat(8));
    console.log(all_images);
}
categories('https://fakestoreapi.com/products/categories');
async function fetch_products(url)
{
  let response = await fetch (url);
  let all_products =  await response.json();
  console.log("#")
  console.log(all_products);
  let container = document.getElementById("products-co");
  for(let i=0 ; i<all_products.length ; i++)
  {
    
    let number_ofstars = Math.round(all_products[i].rating.rate);
    container.innerHTML += `
    <div class= "card" rate="${number_ofstars}"  >
    <div class="image-container">
            <img src="${all_products[i].image}" alt="product image">
        <div class="price">$${all_products[i].price}</div>
    </div>
    <label class="favorite" price="${all_products[i].price}" img="${all_products[i].image}" title="${all_products[i].title.length <= 25 ? all_products[i].title : all_products[i].title.substring(0,25)}" id="${all_products[i].id}" >
        <input type="checkbox" onclick= "add_to_fav(this)" class="check_fav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
            <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
        </svg>
    </label>

    <div class="content">
        <div class="brand">${all_products[i].category}</div>
        <div class="product-name">${all_products[i].title.length <= 25 ? all_products[i].title : all_products[i].title.substring(0,25)}</div>
        <div class="color-size-container">
        <div class="rating">
            <svg vbviewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                <path class="star${all_products[i].id}"  transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                <path class="star${all_products[i].id}"  transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                <path class="star${all_products[i].id}" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                <path class="star${all_products[i].id}"  transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                <path class="star${all_products[i].id}"  transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
            </svg>
        </div>
    </div>

    <div class="button-container" price="${all_products[i].price}" img="${all_products[i].image}" title="${all_products[i].title.length <= 25 ? all_products[i].title : all_products[i].title.substring(0,25)}" id="${all_products[i].id}">
        <button class="buy-button button">Buy Now</button>
        <button class="cart-button button" onclick="addToCart(this)">
            <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" id="cart-shopping-solid"></path>
            </svg>
        </button>
    </div>
    </div>
    `
    
    let allstars = document.querySelectorAll(`.star${all_products[i].id}`);
    for(let i=0 ; i<number_ofstars ; i++)
    {
      allstars[i].style.fill = "gold";
    }
    
  }
  let cards = document.querySelectorAll(".card");
    cards.forEach((el)=>
        {
            let rate = el.getAttribute("rate");
            if(rate == 5)
            {
                el.innerHTML += `<div class="ribbon">Popular 🔥</div>`
            }
            else if(rate == 4)
            {
                el.innerHTML += `<div class="ribbon" style = "background-color:#135886;">New 🌟</div>`
            }
        });
}

fetch_products('https://fakestoreapi.com/products');

