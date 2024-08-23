

//------------------------------------------------- Header scroll -------------------------------------------------


window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    
    if (window.scrollY > 0) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});


//------------------------------------------------- Subscribe -------------------------------------------------


const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('subscribe-input');
const message = document.getElementById('message');

form.addEventListener('submit', function(event){
    
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    
    if(emailValue == '')
    {
        message.textContent = 'Email field cannot be empty.';
    }
    else 
    {
        message.textContent = 'Subscription successful!';
        emailInput.value = '';
    }
});


//------------------------------------------------- See more products -------------------------------------------------


var see_more = false;

document.querySelector("#see_more_products").addEventListener("click", function() {
    const product_row = document.querySelector(".product-row");

    if (!see_more) 
    {
        const new_products = [
            {
                name: "Beef Tacos",
                price: "22.00",
                rating: "4.7",
                image: "./product-7.jpg"
            },
            {
                name: "Fried Chicken",
                price: "17.00",
                rating: "4.9",
                image: "./product-8.jpeg"
            },
            {
                name: "Pasta",
                price: "20.00",
                rating: "5.0",
                image: "./product-9.jpeg"
            },
            {
                name: "Fish and Chips",
                price: "18.00",
                rating: "4.8",
                image: "./product-10.jpeg"
            },
            {
                name: "Cheeseburger",
                price: "15.50",
                rating: "4.6",
                image: "./product-11.jpeg"
            },
            {
                name: "Vegetable Stir Fry",
                price: "14.00",
                rating: "4.7",
                image: "./product-12.jpeg"
            }
        ];

        for (let i = 0; i < new_products.length; i++) 
        {
            const product = new_products[i];
            const product_div = document.createElement("div");
            product_div.classList.add("product");
        
            product_div.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="320px" height="190px">
                <div class="product-info">
                    <div class="product-name-cart">
                        <h1>${product.name}</h1>
                        <button>Add To Cart</button>
                    </div>
                    <div class="product-rating-price">
                        <p>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L8.854 4.6204L13 5.20452L10 8.02103L10.708 12L7 10.1204L3.292 12L4 8.02103L1 5.20452L5.146 4.6204L7 1Z" fill="#F48E28" stroke="#F48E28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${product.rating}
                        </p>
                        <h2><span>$</span> ${product.price}</h2>
                    </div>
                </div>`;
        
            product_row.appendChild(product_div);
        }

        this.innerHTML = `Show Less Products
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4414 7.77921C13.6334 7.77921 13.8264 7.85221 13.9724 8.00021C14.2644 8.29421 14.2634 8.76821 13.9704 9.06021L11.0184 11.9992L13.9704 14.9392C14.2634 15.2312 14.2644 15.7062 13.9724 15.9992C13.6804 16.2942 13.2064 16.2922 12.9124 16.0012L9.42641 12.5302C9.28541 12.3892 9.20641 12.1982 9.20641 11.9992C9.20641 11.7992 9.28541 11.6082 9.42641 11.4672L12.9124 7.99721C13.0584 7.85221 13.2504 7.77921 13.4414 7.77921Z" fill="white"/>
            </svg>`;

        see_more = true;
    } 
    else 
    {

        for (let i = 0; i < 6; i++) 
        {
            product_row.removeChild(product_row.lastElementChild);
        }

        this.innerHTML = `See More Products
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5586 16.2208C10.3666 16.2208 10.1736 16.1478 10.0276 15.9998C9.73558 15.7058 9.73658 15.2318 10.0296 14.9398L12.9816 11.9998L10.0296 9.0608C9.73658 8.7688 9.73558 8.2938 10.0276 7.9998C10.3196 7.7048 10.7936 7.7068 11.0876 7.9978L14.5736 11.4688C14.7146 11.6098 14.7936 11.8008 14.7936 11.9998C14.7936 12.1998 14.7146 12.3908 14.5736 12.5318L11.0876 16.0018C10.9416 16.1478 10.7496 16.2208 10.5586 16.2208Z" fill="white"/>
            </svg>`;

        see_more = false;
    }
});