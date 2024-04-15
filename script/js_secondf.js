let fav_items = [];
let cart = [];
function add_to_fav(el)
{ 
    let fav_counter = document.getElementById("fav-counter");
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
                    <p class="price">$${fav_items[i].price}</p>
                </div>
                <button class="delete" onclick="deletefromfav()"><i class="fa-solid fa-trash"></i></button>
                </div>
                </div>
            `
        }
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
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
        for(let i=0;i<fav_items.length;i++)
        {
            fav_d.innerHTML += 
            `
                <div class="fav_product">
                <img src="${fav_items[i].img}" alt="" class="fav-product-img">
                <div class="main-text-co">
                <div class="text-co">
                    <p class="title">${fav_items[i].title}</p>
                    <p class="price">$${fav_items[i].price}</p>
                </div>
                <button class="delete" onclick="deletefromfav()"><i class="fa-solid fa-trash"></i></button>
                </div>
                </div>
            `
        }
    }
    fav_counter.innerText = fav_items.length;
}
function addToCart(el)
{
    let cart_counter = document.getElementById("cart-counter");
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
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
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
    }
}