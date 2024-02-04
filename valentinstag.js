
window.onload = function () {
    text = "Hallo maus";
    document.getElementById("nachricht").innerHTML = text
    document.getElementById("sad_capybara").style.visibility = "hidden";
    SetFormState(false);
    state = 0
}

window.onchange = function () {

    let radio1 = document.getElementById('nein');
    if (radio1.checked) {
        document.getElementById("feedback").innerHTML = "Bist du sicher?"
        document.getElementById("sad_capybara").style.visibility = "visible";
    }
    else {
        document.getElementById("feedback").innerHTML = ""
        document.getElementById("sad_capybara").style.visibility = "hidden";
    }
}

function progress() {
    state++;

    if (state == 1) {
        text = "Naja also ich wollte dich was fragen..."
    }
    else if (state == 2) {
        text = "Dings..."
    }
    else if (state == 3) {
        text = "Wegen..."
    }
    else if (state == 4) {
        text = "Also bald ist ja Valentinstag..."
    }
    else if (state == 5) {
        text = "Und ich dachte mir so.. naja.."
    }
    else if (state == 6) {
        text = "Also wenn du noch nichts vor hast..."
    }
    else if (state == 7) {
        text = "Willst du ja vielleicht mit mir was machen?"
        document.getElementById("knopf").style.visibility = "hidden";
        SetFormState(true);
    }

    document.getElementById('nachricht').innerHTML = text
}

function SetFormState(formState){
    if(formState){
        setVisibility = "visible";
        setDisabled = false;
    }
    else{
        setVisibility = "hidden";
        setDisabled = true;
    }
    document.getElementById("frage").style.visibility = setVisibility;
    document.getElementById("ja").disabled = setDisabled;
    document.getElementById("nein").disabled = setDisabled;
    document.getElementById("maybe").disabled = setDisabled;
}
