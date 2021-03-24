window.onload = function(){
    var navBar = document.querySelector(".navbar");

    window.onscroll = function(){
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if(top >= 100){
            navBar.classList.remove("p-2");
        }
        else{
            navBar.classList.add("p-2");
        }
    }
}