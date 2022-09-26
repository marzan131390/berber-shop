let menuImg = document.getElementById("menu-img");
let menuBtn = document.getElementById("menu-btn");
let sideNavBar = document.getElementById("side-navbar");

//adding Event Listener here..
menuBtn.addEventListener("click", function() {
    if(sideNavBar.style.right === "0px"){
        sideNavBar.style.right = "-250px";
        menuImg.setAttribute("src", "images/menu.png");
    }
    else{
        sideNavBar.style.right = "0px";
        menuImg.setAttribute("src", "images/close.png")
    }
})