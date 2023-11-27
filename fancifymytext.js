function popUp(elementID){
    document.getElementById(elementID).style.fontSize = "24pt";
    alert("Hello, world!");
}

function popUp2(elementID, check){
    alert("Hello, world!");
    if(check == fancy){
        document.getElementById(elementID).style.fontWeight = "bold";
        document.getElementById(elementID).style.color = "blue";
        document.getElementById(elementID).style.textDecoration = "underline";
    }else{
        document.getElementById(elementID).style.fontWeight = "normal";
    }
}

function uppercase(elementID){
    var string = document.getElementById(elementID).value;
    document.getElementById(elementID).value = string.toUpperCase();

    var str = document.getElementById(elementID).value;
    var parts = str.split(".");
    str = parts.join("-moo.");
    console.log(str)
    document.getElementById(elementID).value = str;
}