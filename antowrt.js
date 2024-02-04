

window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('result');
    const result = -1
    

    document.getElementById("ergebnis").innerHTML = myParam

    if(myParam == "JA"){ 
        window.location.replace("./antworten/ja.html");
    }
    else if(myParam == "NEIN"){
        window.location.replace("./antworten/nein.html");
    }
    else if(myParam == "MAYBE"){
        window.location.replace("./antworten/maybe.html");
    }
}

function JaImp(){

}

function NeinImp(){

}

function MaybeImp(){

}

