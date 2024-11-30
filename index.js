    // FOR LOGIN POP-UP
    
    const open_PopUp = document.querySelectorAll(".open-btn");
    const show_PopUp = document.getElementById("login-popup");
    const close_PopUp = document.getElementById("close-btn");

    open_PopUp.forEach(index => {
        index.onclick = function () {
        show_PopUp.style.display = "block";
      }
    });
   
    close_PopUp.onclick = function () {
      show_PopUp.style.display = "none";
    }

    // FOR ADD TO CART

    const AddtoCart = document.querySelectorAll(".add-to-cart");

    AddtoCart.forEach((index) => {
      index.onclick = function () {
        index.innerHTML = "Added &check;";
      }
    })

  // FOR WISHLIST   

  const Wishlist = document.querySelectorAll(".product-action-button i");

  Wishlist.forEach((index) => {
      index.onclick = function () {
        index.classList.remove('fa-regular');
        index.classList.add('fa-solid');
        index.style.color = "magenta";
      }
    })

    // FOR MORE PRODUCTS POP-UP

    const morePopUpbtn = document.querySelectorAll(".more-popUp");
    const popup = document.getElementById('popup');
    
    morePopUpbtn.forEach(index => {

        index.onclick = function() {

            setTimeout(function() {
                popup.style.display = 'flex';
            }, 100);
        
            setTimeout(function() {
                popup.style.display = 'none';
            }, 1200);

        };
        
    });
    