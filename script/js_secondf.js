let fav_items = [];
let cart = [];
let fav_counter = document.getElementById("fav-counter");

function add_to_fav(el)
{ 
    
    if(el.checked)
    {
        let container = el.parentElement;
        let price = container.getAttribute("price");
        let id = container.getAttribute("id");
        let img = container.getAttribute("img");
        let title = container.getAttribute("title");
        fav_items.push({
            "id": id,
            "price":price,
            "img":img,
            "title":title
        });
        reload_fav();
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "item added successfully to favorites"
          });
    }
    else {
        fav_items = fav_items.filter(item => item.id !== el.parentElement.getAttribute("id"));
        let fav_d = document.getElementById("fav_items");
        fav_d.innerHTML ="";
        reload_fav()
    }
    
}
let cart_counter = document.getElementById("cart-counter");
function addToCart(el)
{
    
    let check = cart.find(item => item.id === el.parentElement.getAttribute("id"));
    if(!check)
    {
        let container = el.parentElement;
        let price = container.getAttribute("price");
        let id = container.getAttribute("id");
        let img = container.getAttribute("img");
        let title = container.getAttribute("title");
        cart.push({
            "amount" : 1 ,
            "id": id,
            "price":price,
            "img":img,
            "title":title
        });
        reload_cart()
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "item added successfully to cart"
          });
          cart_counter.innerText = cart.length;
    }
    else {
        check.amount += 1;
        check.price  *= check.amount ;
        let cart_items = document.getElementById("cart_items");
        cart_items.innerHTML ="";
        reload_cart();
    }
}
function openfavitems()
{
    let fav_d = document.getElementById("fav_items");
    fav_d.style.right == "-30rem" ? fav_d.style.right = "0rem" : fav_d.style.right = "-30rem";
}
function opencart()
{
    let cart_items = document.getElementById("cart_items");
    cart_items.style.right == "-30rem" ? cart_items.style.right = "0rem" : cart_items.style.right = "-30rem";
}
function decrease(el)
{
    let item = cart.find(item => item.id === el.parentElement.getAttribute("id"));
    if(item.amount > 1)
    {
        item.amount -= 1;
        item.price  /= item.amount+1;
    }
    reload_cart();
}
function increase(el)
{
    let item = cart.find(item => item.id === el.parentElement.getAttribute("id"));
    item.amount += 1;
    item.price  *= item.amount ;
    reload_cart();
}
function deletefromcart(el)
{
    cart = cart.filter(item => item.id !== el.getAttribute("id"));
    reload_cart();
}
function reload_fav()
{
        let fav_d = document.getElementById("fav_items");
        fav_d.innerHTML ="";
        for(let i=0;i<fav_items.length;i++)
        {
            fav_d.innerHTML += `
                <div class="fav_product">
                <img src="${fav_items[i].img}" alt="" class="fav-product-img">
                <div class="main-text-co">
                <div class="text-co">
                    <p class="title">${fav_items[i].title}</p>
                    <p class="price-cafav" style = "color: white;">$${fav_items[i].price}</p>
                </div>
                <button id="${fav_items[i].id}" class="delete" onclick="deletefromfav(this)"><i class="fa-solid fa-trash"></i></button>
                </div>
                </div>
            `
        }
        fav_counter.innerText = fav_items.length;
}
function reload_cart()
{
    let cart_items = document.getElementById("cart_items");
    cart_items.innerHTML = "" ;
    for(let i=0;i < cart.length;i++)
    {
        cart_items.innerHTML += 
        `
            <div class="fav_product">
            <img src="${cart[i].img}" alt="" class="fav-product-img">
            <div class="main-text-co">
            <div class="text-co">
                <p class="title">${cart[i].title}</p>
                <p class="price-cafav" style="color:white;">$${cart[i].price}</p>
            </div>
            <div id="${cart[i].id}" class="amount">
                <button onclick="decrease(this)"><i class="fa-solid fa-minus"></i></button>
                <p>${cart[i].amount}</p>
                <button onclick="increase(this)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button id="${cart[i].id}" class="delete" onclick="deletefromcart(this)"><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>
        `
    }
    cart_counter.innerText = cart.length;
}
function deletefromfav(el)
{
    fav_items = fav_items.filter(item => item.id !== el.getAttribute("id"));
    reload_fav();
}
function openpaywindow()
{
    let pay_window = document.getElementById("container");
    pay_window.style.zIndex = "9999";
    pay_window.style.opacity = "1";
    pay_window.style.top = "4rem";
}
function closepaywindow()
{
    let pay_window = document.getElementById("container");
    pay_window.style.zIndex = "";
    pay_window.style.opacity = "";
    pay_window.style.top = "";
}