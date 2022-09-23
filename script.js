let body = document.querySelector("body");
document.addEventListener("click", function(e){
    var x = e.offsetX;
    var y = e.offsetY;

    let ripple = document.createElement("div");
    ripple.className="ripple";
    body.appendChild(ripple);
    ripple.style.left = x+"px";
    ripple.style.top = y+"px";

    ripple.onanimationend = () =>{
        body.removeChild(ripple);
    }
});