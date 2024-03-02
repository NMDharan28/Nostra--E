var navbar=document.querySelector(".side-navbar")

function shownav(){
    
    navbar.style.left= "0"
    
}
function exitnav(){
    console.log("function called")

    navbar.style.left="-60%"
}


var search=document.getElementById("search")
var productContainer=document.getElementById("items")
var productlist=productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredText=event.target.value.toUpperCase() 
    
    for (i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredText)<0)
        {
            productlist[i].style.display="none"
        }
        else
        {
            productlist[i].style.display="block"
        }

    }

})
// <i style="font-size:24px" class="fa">&#xf0c9;</i> 
// box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;}
