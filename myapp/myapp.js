var select = document.querySelectorAll("select");


function set() {
    for (i = 0; i < select.length; i++) {
        var propVal = select[i].value;
        var propName = select[i].getAttribute("name");
        console.log(propName, propVal);

        var divSquare = document.getElementById("modify");

        divSquare.style[propName] = propVal;
    }


    console.log(divSquare.style.cssText);

}

var setButton = document.getElementById("set");
setButton.addEventListener('click', set);