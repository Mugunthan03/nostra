// popup 
var popup = document.getElementById("popup")
var close = document.getElementById("close")

close.addEventListener("click",function(){
    popup.style.display="none"
    popup.style.background="none"
})


// sidenavbar
var hamburger = document.getElementById("hamburger")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

hamburger.addEventListener("click",function(){

    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})


var currentslide = 1;
var totalslides = document.getElementById("slider").childElementCount;

// var interval;

function prev() 
{
    if(currentslide > 1)
     {
        currentslide--;
    } 
    else
    {
       currentslide = totalslides;
   }
    
    showslide();
}

function next() 
{
    if(currentslide < totalslides) 
    {
        currentslide++;
    } 
    else 
    {
        currentslide = 1;
    }
    
    showslide();
}

function showslide()
 {
    var slides = document.getElementById("slider").getElementsByTagName("li");

    for (var i = 0; i < totalslides; i++) 
    {
        if (currentslide == i + 1)
         {
            slides[i].classList.remove("hidden");
        }
         else
          {
            slides[i].classList.add("hidden");
        }
    }
}

function startscroll()
 {
    interval = setInterval(function()
    {
        next();
    }, 3000); // Adjust the interval (in milliseconds) as needed
}

function stopscroll() {
    clearInterval(interval);
}

window.onload = function () {
    startscroll();
};


