       
            let menu = document.getElementById("menu");
            let sideNav = document.getElementById("sideNav");
            let imgMenu = document.getElementById("imgMenu");
            

       let cart = document.getElementById("cart");
        let close = document.querySelector(".close");
        let body = document.querySelector("body"); 
        let listproducthtml= document.getElementById("feature");
        let listproducts = [];
    
/*
            cart.addEventListener('click', ()=> {
                body.classList.toggle('showcart')
            })
            close.addEventListener('click', ()=> {
                body.classList.toggle('showcart')
            })

            const initApp = ()=> {
                fetch('products.json')
                .then(response=>response.json())
                .then(data=> {
                    feature= data;
                    console.log(feature);
                })
            }
            initApp();*/

            sideNav.style.left ="-250px";
           menu.onclick = function(){
                if(sideNav.style.left == "-250px"){
                    sideNav.style.left = "0";
                    imgMenu.src ="images/close1.jpg";
                }
                else{
                    sideNav.style.left = "-250px";
                    imgMenu.src="images/menu.png";
                }
            }   