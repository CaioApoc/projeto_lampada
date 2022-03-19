const turnOn = document.getElementById("turnOn");
const turnOFF = document.getElementById("turnOFF");
const lamp = document.getElementById("lamp");
const arrumarLamp = document.getElementById("arrumar");

function isLampBroken(){
    return lamp.src.indexOf ("quebrada") > -1
}

function lampOn(){
    if(!isLampBroken())
    lamp.src = "./assets/ligada.jpg.jpg"
}

function lampOFF(){
    if(!isLampBroken())
    lamp.src = "./assets/desligada.jpg.jpg"
}

function breakLamp(){
    arrumarLamp.style.display = "inline"
    lamp.src = "./assets/quebrada.jpg.jpg"
}

function fixLamp(){
    arrumarLamp.style.display ="none"
    //if(!lampOn())
    lamp.src = "./assets/desligada.jpg.jpg"
}

turnOn.addEventListener("click", lampOn);
turnOFF.addEventListener("click", lampOFF);
lamp.addEventListener("dblclick", breakLamp);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOFF);
arrumarLamp.addEventListener("click", fixLamp)